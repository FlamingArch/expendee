import { createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const config = {
    apiKey: "AIzaSyAqxGyB-0sD4uD-Fu4BAnih746sBX9F9lo",
    authDomain: "fa-expendee.firebaseapp.com",
    projectId: "fa-expendee",
    storageBucket: "fa-expendee.appspot.com",
    messagingSenderId: "499452967343",
    appId: "1:499452967343:web:2081bfecdd1bfc76c2575a",
  };
  const app = initializeApp(config);

  const auth = getAuth(app);

  return (
    <FirebaseContext.Provider value={{ app: app, config: config, auth: auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};
