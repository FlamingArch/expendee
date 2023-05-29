import React from "react";
import { Transaction } from "../types/transaction";
import { Button } from "../components";
import {
  IconCardTick,
  IconCompoundInterest,
  IconSplit,
  IconTips,
} from "../components/Icons";
import Chip from "../components/Chip";

export default function TransactionDetails({
  transaction,
}: {
  transaction: Transaction;
}) {
  return (
    <>
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
          <div className="font-bold">
            Recurring Payment (Every {transaction.recurringDurationDays} Days)
          </div>
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
    </>
  );
}
