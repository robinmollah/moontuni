import React from 'react';
import PropTypes from 'prop-types';
import { Table, Td, Tr } from '@chakra-ui/react';

const Conversation = (props) => {
  const userId = 2;
  const messages = [
    { text: 'Hi', sender: 1, time: Date.now() },
    { text: 'Hello', sender: 2, time: Date.now() },
  ];
  return (
    <Table>
      {messages.map((message, idx) => (
        <Tr key={idx}>
          <Td float={message.sender === userId && 'right'}>{message.text}</Td>
        </Tr>
      ))}
    </Table>
  );
};

Conversation.propTypes = {};

export default Conversation;
