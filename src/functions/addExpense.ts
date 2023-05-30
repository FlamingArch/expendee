import {
  Firestore,
  arrayUnion,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";
import { Transaction } from "../types/transaction";
import { Budget } from "../types/budgets";
import { Account } from "../types/wallet";

export default async function addExpense(
  firestore: Firestore,
  expense: Transaction,
  budget: Budget,
  wallet: Account
) {
  const docRef = doc(collection(firestore, "transactions"));
  await setDoc(docRef, { ...expense, id: docRef.id });

  setDoc(
    doc(collection(firestore, "users"), expense.userId),
    {
      transactions: arrayUnion(docRef.id),
    },
    { merge: true }
  );

  setDoc(
    doc(collection(firestore, "budgets"), expense.categoryId),
    {
      transactions: arrayUnion(docRef.id),
      spentAmount: budget.spentAmount + expense.amount,
    },
    { merge: true }
  );

  setDoc(
    doc(collection(firestore, "wallet"), expense.walletId),
    {
      transactions: arrayUnion(docRef.id),
      balance: wallet.balance - expense.amount,
    },
    { merge: true }
  );
}
