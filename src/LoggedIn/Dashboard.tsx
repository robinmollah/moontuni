import * as React from 'react';
import Conversation from './Conversation';
import { io } from 'socket.io-client';
import MessageList from './MessageList';
let BACKEND_URL;
const domain = window.location.hostname;
if (domain === 'localhost' || domain === '127.0.0.1' || domain.includes('192.168.')) {
  BACKEND_URL = 'ws://192.168.1.125:4002';
} else {
  BACKEND_URL = 'wss://moontuni.properbd.net';
}
export const socket = io(BACKEND_URL);

type IMessage = {
  sender: string;
  text: string;
  date: number;
};

const Dashboard = () => {
  const [messages, setMessages] = React.useState<IMessage[]>([
    { text: 'Hi', sender: '1', date: Date.now() },
    { text: 'Hello', sender: 'robinsajin@gmail.com', date: Date.now() },
    { text: 'Hello', sender: 'robinsajin@gmail.com', date: Date.now() },
    { text: 'Hello', sender: 'robinsajin@gmail.com', date: Date.now() },
    { text: 'Hello', sender: 'robinsajin@gmail.com', date: Date.now() },
    { text: 'Hello', sender: 'robinsajin@gmail.com', date: Date.now() },
    { text: 'Hello', sender: 'robinsajin@gmail.com', date: Date.now() },
    { text: 'Hello', sender: 'robinsajin@gmail.com', date: Date.now() },
    { text: 'Hello', sender: 'robinsajin@gmail.com', date: Date.now() },
    { text: 'Hello', sender: 'robinsajin@gmail.com', date: Date.now() },
  ]);
  const [attachedListener, setAttachedListener] = React.useState(false);
  if (!attachedListener) {
    socket.on('chat_message', (data) => {
      setMessages((messages) => [...messages, data]);
    });
    setAttachedListener(true);
  }

  function addMessage(msg: IMessage) {
    setMessages([...messages, msg]);
  }
  return <Conversation messages={messages} addMessage={addMessage} />;
};

export function sendMessage(text: string) {
  socket.emit('chat_message', {
    sender: window.localStorage['email'] || 'anonymous',
    text: text,
    time: Date.now(),
  });
}

export default Dashboard;
