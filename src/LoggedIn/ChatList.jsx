import React from 'react';
import { Avatar, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const ChatList = () => {
  const response = [
    {
      id: 1,
      name: 'Susmita Moon',
      lastMessage: 'I love you',
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
              <Td width={'20%'}>
                <Avatar />
              </Td>
              <Td width={'65%'} align={'left'} paddingLeft={'0px'}>
                <b>{message.name}</b>
                <br />
                {message.lastMessage}
              </Td>
              <Td width={'15%'}>{new Date(message.time).toString().substring(15, 25)}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default ChatList;
