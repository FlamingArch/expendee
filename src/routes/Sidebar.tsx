import Button from "../components/Button";
import Sidebar from "../components/Sidebar";
import TabBar from "../components/TabBar";
import Toolbar from "../components/Toolbar";

import { HiArrowsRightLeft } from "react-icons/hi2";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { MdWallet } from "react-icons/md";

const wallets = [
  { label: "Kotak Bank", balance: 32_709.0 },
  { label: "HDFC Bank", balance: 100_000.0 },
  { label: "Fi Bank", balance: 2_540.0 },
];

export default function ViewSidebar() {
  return (
    <Sidebar width={260} className="gap-3">
      <Toolbar className="pt-17">
        <h1 className="font-heading font-bold text-lg flex-grow pl-3">
          Expendee
        </h1>
        <Button icon={IoPersonCircleOutline} />
      </Toolbar>
      <div className="px-5 flex flex-col gap-3">
        <h3 className="font-bold">Transactions</h3>
        <TabBar
          type="sidebar"
          selected={"All"}
          onChange={() => {}}
          items={[
            {
              label: "All",
              tag: "All",
              icon: HiArrowsRightLeft,
              secondaryLabel: "$32739",
            },
            {
              label: "Spent",
              tag: "Spent",
              icon: FiArrowDownRight,
              secondaryLabel: "$32739",
            },
            {
              label: "Received",
              tag: "Received",
              icon: FiArrowUpRight,
              secondaryLabel: "$32739",
            },
          ]}
        />
      </div>
      <div className="px-5 flex flex-col gap-3">
        <h3 className="font-bold">Wallets</h3>
        <TabBar
          type="sidebar"
          // className="mx-3"
          selected={"All"}
          onChange={() => {}}
          items={wallets.map((wallet) => ({
            icon: MdWallet,
            label: wallet.label,
            tag: wallet.label,
            secondaryLabel: `${wallet.balance}`,
          }))}
        />
      </div>
    </Sidebar>
  );
}
