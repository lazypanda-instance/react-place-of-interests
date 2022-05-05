import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from './Adapter';
import App from './App';
import reportWebVitals from './reportWebVitals';

const isServer = !globalThis.document;
const origin = isServer
    ? ''
    : globalThis.location.origin;

const tree = <Adapter />;

ReactDOM.render(tree, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
