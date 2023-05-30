import { Firestore, Timestamp } from "firebase/firestore";
import { Transaction } from "../types/transaction";
import { PaymentMethod } from "../types/paymentMethod";
import fetchBudget from "./fetchBudget";
import fetchWallet from "./fetchWallet";
import fetchPaymentMethod from "./fetchPaymentMethod";
import { Budget } from "../types/budgets";
import { Account } from "../types/wallet";

export default async function createExpense(
  firestore: Firestore,
  userId: string,
  {
    title,
    amount,
    currency,
    recurring,
    recurringDurationDays,
    categoryDoc,
    walletDoc,
    merchant,
    merchantWebsite,
    merchantAddress,
    invoiceLinks,
    documentLinks,
    paymentMethods,
    repaidWith,
    notes,
  }: {
    title: string;
    amount: number;
    currency?: string;
    recurring?: boolean;
    recurringDurationDays?: number;
    categoryDoc: Budget;
    walletDoc: Account;
    merchant?: string;
    merchantWebsite?: string;
    merchantAddress?: string;
    invoiceLinks: string[];
    documentLinks: {
      link: string;
      label: string;
    }[];
    paymentMethods?: {
      id: string;
      amount: number;
      remainingAfterTxn: number;
    }[];
    repaidWith?: {
      id: string;
      amount: number;
      remainingAfterTxn: number;
    }[];
    notes: string;
  }
) {
  const paymentMethodsList: PaymentMethod[] = [];

  paymentMethods?.forEach(async (prev) => {
    const paymentMethod = await fetchPaymentMethod(firestore, prev.id);
    if (paymentMethod) paymentMethodsList.push(paymentMethod);
  });

  let totalAmountPaidWithCredit: number = 0;
  paymentMethodsList
    ?.filter((e) => e.isCredit)
    .forEach(
      (creditMethod) =>
        (totalAmountPaidWithCredit +=
          paymentMethods?.find((e) => e.id === creditMethod.id)?.amount ?? 0)
    );

  let totalRepaymentAmount = 0;
  repaidWith?.forEach((method) => (totalRepaymentAmount += method.amount));

  const expense: Transaction = {
    id: "unset",
    userId: userId,
    title: title,
    amount: amount,
    currency: currency ?? "INR",
    date: Timestamp.now(),
    recurring: recurring ?? false,
    recurringDurationDays: recurringDurationDays ?? 0,
    categoryId: categoryDoc.id,
    categoryColor: categoryDoc.color ?? "#f00",
    categoryLabel: categoryDoc.categoryLabel,
    categoryIcon: categoryDoc.categoryIcon,
    categoryBudgetRemainingAfterTxn: categoryDoc.budgetAmount - amount,
    categoryBudgetRemainingAfterTxnPercentage:
      ((categoryDoc.budgetAmount - amount) / categoryDoc.budgetAmount) * 100,
    walletId: walletDoc.id,
    walletIcon: walletDoc.icon,
    walletLabel: walletDoc.title,
    walletRemainingAfterTxn: walletDoc.balance - amount,
    merchant: merchant ?? "",
    merchantWebsite: merchantWebsite ?? "",
    merchantAddress: merchantAddress ?? "",
    invoiceLinks: invoiceLinks ?? [],
    documentLinks: documentLinks ?? [],
    paidInitiallyViaCredit: !!totalAmountPaidWithCredit,
    paymentMethods: paymentMethods ?? [],
    isRepaid: totalAmountPaidWithCredit === totalRepaymentAmount,
    repaidWith: repaidWith ?? [],
    splitWith: [],
    remaining: totalAmountPaidWithCredit - totalRepaymentAmount,
    notes: notes,
    deleted: false,
  };

  return expense;
}
