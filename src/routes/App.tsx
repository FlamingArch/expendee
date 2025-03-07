import { useState } from "react";

import { TbBoxMultiple } from "react-icons/tb";
import { FiSidebar } from "react-icons/fi";
import { MdOutlineCallSplit } from "react-icons/md";
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

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Sidebar width={260} collapsed={collapsed}>
        <Toolbar className="text-white pt-17">
          <h1 className="font-heading font-bold text-lg flex-grow pl-4">
            Expendee
          </h1>
          <Button icon={IoPersonCircleOutline} />
        </Toolbar>
        <div className="flex-grow">
          <h3 className="">Transactions</h3>
        </div>
      </Sidebar>
      <Scaffold className="grow-0 w-[300px]">
        <Toolbar position="top">
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
        <div className="h-24 mx-4 my-2 shadow-lg bg-white rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white rounded-xl"></div>
        <div className="h-24 mx-4 my-2 shadow-lg bg-white rounded-xl"></div>
      </Scaffold>
      <Scaffold>
        <Toolbar>
          <Button
            icon={IoTrashOutline}
            className="hover:bg-red-500/10"
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
