import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './Routing';
// import { BrowserRouter } from 'react-router-dom';
// import Redux from './Tugas/Redux';
// import Hooks from './Hooks';
// import Lifecycle from './Lifecycle';
// import Form1 from './Form1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<BrowserRouter>
    <React.StrictMode>
      {/* <App /> */}
      {/* <Form1 /> */}
      {/* <Lifecycle /> */}
      {/* <Hooks /> */}
      <Routing />
      {/* <Redux /> */}
    </React.StrictMode>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
