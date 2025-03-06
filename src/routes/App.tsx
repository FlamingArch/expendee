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
export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Sidebar width={240} collapsed={collapsed}>
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
      <main className="bg-red-400 w-[280px] flex-grow-0 border-r border-gray-200">
        <header className="flex p-1">
          <Button onClick={() => setCollapsed((prev) => !prev)}>
            <FiSidebar className="w-5 h-5" />
          </Button>
          <Button onClick={() => setCollapsed((prev) => !prev)}>
            <TbBoxMultiple className="w-5 h-5" />
          </Button>
          <div className="flex-grow" />
          <Button onClick={() => setCollapsed((prev) => !prev)}>
            <IoFilterSharp className="w-5 h-5" />
          </Button>
          <Button onClick={() => setCollapsed((prev) => !prev)}>
            <IoEllipsisHorizontalCircle className="w-5 h-5" />
          </Button>
        </header>
        <header className="flex items-center p-1">
          <p className="flex-grow text-xl flex-grow pl-4">All Transactions</p>
          <Button onClick={() => setCollapsed((prev) => !prev)}>
            <IoSearchOutline className="w-5 h-5" />
          </Button>
        </header>
      </main>
      <main className="bg-red-400 flex-grow">
        <header className="flex p-1">
          <Button onClick={() => setCollapsed((prev) => !prev)}>
            <TbBoxMultiple className="w-5 h-5" />
          </Button>
          <div className="flex-grow" />
          <Button onClick={() => setCollapsed((prev) => !prev)}>
            <IoFilterSharp className="w-5 h-5" />
          </Button>
        </header>
      </main>
    </>
  );
}
