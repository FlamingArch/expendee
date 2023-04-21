import { Branding } from "./components/Branding";
import BudgetInfo from "./components/BudgetInfo";
import { Button, Sidebar } from "./views";
import { IconPlus, IconSearch, IconSort, IconTick } from "./views/Icons";

export default function App() {
  return (
    <>
      <Sidebar.View width={334}>
        <Branding />
        <BudgetInfo
          currencyIndicator="₹"
          budgetLeft="12,123.3"
          balanceLeft="6,12,123.3"
        />
        <Sidebar.Header heading="Transactions">
          <Button
            buttonStyle="sidebar"
            Icon={IconPlus}
            label="New"
            onClick={() => {
              console.log("New Transaction Pressed");
            }}
          />
        </Sidebar.Header>
        <Sidebar.Header heading="Accounts">
          <Button
            buttonStyle="sidebar"
            Icon={IconPlus}
            label="New"
            onClick={() => {
              console.log("New Account Pressed");
            }}
          />
        </Sidebar.Header>
        <Sidebar.Header heading="Calculators" />
      </Sidebar.View>
      <div
        style={{ width: 350 }}
        className="bg-[#f2f3f6] text-black border-l-[#ddd] border flex flex-col"
      >
        <div className="flex p-3 justify-between items-center">
          <Button buttonStyle="toolbar" Icon={IconTick} />
          <Button buttonStyle="toolbar" Icon={IconSort} />
        </div>
        <div className="flex p-3 justify-between items-center">
          <div className="font-medium text-2xl px-3">All Transactions</div>
          <Button buttonStyle="toolbar" Icon={IconSearch} />
        </div>
      </div>
      <div className="bg-[#f2f3f6] text-black font-bold flex-grow grid place-content-center">
        No Transaction Selected
      </div>
    </>
  );
}
