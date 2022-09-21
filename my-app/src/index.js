import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'

let token = localStorage.getItem("token")
let t = token ? token.accessToken : null;

export const instance = axios.create({
  baseURL:"http://localhost:8080"
  // headers:{
  //   "Authorization":`Bearer ${t}`
  //   // "Authorization":"Bearer "+"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6ZWRzaGlmMTIzQGljbG91ZC5jb20iLCJpYXQiOjE2NjM3MzYyNTcsImV4cCI6MTY2MzczNjM3N30.MLpKiV0wYI0rfVRhEtMASf91A2GA0MV7XnCl3Y-2MCQ"
  // }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
