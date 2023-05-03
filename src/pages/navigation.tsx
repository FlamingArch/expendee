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
import { motion } from "framer-motion";

export default function PageNavigation() {
  const { visible, toggleVisible } = useAppStore((state) => ({
    visible: state.navigationVisible,
    toggleVisible: state.toggleNavigation,
  }));

  return (
    <AnimatePresence>
      {visible ? (
        <Sidebar.View width={360}>
          <div
            // animate={{ width: 360 }}
            // exit={{ width: "0" }}
            // style={{ width: 0 }}
            className="flex p-3 place-content-center bg-black bg-opacity-50 "
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
            <Button
              buttonStyle="navigationSelected"
              label="All"
              Icon={IconInOut}
            />
            <div className="flex gap-4 w-full">
              <Button
                buttonStyle="navigation"
                label="Spent"
                Icon={IconInOut}
                className="flex-grow"
              />
              <Button
                buttonStyle="navigation"
                label="Received"
                Icon={IconInOut}
                className="flex-grow"
              />
            </div>
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
          <Sidebar.Section heading="Calculators">
            <Button
              buttonStyle="navigation"
              Icon={IconSimpleInterest}
              label="Simple Interest"
            />
            <Button
              buttonStyle="navigation"
              Icon={IconCompoundInterest}
              label="Compound Interest"
            />
            <Button
              buttonStyle="navigation"
              Icon={IconSplit}
              label="Split Bill"
            />
            <Button buttonStyle="navigation" Icon={IconTips} label="Tips" />
          </Sidebar.Section>
        </Sidebar.View>
      ) : null}
    </AnimatePresence>
  );
}
