import { Firestore, collection, doc, getDoc } from "firebase/firestore";
import { Budget } from "../types/budgets";

export default async function fetchBudget(firestore: Firestore, id: string) {
  const budgetRef = doc(collection(firestore, "budgets"), id);
  const budget = await getDoc(budgetRef);
  if (budget.exists()) {
    return budget.data() as Budget;
  } else return null;
}
