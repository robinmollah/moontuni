import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import config from './firebase.config.json';

export const firebaseApp = initializeApp(config);
export const firebaseAuth = getAuth(firebaseApp);

export const firebaseUserProfileAuth = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log('on auth state change');
        resolve({
          name: user.displayName,
          dp_url: user.photoURL,
          email: user.email,
          emailVerified: user.emailVerified,
        });
      } else {
        resolve(user);
      }
    });
  });
};
