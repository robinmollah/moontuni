import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Heading, Input, Stack, Table, Tbody, Td, Text, Tr } from '@chakra-ui/react';
import { sendMessage, socket } from './Dashboard';

const Conversation = (props) => {
  const email = window.localStorage['email'];
  const [message, setMessage] = React.useState('');

  const sendTextMessage = () => {
    // setMessages([...messages, { text: message, sender: email, time: Date.now() }]);
    props.addMessage({ text: message, sender: email, time: Date.now() });
    setMessage('');
    sendMessage(message);
  };

  return (
    <>
      <Heading align={'center'}>{email}</Heading>
      <Table>
        <Tbody>
          {props.messages.map((message, idx) => (
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

      <Stack>
        <Input type={'text'} onChange={(e) => setMessage(e.target.value)} value={message} />
        <Button onClick={sendTextMessage}>Send</Button>
      </Stack>
    </>
  );
};

Conversation.propTypes = {
  messages: PropTypes.array,
  addMessage: PropTypes.func,
};

export default Conversation;
