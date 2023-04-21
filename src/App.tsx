import { Branding } from "./components/Branding";
import BudgetInfo from "./components/BudgetInfo";

export default function App() {
  return (
    <div className="flex flex-col w-96 p-6 gap-6">
      <Branding />
      <BudgetInfo
        currencyIndicator="₹"
        budgetLeft="12,123.3"
        balanceLeft="6,12,123.3"
      />
    </div>
  );
}
