import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import anime from "animejs/lib/anime.es.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/firebase-app";

var firebaseConfig = {
  apiKey: "AIzaSyDgUKc_MxIehNI37s51TxYJ2ZD-IJgXQEI",
  authDomain: "expendee-f303.firebaseapp.com",
  projectId: "expendee-f303",
  storageBucket: "expendee-f303.appspot.com",
  messagingSenderId: "44443531028",
  appId: "1:44443531028:web:b75535dd9ab294bc9bf401",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
