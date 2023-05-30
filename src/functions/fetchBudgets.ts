import { Auth, User } from "firebase/auth";
import {
  Firestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Budget } from "../types/budgets";

export default async function fetchBudgets(
  firestore: Firestore,
  userId: string
) {
  const budgets: Budget[] = [];

  const collectionRef = collection(firestore, "budgets");
  const queryList = [
    where("userId", "==", userId),
    where("deleted", "==", false),
  ];

  const docs = await getDocs(query(collectionRef, ...queryList));

  docs.forEach((doc) => {
    if (doc.exists()) {
      budgets.push(doc.data() as Budget);
    }
  });

  return budgets;
}
