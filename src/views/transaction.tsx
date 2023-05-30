import React, { useEffect, useState } from "react";
import { Button, Page } from "../components";
import AppBar from "../components/AppBar";
import {
  IconDelete,
  IconEdit,
  IconPreloader,
  IconShareAlt,
  IconSplit,
} from "../components/Icons";
import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { Transaction } from "../types/transaction";
import useAppStore from "../contexts/appStore";
import { Budget } from "../types/budgets";
import fetchBudget from "../functions/fetchBudget";
import { BudgetCard } from "../fragments";
import TransactionDetails from "../fragments/transactionDetails";
import MerchantCard from "../fragments/MerchantCard";
import TransactionPaymentMethodCard from "../fragments/TransactionPaymentMethodCard";

export default function transaction() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [budget, setBudget] = useState<Budget | null>(null);

  const { firestore } = useAppStore((state) => ({
    firestore: state.firestore,
  }));

  getDoc(doc(collection(firestore, "transactions"), id)).then((data) => {
    if (data.exists()) {
      setTransaction(data.data() as Transaction);
    } else {
      navigate("/");
    }
  });

  useEffect(() => {
    if (transaction) {
      fetchBudget(firestore, transaction?.categoryId ?? "").then((budget) => {
        setBudget(budget);
      });
    }
  }, [transaction]);

  if (!transaction) {
    return (
      <Page>
        <div className="flex flex-grow items-center justify-center">
          <IconPreloader className="w-6 h-6 stroke-text dark:stroke-text-dark" />
        </div>
      </Page>
    );
  }

  const appBar = (
    <AppBar
      sticky
      className="z-50"
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
    <Page padding={6} gap={6} appBar={appBar} adjustPaddingForAppBar={false}>
      <TransactionDetails transaction={transaction} />
      <BudgetCard budget={budget ?? undefined} transaction={transaction} />
      <MerchantCard transaction={transaction} />
      <TransactionPaymentMethodCard
        transaction={transaction}
        firestore={firestore}
      />
    </Page>
  );
}

// fixed inset-0 lg:static md:left-[330px]
