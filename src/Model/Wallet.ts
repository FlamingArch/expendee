import { v4 as uuid } from "uuid";
import Transaction from "./Transaction";

export default class Wallet {
  id: string = uuid();
  balance: number = 0;
  totalSpent: number = 0;
  totalRecieved: number = 0;
  transactions: Transaction[] = [];

  constructor(public name: string, public nickname?: string) {}
}
