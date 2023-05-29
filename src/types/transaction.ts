import { Timestamp } from "firebase/firestore";

export type Transaction = {
  id: string;
  userId: string;
  title: string;
  amount: number;
  currency: string;
  date: Timestamp;
  recurring: boolean;
  recurringDurationDays: number;
  categoryId: string;
  categoryColor: string;
  categoryLabel: string;
  categoryIcon: string;
  categoryBudgetRemainingAfterTxn: number;
  categoryBudgetRemainingAfterTxnPercentage: number;
  walletId: string;
  walletLabel: string;
  walletIcon: string;
  walletRemainingAfterTxn: number;
  merchant: string; // Cache in user doc
  merchantWebsite: string; // Cache in user doc
  merchantAddress: string;
  invoiceLinks: string[];
  documentLinks: {
    link: string;
    label: string;
  }[];
  paidInitiallyViaCredit: boolean;
  paymentMethods: {
    id: string;
    amount: number;
    remainingAfterTxn: number;
  }[];
  isRepaid: boolean;
  repaidWith: {
    id: string;
    amount: number;
    remainingAfterTxn: number;
  }[];
  splitWith: string[];
  remaining: number;
  notes: string;
  deleted: boolean;
};
