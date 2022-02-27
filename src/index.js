import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoadingScreen from './comps/LoadingScreen';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider>
        <BrowserRouter>
          <Suspense fallback={<LoadingScreen />}>
            <App />
          </Suspense>
        </BrowserRouter>
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
