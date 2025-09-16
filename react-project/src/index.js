import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Passgen from './Passgen';
import BgChanger from './bgchanger';
import ReactComponent from './React';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ReactComponent />
    <Passgen />
    <BgChanger />
  </React.StrictMode>
);

