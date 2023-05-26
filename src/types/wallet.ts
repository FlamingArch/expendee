export type WalletProps = {
  id: string;
  icon: string;
  title: string;
  color: string;
  balance: number;
  description: string;
  linkedAccountName: string;
  linkedDebitCards: string[];
  startingBalance: number;
  transactions: string[];
  minimumBalance: number;
  minimumPreferredBalance: number;
  isCredit: boolean;
  creditLimit: number;
  creditLimitHistory: string[];
};
