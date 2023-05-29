import { FirebaseApp } from "firebase/app";
import { Auth, User, UserCredential } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import { Functions } from "firebase/functions";

export type AppStoreProps = {
  sidebarVisible: boolean;
  toggleSidebar: () => void;
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
  functions: Functions;
  credentials: UserCredential | null;
  setUserCredentials: (credentials: UserCredential | null) => void;
};
