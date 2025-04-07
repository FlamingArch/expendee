import Button from "@/views/Button";
import Page from "@/views/Page";
import Toolbar from "@/views/Toolbar";
import { FiSidebar } from "react-icons/fi";
import {
  IoEllipsisHorizontalCircleOutline,
  IoFilterSharp,
} from "react-icons/io5";

function ToolbarTransactions() {
  return (
    <Toolbar
      position="top"
      leading={
        <>
          <Button icon={FiSidebar} iconClassName="stroke-[1.5]" />
          <Button icon={FiSidebar} iconClassName="stroke-[1.5]" />
        </>
      }
      trailing={
        <>
          <Button icon={IoFilterSharp} />
          <Button icon={IoEllipsisHorizontalCircleOutline} />
        </>
      }
    >
      <p className="text-xl p-3">All Transactions</p>
    </Toolbar>
  );
}

export default function PageTransactions() {
  return (
    <Page toolbar={<ToolbarTransactions />}>
      <div className="rounded-xl shadow-xl bg-white w-72 h-24 m-4" />
      <div className="rounded-xl shadow-xl bg-white w-72 h-24 m-4" />
      <div className="rounded-xl shadow-xl bg-white w-72 h-24 m-4" />
      <div className="rounded-xl shadow-xl bg-white w-72 h-24 m-4" />
      <div className="rounded-xl shadow-xl bg-white w-72 h-24 m-4" />
      <div className="rounded-xl shadow-xl bg-white w-72 h-24 m-4" />
      <div className="rounded-xl shadow-xl bg-white w-72 h-24 m-4" />
      <div className="rounded-xl shadow-xl bg-white w-72 h-24 m-4" />
      <div className="rounded-xl shadow-xl bg-white w-72 h-24 m-4" />
      <div className="rounded-xl shadow-xl bg-white w-72 h-24 m-4" />
      <div className="rounded-xl shadow-xl bg-white w-72 h-24 m-4" />
    </Page>
  );
}
