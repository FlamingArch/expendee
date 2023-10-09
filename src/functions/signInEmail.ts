import { Auth, signInWithEmailAndPassword } from "firebase/auth";

export default async function signInEmail(
  auth: Auth,
  email: string,
  password: string
) {
  return signInWithEmailAndPassword(auth, email, password);
}
