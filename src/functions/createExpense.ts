import { Firestore, Timestamp } from "firebase/firestore";
import { Transaction } from "../types/transaction";
import { PaymentMethod } from "../types/paymentMethod";
import fetchBudget from "./fetchBudget";
import fetchWallet from "./fetchWallet";
import fetchPaymentMethod from "./fetchPaymentMethod";

export default async function createExpense(
  firestore: Firestore,
  userId: string,
  {
    title,
    amount,
    currency,
    recurring,
    recurringDurationDays,
    categoryId,
    walletId,
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
    categoryId: string;
    walletId: string;
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
  const budget = await fetchBudget(firestore, categoryId);
  const wallet = await fetchWallet(firestore, walletId);
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

  if (!budget || !wallet) {
    throw new Error("Budget not found");
  }

  if (!wallet) {
    throw new Error("Wallet not found");
  }

  const expense: Transaction = {
    id: "unset",
    userId: "unset",
    title: title,
    amount: amount,
    currency: currency ?? "INR",
    date: Timestamp.now(),
    recurring: recurring ?? false,
    recurringDurationDays: recurringDurationDays ?? 0,
    categoryId: categoryId,
    categoryColor: budget.color,
    categoryLabel: budget.categoryLabel,
    categoryIcon: budget.categoryIcon,
    categoryBudgetRemainingAfterTxn: budget.budgetAmount - amount,
    categoryBudgetRemainingAfterTxnPercentage:
      ((budget.budgetAmount - amount) / budget.budgetAmount) * 100,
    walletId: walletId,
    walletIcon: wallet.icon,
    walletLabel: wallet.title,
    walletRemainingAfterTxn: wallet.balance - amount,
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
}
