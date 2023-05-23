import { Timestamp } from "firebase/firestore";

export type Expense = {
  id: string;
  userId: string;
  amount: number;
  currency: number;
  title: number;
  recurring: boolean;
  recurringDurationDays: number;
  categoryId: string;
  categoryBudgetRemaining: number;
  date: Timestamp;
  merchant: string; // Cache in user doc
  walletId: string;
  walletRemaining: number;
  paymentMethodIds: [string];
  splitWith: [string];
  remaining: number;
  notes: string;
};
