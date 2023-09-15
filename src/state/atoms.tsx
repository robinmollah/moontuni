import { atom } from 'recoil';
import { IContact } from './contacts/atoms';

export interface IUserProfile {
  name: string;
  dp_url: string;
  email: string;
  emailVerified: boolean;
}

export interface IMessage {
  id?: string;
  text?: string;
  createdAt?: string;
  user?: IUserProfile;
  time?: number;
  sender?: string;
}

export interface IConversation {
  participants: IContact[] | IContact;
  messages: IMessage[];
  last_message: string;
  last_msg_time: Date;
}

export const profileAtom = atom<IUserProfile>({
  key: 'profile',
  default: {
    name: "Robin Mollah",
    dp_url: "https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
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
    last_msg_time: new Date(),
  },
});
