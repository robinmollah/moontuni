import { selector } from 'recoil';
import { DEBUG } from '../../App';
import { IConversation } from '../atoms';

export const usersChats = selector<IConversation[]>({
  key: 'usersChats',
  get: ({}) => {
    if (DEBUG)
      return [
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
  },
});

export const getConversation = selector<IConversation>({
  key: 'getConversation',
  get: ({}) => {
    return {
      participants: [],
      messages: [],
      last_message: null,
      last_msg_time: new Date(),
    };
  },
});
