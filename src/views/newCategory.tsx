import React, { useState } from "react";
import ModalSheet from "../components/ModalSheet";
import { useNavigate } from "react-router-dom";
import { Button, Page } from "../components";
import useAppStore from "../contexts/appStore";
import { useAuthState } from "react-firebase-hooks/auth";
import { IconDone, IconPreloader } from "../components/Icons";
import { collection, doc, setDoc, arrayUnion } from "firebase/firestore";

export default function PageNewCategory() {
  const { auth, firestore } = useAppStore((state) => ({
    auth: state.auth,
    firestore: state.firestore,
  }));

  const [user, signingIn] = useAuthState(auth);

  const [title, setTitle] = useState("");
  const [budgetAmount, setBudgetAmount] = useState(0);
  const [color, setColor] = useState("");

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
    const documentRef = doc(collection(firestore, "budgets"));
    const documentId = documentRef.id;

    if (!user) return;

    setDoc(documentRef, {
      id: documentId,
      budgetAmount: budgetAmount,
      categoryLabel: title,
      categoryIcon: "bill",
      color: color,
      currency: "INR",
      deleted: false,
      spentAmount: 0,
      transactions: [],
      userId: user.uid,
    }).then(navigateBack);

    setDoc(
      doc(collection(firestore, "users"), user.uid),
      {
        budgets: arrayUnion(documentId),
      },
      { merge: true }
    );
  };

  return (
    <Page>
      <ModalSheet
        onClose={navigateBack}
        visible={true}
        title="New Category"
        actions={
          <Button
            buttonStyle="primary"
            disabled={
              title.length === 0 || budgetAmount === 0 || color.length === 0
            }
            Icon={IconDone}
            label="Done"
            onClick={handleSubmit}
          />
        }
      >
        <p className="font-bold">Label</p>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Label"
        />

        <p className="font-bold">Budget Amount</p>
        <input
          value={budgetAmount == 0 ? "" : budgetAmount}
          onChange={(e) => {
            if (e.target.value.length === 0) {
              setBudgetAmount(0);
            } else if (/^\d+$/.test(e.target.value)) {
              setBudgetAmount(parseInt(e.target.value));
            }
          }}
          type="number"
          placeholder="Budget Amount"
        />

        <p className="font-bold">Color</p>
        <input
          style={{
            color: color,
          }}
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          type="text"
          placeholder="Color"
        />
      </ModalSheet>
    </Page>
  );
}
