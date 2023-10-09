import React, { useEffect, useState } from "react";
import { Transaction } from "../types/transaction";
import { PaymentMethod } from "../types/paymentMethod";
import PaymentMethodCard from "./PaymentMethodCard";
import fetchPaymentMethod from "../functions/fetchPaymentMethod";
import { Firestore } from "firebase/firestore";

export default function TransactionPaymentMethodCard({
  firestore,
  transaction,
}: {
  firestore: Firestore;
  transaction: Transaction;
}) {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [repaidWith, setRepaidWith] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    if (transaction && transaction.paymentMethods) {
      let methods: PaymentMethod[] = [];

      transaction.paymentMethods.forEach((method) => {
        fetchPaymentMethod(firestore, method.id).then((method) => {
          if (method) methods.push(method);
        });
      });

      setPaymentMethods(methods);
    }
    if (transaction && transaction.repaidWith) {
      let methods: PaymentMethod[] = [];

      transaction.repaidWith.forEach((method) => {
        fetchPaymentMethod(firestore, method.id).then((method) => {
          if (method) methods.push(method);
        });
      });

      setRepaidWith(methods);
    }
  }, []);

  const repaymentMethodCards =
    repaidWith &&
    repaidWith.map((e) => (
      <PaymentMethodCard
        color={transaction.categoryColor}
        key={e.id}
        method={e}
        wallet={{
          accountNumber: "20432224446312",
          name: "Salary",
        }}
        additionalInfo={
          "Remaining Balance after transaction: " +
          transaction.repaidWith.find((m) => e.id === m.id)?.remainingAfterTxn
        }
      />
    ));

  const paymentMethodCards =
    paymentMethods &&
    paymentMethods.map((e) => (
      <PaymentMethodCard
        color={transaction.categoryColor}
        key={e.id}
        method={e}
        wallet={{
          accountNumber: "20432224446312",
          name: "Monthly Credit",
        }}
        additionalInfo={
          "Remaining Balance after transaction: " +
          transaction.paymentMethods.find((m) => e.id === m.id)
            ?.remainingAfterTxn
        }
      />
    ));

  const paymentMethodsList = paymentMethodCards && (
    <div className="flex-col flex gap-2">
      <p className="text-[12px] font-bold">Payment Methods</p>
      {paymentMethodCards}
    </div>
  );

  const repaymentMethodsList = repaymentMethodCards && (
    <div className="flex-col flex gap-2">
      <p className="text-[12px] font-bold">Repaid With</p>
      {repaymentMethodCards}
    </div>
  );

  return (
    <div className="rounded-2xl shadow-xl bg-element-light dark:bg-element-dark flex flex-col p-6 gap-6">
      <div className="text-xl">Payment Methods</div>
      {paymentMethodsList}
      {repaymentMethodsList}
    </div>
  );
}
