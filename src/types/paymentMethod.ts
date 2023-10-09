export type PaymentMethod = {
  id: string;
  label: string;
  type: string;
  linkedWallet: string;
  identifier: string;
  userId: string;
  validity: string;
  isCredit: boolean;
};
