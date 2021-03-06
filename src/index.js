import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './index.css';
import 'react-datepicker/dist/react-datepicker.css';

import * as serviceWorker from './serviceWorker';

import MainPage from './pages/MainPage/MainPage';

ReactDOM.render( 
  <HashRouter >
    <MainPage />
  </HashRouter>,
  document.getElementById('app')
);

module.hot.accept();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();