import { selector, selectorFamily } from 'recoil';
import { firebaseSetUsername, firebaseUserProfileAuth } from '../firebase-app';

export const firebaseUserSelector = selector({
  async get({}) {
    const user = firebaseUserProfileAuth();
    return user;
  },
  key: 'firebaseUserSelector',
});

export const userLoggedInState = selector<boolean>({
  key: 'userLoggedIn',
  get: ({ get }) => {
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
