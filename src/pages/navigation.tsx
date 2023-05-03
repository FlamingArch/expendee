import { Branding } from "../components/Branding";
import BudgetInfo from "../components/BudgetInfo";
import { Button, Sidebar } from "../views";
import {
  IconCollapseSidebar,
  IconCompoundInterest,
  IconInOut,
  IconPlus,
  IconSimpleInterest,
  IconSplit,
  IconTips,
} from "../views/Icons";
import useAppStore from "../hooks/useAppStore";
import { AnimatePresence } from "framer-motion";
import NavigationLink from "../views/NavigationLink";

export default function PageNavigation() {
  const { visible, toggleVisible } = useAppStore((state) => ({
    visible: state.navigationVisible,
    toggleVisible: state.toggleNavigation,
  }));

  const transactionsLinks = (
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
      <NavigationLink to="transactions" label="All" Icon={IconInOut} />
      <div className="flex gap-4 w-full">
        <NavigationLink
          to="transactions?q=spent"
          label="Spent"
          Icon={IconInOut}
          className="flex-grow"
        />
        <NavigationLink
          to="transactions?q=received"
          label="Received"
          Icon={IconInOut}
          className="flex-grow"
        />
      </div>
    </Sidebar.Section>
  );

  const accountsLinks = (
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
  );

  const calculatorLinks = (
    <Sidebar.Section heading="Calculators">
      <NavigationLink
        to="simple"
        Icon={IconSimpleInterest}
        label="Simple Interest"
      />
      <NavigationLink
        to="compound"
        Icon={IconCompoundInterest}
        label="Compound Interest"
      />
      <NavigationLink to="split" Icon={IconSplit} label="Split Bill" />
      <NavigationLink to="tips" Icon={IconTips} label="Tips" />
    </Sidebar.Section>
  );

  return (
    <AnimatePresence>
      {visible ? (
        <Sidebar.View width={360}>
          <div
            // animate={{ width: 360 }}
            // exit={{ width: "0" }}
            // style={{ width: 0 }}
            className="flex p-3 place-content-center"
          >
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

          {transactionsLinks}
          {accountsLinks}
          {calculatorLinks}
        </Sidebar.View>
      ) : null}
    </AnimatePresence>
  );
}
