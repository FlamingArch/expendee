import React from "react";
import { ButtonToggleSidebar, TransactionCard } from "@/src/fragments";
import { AppBar } from "@/src/components";
import { IconSearch, IconSort, IconTick } from "@/src/components/Icons";
import _ from "lodash";

export default function TransactionsPage() {
  return (
    <>
      <div
        className="bg-[#F2F3F6]  text-black border-r border-gray-200 h-screen overflow-scroll"
        style={{ width: 350 }}
      >
        <TransactionsAppBar />
        <section className="flex flex-col gap-4 p-4">
          {_.range(0, 20).map((i) => (
            <TransactionCard
              key={i}
              time="9:17 PM"
              amount="₹ 69"
              title="Dinner"
              categoryIcon="percentage"
              categoryLabel="Food"
              walletIcon="percentage"
              walletLabel="Monthly"
              categoryColor="#ad0"
              href={"/transactions/" + i}
            />
          ))}
        </section>
      </div>
      <div className="bg-[#F2F3F6]  text-black border-r border-gray-200 h-screen overflow-scroll flex-grow">
        <div className="grid place-content-center h-full font-bold">
          No Transaction Selected
        </div>
      </div>
    </>
  );
}

function TransactionsAppBar() {
  return (
    <AppBar
      padding={1}
      sticky
      leading={[
        <ButtonToggleSidebar color="light" hideOnVisible />,
        <button
          className={`p-4 rounded-xl hover:bg-black hover:bg-opacity-10 transition`}
        >
          <IconTick className="w-5 h-5 fill-black" />
        </button>,
      ]}
      actions={[
        <button
          className={`p-4 rounded-xl hover:bg-black hover:bg-opacity-10 transition`}
        >
          <IconSort className="w-5 h-5 fill-black" />
        </button>,
      ]}
    >
      <div className="flex justify-between">
        <p className="text-xl p-4">All Transactions</p>
        <button
          className={`p-5 rounded-xl hover:bg-black hover:bg-opacity-10 transition`}
        >
          <IconSearch className="w-5 h-5 fill-black" />
        </button>
      </div>
    </AppBar>
  );
}
