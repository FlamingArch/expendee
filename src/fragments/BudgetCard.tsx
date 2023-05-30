import React from "react";
import { Budget } from "../types/budgets";
import { Transaction } from "../types/transaction";
import { IconBill, IconPreloader } from "../components/Icons";

export default function BudgetCard({
  transaction,
  budget,
}: {
  budget?: Budget;
  transaction: Transaction;
}) {
  return (
    <div className="rounded-2xl shadow-xl p-6 bg-element-light dark:bg-element-dark flex flex-col gap-4">
      <div className="text-xl">Budget</div>
      {budget ? (
        <div className="flex justify-between items-stretch bg-element dark:bg-opacity-20 rounded-xl relative">
          <div
            style={{
              backgroundColor: transaction.categoryColor,
              width: `${(budget.spentAmount / budget.budgetAmount) * 100}%`,
            }}
            className="rounded-xl absolute h-full transition-all"
          ></div>
          <div className="flex items-center gap-2 p-2 z-10">
            <IconBill className="w-4 h-4 fill-text dark:fill-text-dark" />
            {budget.categoryLabel}
          </div>
          <p className="text-[12px] p-2 z-10 align-middle my-auto">
            {budget.currency == "INR" ? "₹" : budget.currency}{" "}
            {budget.spentAmount} /{" "}
            <span className="font-medium">{budget.budgetAmount}</span>
          </p>
        </div>
      ) : (
        <div className="flex gap-2 justify-center items-center">
          <IconPreloader className="w-4 h-4 stroke-text dark:stroke-text-dark" />
          Fetching Budget: {transaction.categoryId}
        </div>
      )}
      <div className="grid grid-cols-3">
        <div className="flex flex-col items-center">
          <span className="text-[12px] font-bold">
            Remaining Budget after Transaction
          </span>
          <span>{transaction.categoryBudgetRemainingAfterTxn}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[12px] font-bold">Remaining Budget %</span>
          <span>
            {budget
              ? `${
                  (transaction.categoryBudgetRemainingAfterTxn /
                    budget?.budgetAmount) *
                  100
                }%`
              : "??"}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[12px] font-bold">
            Percentage of Budget Used
          </span>
          <span>{transaction.categoryBudgetRemainingAfterTxn}</span>
        </div>
      </div>
    </div>
  );
}
