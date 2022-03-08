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
          last_message: 'I love you',
          last_msg_time: new Date(),
        },
        {
          participants: {
            id: 1,
            name: 'Hack',
          },
          messages: [],
          last_message: 'I am gonna fight you',
          last_msg_time: new Date(),
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
