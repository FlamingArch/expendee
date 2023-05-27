import React, { useEffect, useState } from "react";
import { Button, Page } from "../components";
import AppBar from "../components/AppBar";
import {
  IconCardTick,
  IconCompoundInterest,
  IconDelete,
  IconEdit,
  IconPreloader,
  IconShareAlt,
  IconSplit,
  IconTips,
} from "../components/Icons";
import { useNavigate, useParams } from "react-router-dom";
import Chip from "../components/Chip";
import { collection, doc, getDoc } from "firebase/firestore";
import { Transaction } from "../types/transaction";
import useAppStore from "../contexts/appStore";
import firebase from "../constants/firebase";

export default function transaction() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [transaction, setTransaction] = useState<Transaction | null>(null);

  const { firebase } = useAppStore((state) => ({
    firebase: state.firestore,
  }));

  useEffect(() => {
    getDoc(doc(collection(firebase, "transactions"), id)).then((data) => {
      if (data.exists()) {
        setTransaction(data.data() as Transaction);
      } else {
        navigate("/");
      }
    });
  }, []);

  if (!transaction) {
    return (
      <Page className="items-center justify-center">
        <IconPreloader className="w-6 h-6 stroke-text dark:stroke-text-dark" />
      </Page>
    );
  }

  const appBar = (
    <AppBar
      sticky
      heading={transaction.title}
      title={<Button buttonStyle="action" className="" Icon={IconEdit} />}
      primary={<Button buttonStyle="action" className="" Icon={IconEdit} />}
      actions={
        <>
          <Button buttonStyle="action" Icon={IconSplit} />
          <Button buttonStyle="action" Icon={IconShareAlt} />
          <Button buttonStyle="action" Icon={IconDelete} />
        </>
      }
    />
  );

  return (
    <Page gap={4} appBar={appBar} adjustPaddingForAppBar={false}>
      <div className="flex flex-col items-center gap-4">
        <div className="text-6xl font-extralight">{transaction.amount}</div>
        <div className="font-bold">
          {new Date(transaction.date.toMillis()).toDateString()}
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Button
          buttonStyle="secondary"
          Icon={IconSplit}
          label="Split with Friends"
        />
        <Button
          buttonStyle="secondary"
          disabled
          className={
            transaction.isRepaid ? "hover:brightness-100 opacity-50" : ""
          }
          Icon={IconCardTick}
          label={transaction.isRepaid ? "Credit Paid" : "Mark Credit as Paid"}
        />
      </div>
      {transaction.recurring && (
        <div className="flex flex-col items-center gap-4">
          <div className="font-bold">Recurring Payment</div>
        </div>
      )}
      <div className="flex items-center justify-center gap-4">
        <Chip
          label={transaction.categoryLabel}
          Icon={IconCompoundInterest}
          color={transaction.categoryColor}
        />
        <Chip
          label={transaction.walletLabel}
          Icon={IconTips}
          color={transaction.categoryColor}
        />
      </div>
    </Page>
  );
}

// fixed inset-0 lg:static md:left-[330px]
