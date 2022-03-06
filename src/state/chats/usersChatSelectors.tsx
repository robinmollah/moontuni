import { selector } from 'recoil';
import { DEBUG } from '../../App';
import { IConversation } from '../atoms';

export const usersChats = selector<string[]>({
  key: 'usersChats',
  get: ({}) => {
    if (DEBUG) return ['user_id1', 'user_id2'];
  },
});

export const getConversation = selector<IConversation>({
  key: 'getConversation',
  get: ({}) => {
    return {
      participants: [],
      messages: [],
      last_message: null,
    };
  },
});
