import { User } from "firebase/auth";
import { Firestore, collection, doc, getDoc } from "firebase/firestore";

export default async function fetchUserDoc(
  firestore: Firestore,
  userId: string
) {
  return getDoc(doc(collection(firestore, "users"), userId));
}
