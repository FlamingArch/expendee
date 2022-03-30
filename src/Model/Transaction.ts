import { v4 as uuid } from "uuid";
import Category from "./Category";
import Wallet from "./Wallet";

export enum TransactionType {
  expense,
  income,
}

export enum PaymentMethod {
  Cash,
  Card,
  UPI,
  Cheque,
  Wallet,
  NetBanking,
}

export default class Transaction {
  id: string = uuid();

  constructor(
    public wallet: Wallet,
    public type: TransactionType,
    public amount: number,
    public category: Category,
    public description: string,
    public method: PaymentMethod,
    public dateTime: Date
  ) {}
}
