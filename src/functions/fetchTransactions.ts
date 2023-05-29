import { Auth, User } from "firebase/auth";
import { Transaction } from "../types/transaction";
import {
  Firestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default async function fetchTransactions(
  firestore: Firestore,
  userId?: string,
  type?: "all" | "expense" | "income",
  includeDeleted?: boolean
) {
  const typeParam = type ?? "all";
  const queries = [where("userId", "==", userId)];
  if (typeParam !== "all") {
    queries.push(where("type", "==", typeParam));
  }
  if (!includeDeleted) {
    queries.push(where("deleted", "==", false));
  }

  const transactions: Transaction[] = [];
  const collectionRef = collection(firestore, "transactions");
  const docs = await getDocs(query(collectionRef, ...queries));

  docs.forEach((doc) => {
    if (doc.exists()) {
      transactions.push(doc.data() as Transaction);
    }
  });

  return transactions;
}
