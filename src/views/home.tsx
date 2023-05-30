import { Button } from "../components";
import AppBar from "../components/AppBar";
import {
  IconPlus,
  IconPreloader,
  IconSearch,
  IconSort,
  IconTick,
} from "../components/Icons";
import { Page } from "../components";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { TransactionCard } from "../fragments";
import { useLocation, useNavigate, useOutlet } from "react-router-dom";
import { Transaction } from "../types/transaction";
import fetchTransactions from "../functions/fetchTransactions";
import useAppStore from "../contexts/appStore";
import { generatePropsFromTransaction } from "../fragments/TransactionCard";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const { auth, firestore } = useAppStore((state) => ({
    auth: state.auth,
    firestore: state.firestore,
  }));
  const [user, signingIn] = useAuthState(auth);
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // useEffect(() => {
  if (user)
    fetchTransactions(firestore, user?.uid, "all").then(setTransactions);
  // }, [user]);

  const outlet = useOutlet();
  const { pathname } = useLocation();

  if (signingIn)
    return (
      <Page>
        <div className="flex items-center justify-center flex-grow">
          <IconPreloader className="w-6 h-6 stroke-text dark:stroke-text-dark" />
        </div>
      </Page>
    );

  if (!signingIn && !user) navigate("/signin");

  const appBar = (
    <AppBar
      sticky
      cornerRadius={4}
      leading={<Button buttonStyle="action" className="" Icon={IconTick} />}
      actions={<Button buttonStyle="action" className="" Icon={IconSort} />}
      heading="All Transactions"
      primary={<Button buttonStyle="action" className="" Icon={IconSearch} />}
    >
      <Button
        buttonStyle="primary"
        className="mx-4 mb-4"
        Icon={IconPlus}
        label="New Transaction"
        onClick={() => navigate("/transaction/new")}
      />
    </AppBar>
  );

  return (
    <>
      <Page
        padding={{
          top: 0,
        }}
        gap={6}
        width={360}
        appBar={appBar}
      >
        {transactions.map((e) => (
          <TransactionCard
            key={e.id}
            {...generatePropsFromTransaction(e, pathname)}
          />
        ))}
      </Page>
      {outlet ?? (
        <Page className="hidden md:flex">
          <div className="flex justify-center items-center flex-grow">
            <p className="font-bold">No Transaction Selected</p>
          </div>
        </Page>
      )}
    </>
  );
}
