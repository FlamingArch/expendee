import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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
  setUserCredentials: (credentials) => set({ credentials }),
  sidebarVisible: true,
  toggleSidebar: () => {}, // TODO: Implement
}));

export default useAppStore;
