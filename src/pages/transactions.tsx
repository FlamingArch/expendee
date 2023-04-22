import useAppStore from "../hooks/useAppStore";
import { Button } from "../views";
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
    <div
      style={{ width: 350 }}
      className="bg-[#f2f3f6] text-black border-l-[#ddd] border flex flex-col"
    >
      <div className="flex p-3 justify-between items-center">
        <div className="flex">
          {!visible && (
            <Button buttonStyle="toolbar" onClick={toggleVisible}>
              <IconCollapseSidebar className="stroke-black" />
            </Button>
          )}
          <Button buttonStyle="toolbar" Icon={IconTick} />
        </div>
        <Button buttonStyle="toolbar" Icon={IconSort} />
      </div>
      <div className="flex p-3 justify-between items-center">
        <div className="font-medium text-2xl px-3">All Transactions</div>
        <Button buttonStyle="toolbar" Icon={IconSearch} />
      </div>
      <div className="p-6 flex flex-col">
        <Button Icon={IconPlus} label="Add Transaction" />
      </div>
    </div>
  );
}
