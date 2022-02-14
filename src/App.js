import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Auth/Login';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

import firebaseConfig from './firebase.config';
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);

function App() {
  return <Login />;
}

export default App;
