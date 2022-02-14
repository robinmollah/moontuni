import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import config from './firebase.config.json';

export const firebaseApp = initializeApp(config);
export const firebaseAuth = getAuth(firebaseApp);
