import { UserCredential } from "firebase/auth";
import {
  Firestore,
  Timestamp,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";
import { User } from "../types/user";

export default async function createUserDoc(
  firestore: Firestore,
  credentials: UserCredential,
  email: string,
  userName: string,
  newsletterSignedUp: boolean
) {
  const userDoc: User = {
    id: credentials.user.uid,
    email: credentials.user.email ?? email,
    userName: userName,
    newsletterSignedUp: newsletterSignedUp,
    profilePictureBase64: "",
    wallets: [],
    budgets: [],
    transactions: [],
    creditReports: [],
    paymentMethods: [],
    createdAt: Timestamp.now(),
  };
  const docRef = doc(collection(firestore, "users"), credentials.user.uid);
  return setDoc(docRef, userDoc);
}
