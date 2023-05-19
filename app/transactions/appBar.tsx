import ButtonToggleSidebar from "@/app/toggleSidebar";
import AppBar from "@/components/AppBar";
import { IconSearch, IconSort, IconTick } from "@/components/Icons";
import React from "react";

export default function TransactionsAppBar() {
  return (
    <AppBar
      padding={1}
      sticky
      leading={[
        <ButtonToggleSidebar color="light" hideOnVisible />,
        <button
          className={`p-4 rounded-xl hover:bg-black hover:bg-opacity-10 transition`}
        >
          <IconTick className="w-5 h-5 fill-black" />
        </button>,
      ]}
      actions={[
        <button
          className={`p-4 rounded-xl hover:bg-black hover:bg-opacity-10 transition`}
        >
          <IconSort className="w-5 h-5 fill-black" />
        </button>,
      ]}
    >
      <div className="flex justify-between">
        <p className="text-xl p-4">All Transactions</p>
        <button
          className={`p-5 rounded-xl hover:bg-black hover:bg-opacity-10 transition`}
        >
          <IconSearch className="w-5 h-5 fill-black" />
        </button>
      </div>
    </AppBar>
  );
}
