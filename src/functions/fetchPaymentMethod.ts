import { Firestore, collection, doc, getDoc } from "firebase/firestore";
import { PaymentMethod } from "../types/paymentMethod";

export default async function fetchPaymentMethod(
  firestore: Firestore,
  id: string
) {
  const documentRef = doc(collection(firestore, "paymentMethod"), id);
  const document = await getDoc(documentRef);
  if (document.exists()) {
    return document.data() as PaymentMethod;
  } else return null;
}
