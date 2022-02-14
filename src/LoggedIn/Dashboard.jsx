import React from 'react';
import Conversation from './Conversation';
import { io } from 'socket.io-client';
let BACKEND_URL;
if (window.location.href.includes('localhost') || window.location.href.includes('127.0.0.1')) {
  BACKEND_URL = '127.0.0.1:3000';
} else {
  BACKEND_URL = 'notifications.eagle3dstreaming.com:4002';
}
export const socket = io('ws://' + BACKEND_URL);

const Dashboard = () => {
  const [messages, setMessages] = React.useState([
    { text: 'Hi', sender: 1, time: Date.now() },
    { text: 'Hello', sender: 'robinsajin@gmail.com', time: Date.now() },
  ]);
  const [attachedListener, setAttachedListener] = React.useState(false);
  if (!attachedListener) {
    socket.on('chat_message', (data) => {
      setMessages((messages) => [...messages, data]);
    });
    setAttachedListener(true);
  }

  function addMessage(msg) {
    setMessages([...messages, msg]);
  }
  return <Conversation messages={messages} addMessage={addMessage} />;
};

export function sendMessage(text) {
  socket.emit('chat_message', {
    sender: window.localStorage['email'] || 'anonymous',
    text: text,
    time: Date.now(),
  });
}

export default Dashboard;
