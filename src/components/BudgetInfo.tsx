type BudgetInfoProps = {
  budgetLeft: number | string;
  balanceLeft: number | string;
  currencyIndicator: "₹" | "€" | "$" | string;
};

export default function BudgetInfo(props: BudgetInfoProps) {
  // TODO: Format according to local currency format
  return (
    <div className="flex flex-col p-6 gap-6 rounded-2xl bg-accent shadow-primary-card cursor-pointer">
      <p className="flex flex-col text-center ">
        <span className="text-2xl font-bold">
          {props.currencyIndicator} {props.budgetLeft}
        </span>
        <span>Total Budget Left</span>
      </p>
      <p className="flex flex-col text-center ">
        <span className="text-2xl font-bold">
          {props.currencyIndicator} {props.balanceLeft ?? 0.0}
        </span>
        <span>Total Balance Left</span>
      </p>
    </div>
  );
}
