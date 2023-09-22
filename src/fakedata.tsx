import {IConversation} from "./state/atoms";

export const fake_chat_list : IConversation[]= [
    {
        participants: {
            id: 1,
            name: 'Moontuni',
        },
        messages: [],
        last_message: 'Lebu',
        last_msg_time: new Date(Date.now() - 60 * 10000),
    },
    {
        participants: {
            id: 1,
            name: 'Demo user',
        },
        messages: [],
        last_message: 'I am gonna fight you',
        last_msg_time: new Date(Date.now() - 900000),
    },
];