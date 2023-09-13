import './App.css';
import * as React from 'react';
import Login from './Auth/Login';
import { Route, Routes } from 'react-router-dom';
import Signup from './Auth/Signup';
import ConversationContainer from './LoggedIn/ConversationContainer';
import { useRecoilValue } from 'recoil';
import { userLoggedInState } from './state/selectors';
import AskName from './Profile/AskName';
import TabContainer from './LoggedIn/TabContainer';
import PrivacyPolicy from './comps/PrivacyPolicy';
import ForgotPassword from "./Auth/ForgotPassword";
export const DEBUG = false;

function App() {
  const isUserLoggedIn = useRecoilValue(userLoggedInState);
  if (isUserLoggedIn) {
    return (
      <Routes>
        <Route path="/chat/:slug" element={<ConversationContainer />} />
        <Route path="/" element={<TabContainer />} />
        <Route path={'/update/username'} element={<AskName />} />
        <Route path={'/privacy'} element={<PrivacyPolicy />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/reset_password" element={<ForgotPassword />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    );
  }
}

export default App;
