export type CreditReport = {
  id: string;
  date: string;
  creditScore: number;
  creditBureau: string;
  factorOnTimePayments: number;
  factorCreditUtilization: number;
  factorCreditAge: number;
  factorCreditMix: number;
  factorNewCreditAccounts: number;
};
