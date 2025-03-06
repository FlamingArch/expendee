import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import { TbBoxMultiple } from "react-icons/tb";
import { FiSidebar } from "react-icons/fi";
import {
  IoEllipsisHorizontalCircle,
  IoFilterSharp,
  IoPersonCircleOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { useState } from "react";
import Scaffold from "../components/Scaffold";
export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Sidebar width={260} collapsed={collapsed}>
        <header className="flex items-center pt-12 text-white p-1">
          <h1 className="font-heading font-bold text-xl flex-grow pl-4">
            Expendee
          </h1>
          <Button>
            <IoPersonCircleOutline className="w-6 h-6" />
          </Button>
        </header>
        <h3 className="">Transactions</h3>
      </Sidebar>
      <Scaffold className="grow-0 w-[300px]">
        <header className="flex p-1">
          <Button onClick={() => setCollapsed((prev) => !prev)}>
            <FiSidebar className="w-5 h-5" />
          </Button>
          <Button>
            <TbBoxMultiple className="w-5 h-5" />
          </Button>
          <div className="flex-grow" />
          <Button>
            <IoFilterSharp className="w-5 h-5" />
          </Button>
          <Button>
            <IoEllipsisHorizontalCircle className="w-5 h-5" />
          </Button>
        </header>
        <header className="flex items-center p-1">
          <p className="flex-grow text-xl pl-4">All Transactions</p>
          <Button>
            <IoSearchOutline className="w-5 h-5" />
          </Button>
        </header>
      </Scaffold>
      <Scaffold>
        <header className="flex p-1">
          <Button>
            <TbBoxMultiple className="w-5 h-5" />
          </Button>
          <div className="flex-grow" />
          <Button>
            <IoFilterSharp className="w-5 h-5" />
          </Button>
        </header>
      </Scaffold>
    </>
  );
}
