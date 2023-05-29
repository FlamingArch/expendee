import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { create } from "zustand";
import { AppStoreProps } from "../types/appStore";
import firebaseConstants from "../constants/firebase";

const app = initializeApp(firebaseConstants.firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const functions = getFunctions(app);

const useAppStore = create<AppStoreProps>((set) => ({
  app,
  auth,
  firestore,
  functions,
  credentials: null,
  signIn: async (email: string, password: string) => {
    set({
      credentials: await signInWithEmailAndPassword(auth, email, password),
    });
  },
  signOut: () => signOut(auth),
  signUp: (email: string, password: string) => {
    try {
      createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.error(e);
    }
  },
  sidebarVisible: true,
  toggleSidebar: () => {}, // TODO: Implement
}));

export default useAppStore;
