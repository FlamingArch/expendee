import { useState } from "react";
import { TbBoxMultiple } from "react-icons/tb";
import { FiArrowDownRight, FiArrowUpRight, FiSidebar } from "react-icons/fi";
import { MdOutlineCallSplit, MdWallet } from "react-icons/md";
import {
  IoEllipsisHorizontalCircle,
  IoFilterSharp,
  IoPersonCircleOutline,
  IoSearchOutline,
  IoShareOutline,
  IoTrashOutline,
} from "react-icons/io5";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import Scaffold from "../components/Scaffold";
import Toolbar from "../components/Toolbar";
import TabBar from "../components/TabBar";
import { HiArrowsRightLeft } from "react-icons/hi2";

const wallets = [
  { label: "Kotak Bank", balance: 32_709.0 },
  { label: "HDFC Bank", balance: 100_000.0 },
  { label: "Fi Bank", balance: 2_540.0 },
];

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState(0);
  const [selectedTab, setSelectedTab] = useState("All");

  return (
    <>
      <Sidebar width={260} collapsed={collapsed} className="gap-3">
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
            selected={selectedTab}
            onChange={setSelectedTab}
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
            selected={selectedTab}
            onChange={setSelectedTab}
            items={wallets.map((wallet) => ({
              icon: MdWallet,
              label: wallet.label,
              tag: wallet.label,
              secondaryLabel: `${wallet.balance}`,
            }))}
          />
        </div>
      </Sidebar>
      <Scaffold className="grow-0 w-[300px]">
        <Toolbar>
          <Button
            icon={FiSidebar}
            iconClassName="stroke-[1.5]"
            onClick={() => setCollapsed((prev) => !prev)}
          />
          <Button icon={TbBoxMultiple} iconClassName="stroke-[1.5]" />
          <div className="flex-grow" />
          <Button icon={IoFilterSharp} />
          <Button icon={IoEllipsisHorizontalCircle} />
        </Toolbar>
        <Toolbar>
          <p className="flex-grow text-lg pl-3">All Transactions</p>
          <Button icon={IoSearchOutline} />
        </Toolbar>
        <Toolbar>
          <TabBar
            type="segmented"
            className="mx-3"
            selected={selected}
            onChange={setSelected}
            items={[
              { label: "All", icon: HiArrowsRightLeft },
              { label: "Spent", icon: FiArrowDownRight },
              { label: "Received", icon: FiArrowUpRight },
            ]}
          />
        </Toolbar>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white dark:bg-[#222326] rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white dark:bg-[#222326] rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white dark:bg-[#222326] rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white dark:bg-[#222326] rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white dark:bg-[#222326] rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white dark:bg-[#222326] rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white dark:bg-[#222326] rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white dark:bg-[#222326] rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white dark:bg-[#222326] rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white dark:bg-[#222326] rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white dark:bg-[#222326] rounded-xl"></div>
      </Scaffold>
      <Scaffold>
        <Toolbar>
          <Button
            icon={IoTrashOutline}
            className="hover:bg-red-500/10 hover:dark:bg-red-500/10"
            iconClassName="stroke-red-500"
          />
          <div className="flex-grow" />
          <Button icon={MdOutlineCallSplit} />
          <Button icon={IoShareOutline} />
        </Toolbar>
      </Scaffold>
    </>
  );
}
