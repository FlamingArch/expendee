import { Branding } from "../components/Branding";
import BudgetInfo from "../components/BudgetInfo";
import { Button, Sidebar } from "../views";
import { IconCollapseSidebar, IconPlus } from "../views/Icons";
import useAppStore from "../hooks/useAppStore";
import { AnimatePresence } from "framer-motion";

export default function PageNavigation() {
  const { visible, toggleVisible } = useAppStore((state) => ({
    visible: state.navigationVisible,
    toggleVisible: state.toggleNavigation,
  }));

  return (
    <AnimatePresence>
      {visible ? (
        <Sidebar.View width={334}>
          <div className="flex p-3 place-content-center">
            <div className="flex-grow" />
            <Button buttonStyle="toolbar" onClick={toggleVisible}>
              <IconCollapseSidebar className="stroke-white w-6 h-6" />
            </Button>
          </div>
          <Branding />
          <BudgetInfo
            currencyIndicator="₹"
            budgetLeft="12,123.3"
            balanceLeft="6,12,123.3"
          />
          <Sidebar.Section
            heading="Transactions"
            actions={
              <Button
                buttonStyle="sidebar"
                Icon={IconPlus}
                label="New"
                onClick={() => {
                  console.log("New Transaction Pressed");
                }}
              />
            }
          >
            No Current Transactions
          </Sidebar.Section>
          <Sidebar.Section
            heading="Accounts"
            actions={
              <Button
                buttonStyle="sidebar"
                Icon={IconPlus}
                label="New"
                onClick={() => {
                  console.log("New Account Pressed");
                }}
              />
            }
          >
            No Accounts Found
          </Sidebar.Section>
          <Sidebar.Section heading="Calculators" />
        </Sidebar.View>
      ) : null}
    </AnimatePresence>
  );
}
