export type ModalSheetProps = {
  visible: boolean;
  onClose?: () => void;
  title?: string | React.ReactNode;
  actions?: React.ReactNode;
  children: React.ReactNode;
};
