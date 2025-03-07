import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import { TbBoxMultiple } from "react-icons/tb";
import { FiSidebar } from "react-icons/fi";
import {
  IoEllipsisHorizontalCircle,
  IoFilterSharp,
  IoPersonCircleOutline,
  IoSearchOutline,
  IoTrashOutline,
} from "react-icons/io5";
import { useState } from "react";
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
          <Button>
            <IoPersonCircleOutline className="w-6 h-6" />
          </Button>
        </header>
        <h3 className="">Transactions</h3>
        </Toolbar>
      </Sidebar>
      <Scaffold className="grow-0 w-[300px]">
        <header className="flex p-1">
          <Button
            icon={FiSidebar}
            iconClassName="stroke-[1.5]"
            onClick={() => setCollapsed((prev) => !prev)}
          />
          <Button icon={TbBoxMultiple} iconClassName="stroke-[1.5]" />
          <div className="flex-grow" />
        </header>
        <header className="flex items-center p-1">
          <Button icon={IoFilterSharp} />
          <Button icon={IoEllipsisHorizontalCircle} />
          <p className="flex-grow text-lg pl-3">All Transactions</p>
          <Button>
            <IoSearchOutline className="w-5 h-5" />
          </Button>
        </Toolbar>
      </Scaffold>
      <Scaffold>
        <Toolbar>
          <Button className="hover:bg-red-500/10">
            <IoTrashOutline className="w-5 h-5 stroke-red-500" />
          </Button>
          <div className="flex-grow" />
          <Button>
            <IoFilterSharp className="w-5 h-5" />
          </Button>
        </Toolbar>
      </Scaffold>
    </>
  );
}
