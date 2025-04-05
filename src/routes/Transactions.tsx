import { TbBoxMultiple } from "react-icons/tb";
import { FiArrowDownRight, FiArrowUpRight, FiSidebar } from "react-icons/fi";
import {
  IoEllipsisHorizontalCircle,
  IoFilterSharp,
  IoSearchOutline,
} from "react-icons/io5";
import Button from "../components/Button";
import Scaffold from "../components/Scaffold";
import Toolbar from "../components/Toolbar";
import TabBar from "../components/TabBar";
import { HiArrowsRightLeft } from "react-icons/hi2";

export default function PageTransactions() {
  return (
    <Scaffold className="grow-0 w-[300px]">
      <Toolbar>
        <Button
          icon={FiSidebar}
          iconClassName="stroke-[1.5]"
          onClick={() => {}}
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
          selected={0}
          onChange={() => {}}
          items={[
            { label: "All", icon: HiArrowsRightLeft },
            { label: "Spent", icon: FiArrowDownRight },
            { label: "Received", icon: FiArrowUpRight },
          ]}
        />
      </Toolbar>
    </Scaffold>
  );
}
