import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Auth/Login';
import { Route, Routes } from 'react-router-dom';
import Signup from './Auth/Signup';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from './firebase-app';
import Dashboard from './LoggedIn/Dashboard';

function App() {
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('User already logged in', user);
      window.localStorage.setItem('uid', uid);
      window.localStorage.setItem('email', user.email);
      if (!window.location.href.includes('dashboard')) {
        window.location.href = '/dashboard';
      }
    } else {
      // User is signed out
      // ...
      if (window.location.href.includes('dashboard')) {
        window.location.href = '/';
      }
    }
  });

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
