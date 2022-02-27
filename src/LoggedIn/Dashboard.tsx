import * as React from 'react';
import Conversation from './Conversation';
import { io } from 'socket.io-client';
import { useRecoilValue } from 'recoil';
import { firebaseUserSelector } from '../state/selectors';
import AskName from '../Profile/AskName';
let BACKEND_URL: string;
const domain = window.location.hostname;
if (domain === 'localhost' || domain === '127.0.0.1' || domain.includes('192.168.')) {
  BACKEND_URL = 'ws://192.168.1.125:4002';
} else {
  BACKEND_URL = 'wss://moontuni.properbd.net';
}
// TODO optimize socket connection

type IMessage = {
  sender: string;
  text: string;
  date: number;
};

const Dashboard = () => {
  const socket = io(BACKEND_URL);
  const user = useRecoilValue(firebaseUserSelector);
  if (!user.name) return <AskName />;
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

  function sendMessage(text: string, email: string | null) {
    socket.emit('chat_message', {
      sender: email || 'anonymous',
      text: text,
      time: Date.now(),
    });
  }

  function addMessage(msg: IMessage) {
    sendMessage(msg.text, msg.sender);
    setMessages([...messages, msg]);
  }
  return <Conversation messages={messages} addMessage={addMessage} />;
};

export default Dashboard;
