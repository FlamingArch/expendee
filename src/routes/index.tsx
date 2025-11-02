import { createFileRoute, Outlet } from "@tanstack/react-router";
import IconWallet from "../assets/IconWallet.svg";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function Sidebar() {
  return (
    <div style={{ width: 300 }} className="bg-black text-white flex flex-col">
      <p className="font-branding font-bold text-2xl">Expendee</p>
      <div className="flex flex-col gap-2">
        <div className="font-bold">Transactions</div>
        {["Dashboard", "Transactions", "Budgets", "Account"].map((item) => (
          <div className="bg-white/12 p-3 rounded-full">{item}</div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold">Wallet</div>
        {["Needs", "Savings", "Wants"].map((item) => (
          <div className="bg-white/12 p-3 rounded-full">
            <img src={IconWallet} className="text-white fill-white" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function RouteComponent() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
