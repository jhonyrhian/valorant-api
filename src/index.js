import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Corpo from "./Corpo";
import Selecao from "./Selecao"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/agent" element={<Corpo/>}/>
      <Route path="/selection" element={<Selecao/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
