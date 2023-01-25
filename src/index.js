import './index.css';
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Greycliffcf from './fonts/Fontspring-DEMO-greycliffcf-medium.otf';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        @font-face {
          font-family: 'Greycliffcf';
          src: url(${Greycliffcf}) format('opentype');
        }
        body {
          margin: 0;
          font-family: Greycliffcf, sans-serif;
          background-color: #fff5ed;
          color: #242423;
          font-size: 18px;
        }
        *,
        ::after,
        ::before {
          box-sizing: border-box;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
