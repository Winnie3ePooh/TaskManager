import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import MainPage from './pages/MainPage/MainPage';

ReactDOM.render(
  <BrowserRouter>
    <MainPage />
  </BrowserRouter>,
  document.getElementById('app')
);

module.hot.accept();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
