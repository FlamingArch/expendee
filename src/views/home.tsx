import { Button } from "../components";
import AppBar from "../components/AppBar";
import {
  IconPlus,
  IconSearch,
  IconSimpleInterest,
  IconSort,
  IconTick,
  IconTips,
} from "../components/Icons";
import { Page } from "../components";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { TransactionCard } from "../fragments";
import { useLocation, useOutlet } from "react-router-dom";
import { Transaction } from "../types/transaction";
import fetchTransactions from "../functions/fetchTransactions";
import useAppStore from "../contexts/appStore";

export default function Home() {
  const outlet = useOutlet();
  const { pathname } = useLocation();

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const { auth, firestore } = useAppStore((state) => ({
    auth: state.auth,
    firestore: state.firestore,
  }));

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
        className="mx-3 mb-4"
        Icon={IconPlus}
        label="New Transaction"
      />
    </AppBar>
  );

  return (
    <>
      <Page gap={6} width={360} appBar={appBar}>
        {transactions.map((e, i) => (
          <TransactionCard
            key={i}
            selected={`${i}` == pathname.split("/")[2]}
            id={`${i}`}
            color="#ad0"
            time="9:17 PM"
            amountWithCurrency="₹ 1,69,999"
            title="iPhone 14 Pro Max"
            labelCategory="Tech"
            labelWallet="Shopping"
            IconCategory={IconSimpleInterest}
            IconWallet={IconTips}
          />
        ))}
      </Page>
      {outlet ?? (
        <Page className="justify-center items-center hidden md:flex">
          <p className="font-bold">No Transaction Selected</p>
        </Page>
      )}
    </>
  );
}
