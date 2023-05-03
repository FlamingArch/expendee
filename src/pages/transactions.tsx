import useAppStore from "../hooks/useAppStore";
import { Button, Page } from "../views";
import {
  IconCollapseSidebar,
  IconPlus,
  IconSearch,
  IconSort,
  IconTick,
} from "../views/Icons";

export default function PageTransactions() {
  const { visible, toggleVisible } = useAppStore((state) => ({
    visible: state.navigationVisible,
    toggleVisible: state.toggleNavigation,
  }));

  return (
    <Page>
      <div
        style={{ width: 360 }}
        className="flex p-3 items-center backdrop-blur-xl bg-[#f2f3f6] bg-opacity-50 sticky top-0"
      >
        {!visible && (
          <Button
            buttonStyle="toolbar"
            onClick={toggleVisible}
            className="slideInLeft"
          >
            <IconCollapseSidebar className="stroke-black dark:stroke-white" />
          </Button>
        )}
        <Button buttonStyle="toolbar" Icon={IconTick}></Button>
        <div className="flex-grow" />
        <Button buttonStyle="toolbar" Icon={IconSort} />
      </div>
      <div className="flex p-3 justify-between items-center">
        <div className="font-medium text-2xl px-3">All Transactions</div>
        <Button buttonStyle="toolbar" Icon={IconSearch} />
      </div>
      <div className="p-6 flex flex-col">
        <Button Icon={IconPlus} label="Add Transaction" />
      </div>
    </Page>
  );
}
