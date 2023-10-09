import { Timestamp } from "firebase/firestore";

export type User = {
  id: string;
  email: string;
  userName: string;
  newsletterSignedUp: boolean;
  profilePictureBase64: string;
  wallets: string[];
  budgets: string[];
  transactions: string[];
  creditReports: string[];
  paymentMethods: string[];
  createdAt: Timestamp;
};
