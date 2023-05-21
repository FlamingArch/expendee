import { IconInOut } from "../components/Icons";
import { Collapser, Sidebar } from "../components";
import ButtonToggleSidebar from "./ButtonToggleSidebar";
import { Playfair_Display } from "next/font/google";
import {
  IconCompoundInterest,
  IconSearch,
  IconSimpleInterest,
  IconSplit,
  IconTips,
} from "../components/Icons";

const brandingFont = Playfair_Display({ subsets: ["latin"], weight: "800" });

const sidebarWidth = 330;

const links = {
  walletLinks: [
    {
      Icon: IconSearch,
      label: "Pocket",
      href: "/wallet/cdsjkckjkerfjkecds",
    },
    {
      Icon: IconSearch,
      label: "Wallet",
      href: "/wallet/23ejndkjsnkn3d",
    },
    {
      Icon: IconSearch,
      label: "Home",
      href: "/wallet/dcsd3oi2ildewxwn",
    },
  ],
  calculatorLinks: [
    {
      label: "Simple Interest",
      Icon: IconSimpleInterest,
      href: "/si",
    },
    {
      label: "Compound Interest",
      Icon: IconCompoundInterest,
      href: "/ci",
    },
    {
      label: "Split",
      Icon: IconSplit,
      href: "/split",
    },
    {
      label: "Tip",
      Icon: IconTips,
      href: "/ps",
    },
  ],
};

export default function AppSidebar() {
  return (
    <Collapser width={sidebarWidth}>
      <Sidebar.View
        leading={
          <ButtonToggleSidebar hideOnHidden color="dark" className="ml-auto" />
        }
        width={sidebarWidth}
      >
        <div
          className={`text-center p-10 text-3xl uppercase ${brandingFont.className}`}
        >
          Expendee
        </div>

        <Sidebar.Header heading="Transactions" />
        <Sidebar.Link
          href="/transactions"
          Icon={IconInOut}
          label="All"
          selected="sup"
        />
        <div className="grid grid-cols-2 gap-4">
          <Sidebar.Link href="/transactions" Icon={IconInOut} label="Spent" />
          <Sidebar.Link
            href="/transactions"
            Icon={IconInOut}
            label="Received"
          />
        </div>

        <Sidebar.Header heading="Wallets" />
        <Sidebar.LinkGroup>
          {links.walletLinks.map((e) => (
            <Sidebar.Link {...e} className="rounded-none" />
          ))}
        </Sidebar.LinkGroup>

        <Sidebar.Header heading="Calculators" />
        {links.calculatorLinks.map((e) => (
          <Sidebar.Link {...e} />
        ))}
      </Sidebar.View>
    </Collapser>
  );
}
