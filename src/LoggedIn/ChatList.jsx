import React from 'react';
import { Avatar, Table, Tbody, Td, Tr } from '@chakra-ui/react';
import { usersChats } from '../state/chats/usersChatSelectors';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

const ChatList = () => {
  const response = useRecoilValue(usersChats);
  const navigate = useNavigate();

  return (
    <Table variant="simple">
      <Tbody>
        {response.map((message) => {
          return (
            <Tr
              key={message.id}
              onClick={() => {
                navigate('/chat/' + message.participants.id);
              }}
            >
              <Td width={'15%'}>
                <Avatar />
              </Td>
              <Td width={'70%'} align={'left'} paddingLeft={'0px'}>
                <b>{message.participants.name}</b>
                <br />
                {message.last_message}
              </Td>
              <Td width={'15%'}>{new Date(message.last_msg_time).toString().substring(15, 25)}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default ChatList;
