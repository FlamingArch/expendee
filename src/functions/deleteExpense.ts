import { Firestore, collection, doc, setDoc } from "firebase/firestore";

export default async function addExpense(id: string, firestore: Firestore) {
  const docRef = doc(collection(firestore, "expenses"), id);
  await setDoc(docRef, { deleted: true }, { merge: true });
}
