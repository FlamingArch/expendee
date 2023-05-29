import { Auth, signOut as sO } from "firebase/auth";

export default async function signOut(auth: Auth) {
  return sO(auth);
}
