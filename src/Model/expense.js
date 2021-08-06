export class Transaction {
  constructor(amount, category, title, notes) {
    this.amount = amount;
    this.category = category;
    this.title = title;
    this.notes = notes;
  }
}

export class Category {
  constructor(name, icon) {
    this.name = name;
    this.icon = icon;
  }
}

export default Transaction;
