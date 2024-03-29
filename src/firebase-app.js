import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import config from './firebase.config.json';
import {getDatabase} from "firebase/database"

export const firebaseApp = initializeApp(config);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDatabase = getDatabase(firebaseApp);

// const conversationsRef = ref(firebaseDatabase, 'conversations');

export const firebaseUserProfileAuth = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log('on auth state change', user);
        resolve({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
          emailVerified: user.emailVerified,
          uid: user.uid,
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
