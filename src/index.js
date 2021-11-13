import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Components/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Routes from './Routes'


const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
