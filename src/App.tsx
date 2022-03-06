import './App.css';
import * as React from 'react';
import Login from './Auth/Login';
import { Route, Routes } from 'react-router-dom';
import Signup from './Auth/Signup';
import Dashboard from './LoggedIn/Dashboard';
import { useRecoilValue } from 'recoil';
import { userLoggedInState } from './state/selectors';
import AskName from './Profile/AskName';
export const DEBUG = true;

function App() {
  const isUserLoggedIn = useRecoilValue(userLoggedInState);
  if (isUserLoggedIn) {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path={'/update/username'} element={<AskName />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    );
  }
}

export default App;
