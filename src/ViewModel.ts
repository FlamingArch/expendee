import Transaction, { TransactionType } from "./Model/Transaction";
import Wallet from "./Model/Wallet";

export default class ViewModel {
  wallets: Wallet[] = [];

  constructor() {}

  getAllTransactions() {
    let transactions = [];

    this.wallets.forEach((wallet) => {
      transactions = transactions.concat(wallet.transactions);
    });

    transactions.sort(
      (a: Transaction, b: Transaction) =>
        a.dateTime.getTime() - b.dateTime.getTime()
    );

    return transactions;
  }

  getAllSpentTransactions(transactions?: Transaction[]) {
    return (transactions ?? this.getAllTransactions()).filter(
      (e: Transaction) => e.type === TransactionType.expense
    );
  }

  getAllReceivedTransactions(transactions?: Transaction[]) {
    return (transactions ?? this.getAllTransactions()).filter(
      (e: Transaction) => e.type === TransactionType.income
    );
  }

  getWalletTransactions(wallet: Wallet, transactions?: Transaction[]) {
    return (transactions ?? this.getAllTransactions()).filter(
      (e: Transaction) => e.wallet.id === wallet.id
    );
  }
  
}
