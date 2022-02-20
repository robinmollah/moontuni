import React from 'react';
import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';

const MessageList = () => {
  const response = [
    {
      id: 1,
      name: 'John Doe',
      lastMessage: 'Something',
      time: Date.now() - 12 * 1000 * 100,
    },
    {
      id: 2,
      name: 'Jack Chan',
      lastMessage: 'Nothing',
      time: Date.now() - 12 * 1000 * 100,
    },
  ];

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th colspan={3}>Message List</Th>
        </Tr>
      </Thead>
      <Tbody>
        {response.map((message) => {
          return (
            <Tr key={message.id}>
              <Td width={'20%'}>{message.name}</Td>
              <Td width={'65%'}>{message.lastMessage}</Td>
              <Td width={'15%'}>{new Date(message.time).toString().substring(15, 25)}</Td>
            </Tr>
          );
        })}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default MessageList;
