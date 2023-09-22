import React from 'react';
import {Avatar, Box, Table, Tbody, Td, Tr} from '@chakra-ui/react';
import {usersChats} from '../state/chats/usersChatSelectors';
import {useRecoilValue} from 'recoil';
import {useNavigate} from 'react-router-dom';
import moment from 'moment';
import {IConversation} from "../state/atoms";

const ChatList = () => {
    const conversationsList: IConversation[] = useRecoilValue(usersChats);
    const navigate = useNavigate();
    console.log("response", conversationsList)
    if (!conversationsList || conversationsList.length === 0) {
        return <b>No conversation</b>
    }

    return (
        <Table variant="simple">
            <Tbody>
                {conversationsList.map((message) => {
                    return (
                        <Tr
                            key={0}
                            onClick={() => {
                                navigate('/chat/' + message.participants);
                            }}
                        >
                            <Td width={'15%'}>
                                <Avatar/>
                            </Td>
                            <Td width={'70%'} align={'left'} paddingLeft={'0px'}>
                                <b>{message.last_msg_sender.substring(0, 10)}</b>
                                <br/>
                                {message.last_message}
                            </Td>
                            <Td width={'15%'}>
                                <Box>{moment(message.last_msg_time).fromNow()}</Box>
                            </Td>
                        </Tr>
                    );
                })}
            </Tbody>
        </Table>
    );
};

export default ChatList;
