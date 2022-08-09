import { signOut } from "firebase/auth";
import { useContext } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import AddItem from "./AddItem";
import { FirebaseContext } from "./Firebase";

const App = () => {
  const { auth } = useContext(FirebaseContext);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <>
        <button onClick={() => signOut(auth)}>Sign out</button>
        <AddItem />
      </>
    );
  }
  return (
    <div className="App">
      <h1>Expendee</h1>
      <button onClick={() => signInWithGoogle()}>Sign In</button>
    </div>
  );
};

export default App;
