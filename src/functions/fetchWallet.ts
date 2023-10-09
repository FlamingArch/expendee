import { Firestore, collection, doc, getDoc } from "firebase/firestore";
import { Account } from "../types/wallet";

export default async function fetchWallet(firestore: Firestore, id: string) {
  const documentRef = doc(collection(firestore, "wallets"), id);
  const document = await getDoc(documentRef);
  if (document.exists()) {
    return document.data() as Account;
  } else return null;
}
