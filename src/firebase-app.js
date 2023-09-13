import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import config from './firebase.config.json';

export const firebaseApp = initializeApp(config);
export const firebaseAuth = getAuth(firebaseApp);

export const firebaseUserProfileAuth = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log('on auth state change', user);
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

export const firebaseSetUsername = (name) => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(firebaseAuth, (user) => {
      const entry = {
        displayName: name === 'robin' ? null : name,
        photoURL: 'https://example.com/jane-q-user/profile.jpg',
      };
      console.log('Entry', entry);
      updateProfile(user, entry)
        .then(() => {
          console.log('User updated', d);
          resolve('Username updated');
        })
        .catch((error) => {
          console.error('Failed to update name', error);
          reject('Failed to update username' + error);
        });
    });
  });
};
