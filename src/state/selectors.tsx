import { selector, selectorFamily } from 'recoil';
import { firebaseSetUsername, firebaseUserProfileAuth } from '../firebase-app';
import { DEBUG } from '../App';
import {IUserProfile} from "./atoms";

export const firebaseUserSelector = selector<IUserProfile>({
  async get({}) {
    if (DEBUG) {
      return {
        displayName: 'Robin Molla',
        photoURL: 'https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg',
        email: 'robinsajin@gmail.com',
        emailVerified: false,
        uid: '1234567890',
      };
    }
    const user = firebaseUserProfileAuth();
    return user;
  },
  key: 'firebaseUserSelector',
});

export const userLoggedInState = selector<boolean>({
  key: 'userLoggedIn',
  get: ({ get }) => {
    if (DEBUG) return true;
    const user = get(firebaseUserSelector);
    return !!user;
  },
});

export const setUserNameSelector = selectorFamily({
  key: 'setUserName',
  get:
    (name: string) =>
    async ({}) => {
      const updateStatus = await firebaseSetUsername(name);
      return updateStatus;
    },
});
