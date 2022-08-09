# Expendee

## Summary

An expense tracker that uses React for front end and Firebase for Backend.
Also uses Recoil for State Management. React Router for Routing, Framer Motion for Animations and TailwindCSS and SCSS for CSS Framework.

## Proposed Features

- Progressive Web App, responsive and adaptive on different screen sizes (Mobile, Desktop or Tablet) and input types (Touch/Pen, Pointer)
- Add Expenses / Gains.
- Auto Add Date/Timestamp, but allows modifying/manual timestamping.
- Add Photos, Description, Category (with Color, Icon and Label), Payment Method, Recipient/ Merchant, Currency and Wallet to Expense.
- Support Multiple Wallets, each with a Name, Bank Name, Current Balance, Minimum Target Balance, Required Average Minimum Balance, Maximum Target Balance, Color, Icon.
- Set Budgets for wallets, categories, etc.
- Export to CSV, TSV.
- Import from CSV, TSV.
- Built in Simple Interest, Compound Interest Calculator.
- One Account, sync data across devices.
- Sign in via Passkeys, Apple, Google, Microsoft, Email, Phone.

## Expected Desgin Points

- Triple Stack on Desktop, Double on Tablet, and Single on Mobile.
- Use Shadow, Glow and Accent Color to highlight primary/suggested actions.
- Keep Design Minimal.
- Complex, but quick animations for every action/change.

### Navigation Overview

1. Branding > ModalAbout
2. Add Transaction > ModalNewTransaction / MenuAdd (Right Click / Hold)
3. Summary Card > ModalSummary
4. Primary Links
   1. Transactions (Action: New Transaction > ModalNewTransaction)
      1. All > PageTransactionsAll
      2. Spent > PageTransactionsExpenses
      3. Recieved > PageTransactionsGains
   2. Wallets (Action: ModalNewWalllet)
      1. ... Wallets > PageWallet
   3. Calculate
      1. Simple Interest > PageCalculatorSimpleInterest
      2. Compund Interest > PageCalculatorCompountInterest
      3. Split Bill > PageCalculatorBillSplit
      4. Tips > PageCalculatorBillSplit
5. Secondary Links
   1. Toggle Dark Mode > ActionToggleDarkMode
   2. Settings > PageSettings
