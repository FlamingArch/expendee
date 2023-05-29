export type Account = {
  id: string;
  icon: string;
  title: string;
  color: string;
  balance: number;
  description: string;
  linkedAccountName: string;
  linkedPaymentMethods: string[];
  startingBalance: number;
  transactions: string[];
  minimumBalance: number;
  minimumPreferredBalance: number;
  isCredit: boolean;
  creditLimit: number;
  creditLimitHistory: string[];
  userId: string;
};
