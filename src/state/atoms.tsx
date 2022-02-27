import { atom } from 'recoil';

export interface IUserProfile {
  name: string;
  dp_url: string;
  email: string;
  emailVerified: boolean;
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
