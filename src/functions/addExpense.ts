import { Firestore, doc, setDoc } from "firebase/firestore";
import { Expense } from "../types/expense";

export default async function addExpense(
  firestore: Firestore,
  expense: Expense
) {
  const docRef = doc(firestore, "expenses");
  await setDoc(docRef, expense);
}
