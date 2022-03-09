import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Button, Flex, IconButton, Input, Table, Tbody, Td, Tr } from '@chakra-ui/react';
import useWindowSize from '../hoooks/useWindowSize';
import { firebaseUserSelector } from '../state/selectors';
import { useRecoilValue } from 'recoil';
import Hamburger from '../comps/Hamburger';
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Conversation = ({ messages, addMessage }) => {
  const user = useRecoilValue(firebaseUserSelector);
  const [message, setMessage] = React.useState('');
  const windowSize = useWindowSize();
  const navigate = useNavigate();

  const sendTextMessage = () => {
    // setMessages([...messages, { text: message, sender: email, time: Date.now() }]);
    addMessage({ text: message, sender: user.email, time: Date.now() });
    setMessage('');
  };
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, windowSize]);

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendTextMessage();
    }
  }

  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        align={'center'}
        position="fixed"
        top={'0px'}
        width={'100%'}
        padding={'0px 1em'}
        backgroundColor={'rgb(173,123,123)'}
        boxShadow={'rgb(173,123,123) 0px 4px 4px'}
      >
        <IconButton icon={<MdArrowBack />} onClick={() => navigate(-1)} />
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
          <Avatar bg="teal.500" marginRight={'1em'} />
          <p>{user.email}</p>
        </Box>
        <Hamburger />
      </Box>
      <Table marginTop={'3em'} marginBottom={'3.8em'}>
        <Tbody>
          {messages.map((message, idx) => (
            <Tr key={idx}>
              <Td float={message.sender === user.email && 'right'}>
                <b>{message.text}</b>
                <br />
                <small>{message.sender.toString().substring(0, 12)}</small>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <div ref={messagesEndRef} />
      <Flex
        backgroundColor={'rgb(173,123,123)'}
        backdropBlur={true}
        position="fixed"
        padding={'1em'}
        bottom={'0px'}
        width={'100%'}
        alignItems={'center'}
      >
        <Input type={'text'} onChange={(e) => setMessage(e.target.value)} value={message} onKeyDown={handleKeyDown} />
        <Button onClick={sendTextMessage}>Send</Button>
      </Flex>
    </>
  );
};

Conversation.propTypes = {
  messages: PropTypes.array.isRequired,
  addMessage: PropTypes.func.isRequired,
};

export default Conversation;
