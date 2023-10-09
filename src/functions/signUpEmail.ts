import { Auth, createUserWithEmailAndPassword } from "firebase/auth";

export default async function signUpEmail(
  auth: Auth,
  email: string,
  password: string
) {
  return createUserWithEmailAndPassword(auth, email, password);
}
