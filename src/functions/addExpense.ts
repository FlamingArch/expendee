import { Firestore, doc, setDoc } from "firebase/firestore";
import { Transaction } from "../types/transaction";

export default async function addExpense(
  firestore: Firestore,
  expense: Transaction
) {
  const docRef = doc(firestore, "expenses");
  await setDoc(docRef, expense);
}
