import _ from "lodash";
import React from "react";
import AppBar from "@/components/AppBar";
import ButtonToggleSidebar from "./toggleSidebar";

export default function TransactionsPage() {
  return (
    <>
      <div
        className="bg-[#F2F3F6]  text-black border-r border-gray-200 h-screen overflow-scroll"
        style={{ width: 350 }}
      >
        <AppBar
          className="fixed"
          padding={1}
          leading={<ButtonToggleSidebar hideOnVisible />}
        />
        <div className="grid place-content-center h-full font-bold">
          No Category Selected
        </div>
      </div>
      <div className="bg-[#F2F3F6]  text-black border-r border-gray-200 h-screen overflow-scroll flex-grow">
        <div className="grid place-content-center h-full font-bold">
          No Transaction Selected
        </div>
      </div>
    </>
  );
}
