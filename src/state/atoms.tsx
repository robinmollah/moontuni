import { atom } from 'recoil';

export interface IUserProfile {
  name: string;
  dp_url: string;
  email: string;
  emailVerified: boolean;
}

export interface IMessage {
  id: string;
  text: string;
  createdAt: string;
  user: IUserProfile;
}

export interface IConversation {
  participants: string[];
  messages: IMessage[];
  last_message: IMessage;
}

export const profileAtom = atom<IUserProfile>({
  key: 'profile',
  default: {
    name: null,
    dp_url: null,
    email: null,
    emailVerified: null,
  },
});

export const chatList = atom<IConversation>({
  key: 'chat_list',
  default: {
    participants: [],
    messages: [],
    last_message: null,
  },
});
