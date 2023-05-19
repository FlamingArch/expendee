import _ from "lodash";
import TransactionCard from "@/components/transactionCard";
import React from "react";
import TransactionsAppBar from "./appBar";

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
