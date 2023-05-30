import React, { useState } from "react";
import ModalSheet from "../components/ModalSheet";
import { useNavigate } from "react-router-dom";
import { Button, Page } from "../components";
import useAppStore from "../contexts/appStore";
import { useAuthState } from "react-firebase-hooks/auth";
import { IconDone, IconPreloader } from "../components/Icons";
import { collection, doc, setDoc, arrayUnion } from "firebase/firestore";

export default function PageNewWallet() {
  const { auth, firestore } = useAppStore((state) => ({
    auth: state.auth,
    firestore: state.firestore,
  }));

  const [user, signingIn] = useAuthState(auth);

  const [title, setTitle] = useState("");
  const [startingBalance, setStartingBalance] = useState(0);
  const [linkedAccountName, setLinkedAccountName] = useState("");
  const [linkedAccountNumber, setLinkedAccountNumber] = useState("");
  const [minimumBalance, setMinimumBalance] = useState(0);
  const [minimumPreferredBalance, setMinimumPreferredBalance] = useState(0);

  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);

  if (signingIn)
    return (
      <Page>
        <div className="flex items-center justify-center flex-grow">
          <IconPreloader className="w-6 h-6 stroke-text dark:stroke-text-dark" />
        </div>
      </Page>
    );

  if (!signingIn && !user) navigate("/signin");

  const handleSubmit = () => {
    const documentRef = doc(collection(firestore, "wallets"));
    const documentId = documentRef.id;

    if (!user) return;

    setDoc(documentRef, {
      id: documentId,
      icon: "wallet",
      title: title,
      balance: startingBalance,
      description: "",
      linkedAccountName: linkedAccountName,
      linkedAccountNumber: linkedAccountNumber,
      startingBalance: startingBalance,
      minimumBalance: minimumBalance,
      minimumPreferredBalance: minimumPreferredBalance,
      isCredit: false,
      creditLimit: [],
      creditLimitHistory: [],
      userId: user.uid,
    }).then(navigateBack);

    setDoc(
      doc(collection(firestore, "users"), user.uid),
      {
        wallets: arrayUnion(documentId),
      },
      { merge: true }
    );
  };

  return (
    <Page>
      <ModalSheet
        onClose={navigateBack}
        visible={true}
        title="New Wallet"
        actions={
          <Button
            buttonStyle="primary"
            disabled={title.length === 0 || startingBalance === 0}
            Icon={IconDone}
            label="Done"
            onClick={handleSubmit}
          />
        }
      >
        <p className="font-bold">Title </p>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Title"
        />

        <p className="font-bold">StartingBalance (INR) </p>
        <input
          value={startingBalance == 0 ? "" : startingBalance}
          onChange={(e) => {
            if (e.target.value.length === 0) {
              setStartingBalance(0);
            } else if (/^\d+$/.test(e.target.value)) {
              setStartingBalance(parseInt(e.target.value));
            }
          }}
          type="number"
          placeholder="StartingBalance (INR)"
        />

        <p className="font-bold">Linked Account Name </p>
        <input
          value={linkedAccountName}
          onChange={(e) => {
            setLinkedAccountName(e.target.value);
          }}
          type="text"
          placeholder="Linked Account Name"
        />

        <p className="font-bold">Linked Account Number </p>
        <input
          value={linkedAccountNumber}
          onChange={(e) => {
            setLinkedAccountNumber(e.target.value);
          }}
          type="text"
          placeholder="Linked Account Number"
        />

        <p className="font-bold">Minimum Balance </p>
        <input
          value={minimumBalance}
          onChange={(e) => {
            if (e.target.value.length === 0) {
              setMinimumBalance(0);
            } else if (/^\d+$/.test(e.target.value)) {
              setMinimumBalance(parseInt(e.target.value));
            }
          }}
          type="number"
          placeholder="Minimum Balance"
        />

        <p className="font-bold">Minimum Preferred Balance </p>
        <input
          value={minimumPreferredBalance}
          onChange={(e) => {
            if (e.target.value.length === 0) {
              setMinimumPreferredBalance(0);
            } else if (/^\d+$/.test(e.target.value)) {
              setMinimumPreferredBalance(parseInt(e.target.value));
            }
          }}
          type="number"
          placeholder="Minimum Preferred Balance"
        />
      </ModalSheet>
    </Page>
  );
}
