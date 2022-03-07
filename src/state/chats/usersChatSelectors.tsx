import { selector } from 'recoil';
import { DEBUG } from '../../App';
import { IConversation } from '../atoms';

export const usersChats = selector<IConversation[]>({
  key: 'usersChats',
  get: ({}) => {
    if (DEBUG)
      return [
        {
          participants: 'Moontuni',
          messages: [],
          last_message: null,
          last_msg_time: new Date(),
        },
        {
          participants: 'Tuntuni',
          messages: [],
          last_message: null,
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
