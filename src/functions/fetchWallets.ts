import {
  Firestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Account } from "../types/wallet";

export default async function fetchWallets(
  firestore: Firestore,
  userId: string
) {
  const wallets: Account[] = [];
  const collectionRef = collection(firestore, "wallets");

  const docs = await getDocs(
    query(collectionRef, where("userId", "==", userId))
  );

  docs.forEach((doc) => {
    if (doc.exists()) wallets.push(doc.data() as Account);
  });

  return wallets;
}
