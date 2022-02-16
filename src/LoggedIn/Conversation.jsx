import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Flex, Heading, Input, Stack, Table, Tbody, Td, Text, Tr } from '@chakra-ui/react';
import { sendMessage, socket } from './Dashboard';

const Conversation = ({ messages, addMessage }) => {
  const email = window.localStorage['email'];
  const [message, setMessage] = React.useState('');

  const sendTextMessage = () => {
    // setMessages([...messages, { text: message, sender: email, time: Date.now() }]);
    addMessage({ text: message, sender: email, time: Date.now() });
    setMessage('');
    sendMessage(message);
  };

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <Heading align={'center'} position="fixed" top={'1px'} width={'100%'}>
        {email}
      </Heading>
      <Table marginTop={'2em'} marginBottom={'3em'}>
        <Tbody>
          {messages.map((message, idx) => (
            <Tr key={idx}>
              <Td float={message.sender === email && 'right'}>
                <b>{message.text}</b>
                <br />
                <small>{message.sender.toString().substring(0, 12)}</small>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <div ref={messagesEndRef} />
      <Flex backdropBlur={true} backgroundColor={'white'} position="fixed" bottom={'1em'} width={'100%'}>
        <Input type={'text'} onChange={(e) => setMessage(e.target.value)} value={message} />
        <Button onClick={sendTextMessage}>Send</Button>
      </Flex>
    </>
  );
};

Conversation.propTypes = {
  messages: PropTypes.array,
  addMessage: PropTypes.func,
};

export default Conversation;
