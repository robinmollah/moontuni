import { selector } from 'recoil';
import { firebaseUserProfileAuth } from '../firebase-app';

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

// export const testSelector = selector({
// 	get(opts: { get: GetRecoilValue; getCallback: GetCallback }): Promise<T> | RecoilValue<T> | T {
// 		return undefined;
// 	},
// 	key: "",
// 	set<T>(opts: { set: SetRecoilState; get: GetRecoilValue; reset: ResetRecoilState }, newValue: DefaultValue | T): void {
// 	}
// });
