import { selector, selectorFamily } from 'recoil';
import { firebaseSetUsername, firebaseUserProfileAuth } from '../firebase-app';
import { DEBUG } from '../App';

export const firebaseUserSelector = selector({
  async get({}) {
    if (DEBUG) {
      return {
        name: 'Robin Molla',
        dp_url: 'https://example.com/jane-q-user/profile.jpg',
        email: 'robinsajin@gmail.com',
        emailVerified: false,
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
