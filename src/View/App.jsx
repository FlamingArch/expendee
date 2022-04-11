import Scaffold from "./Components/Scaffold";
import { TabView } from "./Components/TabBar";

import All from "./Pages/All";
import Spent from "./Pages/Spent";
import Received from "./Pages/Received";
import SimpleInterest from "./Pages/SimpleInterest";
import CompoundInterest from "./Pages/CompoundInterest";
import Tips from "./Pages/Tips";
import AppBar from "./Fragments/AppBar";

import { initializeApp } from "firebase/app";

import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./Pages/SignIn";

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAqxGyB-0sD4uD-Fu4BAnih746sBX9F9lo",
    authDomain: "fa-expendee.firebaseapp.com",
    projectId: "fa-expendee",
    storageBucket: "fa-expendee.appspot.com",
    messagingSenderId: "499452967343",
    appId: "1:499452967343:web:2081bfecdd1bfc76c2575a",
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  const signInGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  var appBar = <AppBar />;

  return user ? (
    <Scaffold appBar={appBar}>
      <TabView>
        <All />
        <Spent />
        <Received />
        <SimpleInterest />
        <CompoundInterest />
        <Tips />
      </TabView>
    </Scaffold>
  ) : (
    <SignIn signInGoogle={signInGoogle} />
  );
};

export default App;
