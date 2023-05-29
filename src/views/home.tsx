import { Button } from "../components";
import AppBar from "../components/AppBar";
import { IconPlus, IconSearch, IconSort, IconTick } from "../components/Icons";
import { Page } from "../components";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { TransactionCard } from "../fragments";
import { useLocation, useNavigate, useOutlet } from "react-router-dom";
import { Transaction } from "../types/transaction";
import fetchTransactions from "../functions/fetchTransactions";
import useAppStore from "../contexts/appStore";
import { generatePropsFromTransaction } from "../fragments/TransactionCard";

export default function Home() {
  const outlet = useOutlet();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const { auth, firestore } = useAppStore((state) => ({
    auth: state.auth,
    firestore: state.firestore,
  }));

  if (auth.currentUser == null) navigate("/signin");

  useEffect(() => {
    fetchTransactions(firestore, auth, {
      type: "all",
      includeDeleted: true,
    }).then((transactions) => {
      setTransactions(transactions);
    });
  }, []);

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
