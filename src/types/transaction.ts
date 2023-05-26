import { Timestamp } from "firebase/firestore";

export type Transaction = {
  id: string;
  userId: string;
  title: number;
  amount: number;
  currency: number;
  date: Timestamp;
  recurring: boolean;
  recurringDurationDays: number;
  categoryId: string;
  categoryBudgetRemainingAfterTxn: number;
  categoryBudgetRemainingAfterTxnPercentage: number;
  walletId: string;
  walletRemainingAfterTxn: number;
  merchant: string; // Cache in user doc
  merchantWebsite: string; // Cache in user doc
  merchantAddress: string;
  invoiceLink: [string];
  paymentMethods: {
    id: string;
    amount: string;
    remainingAfterTxn: string;
  }[];
  repaidWith: {
    id: string;
    amount: string;
    remainingAfterTxn: string;
  }[];
  splitWith: [string];
  remaining: number;
  notes: string;
  deleted: boolean;
};
