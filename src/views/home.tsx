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
import React from "react";
import _ from "lodash";
import { TransactionCard } from "../fragments";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Page
        gap={6}
        appBar={
          <AppBar
            sticky
            cornerRadius={4}
            leading={
              <IconTick className="w-12 h-12 p-3 dark:fill-white fill-text rounded-xl hover:bg-slate-200 cursor-pointer" />
            }
            actions={
              <IconSort className="w-12 h-12 p-3 dark:fill-white fill-text rounded-xl hover:bg-slate-200 cursor-pointer" />
            }
            heading={<p className="p-2">All Transactions</p>}
            primary={
              <IconSearch className="w-16 h-16 p-5 dark:fill-white fill-text rounded-xl hover:bg-slate-200 cursor-pointer" />
            }
          >
            <Button
              className="mx-4 mb-4"
              Icon={IconPlus}
              label="New Transaction"
            />
          </AppBar>
        }
      >
        {_.range(0, 100).map((i) => (
          <TransactionCard
            id="fnjksdk32k3d2k32"
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
      <Outlet />
    </>
  );
}
