import Button from "@/components/Button";
import {
  IconCompoundInterest,
  IconInOut,
  IconSearch,
  IconSimpleInterest,
  IconSplit,
  IconTips,
} from "@/components/Icons";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const brandingFont = Playfair_Display({ subsets: ["latin"], weight: "800" });

const wallets = [
  {
    Icon: IconSearch,
    label: "Pocket",
  },
  {
    Icon: IconSearch,
    label: "Wallet",
  },
  {
    Icon: IconSearch,
    label: "Home",
  },
];

function Heading({ children }: { children: React.ReactNode }) {
  return <div className="uppercase font-bold">{children}</div>;
}

export default function Sidebar({ leading }: { leading: React.ReactNode }) {
  return (
    <div
      className="relative flex flex-col p-4 gap-4 h-screen w-full overflow-scroll bg-black backdrop-blur-xl bg-opacity-60 border-r border-gray-200 dark:border-gray-800"
      style={{ width: 330 }}
    >
      <div className="p-1 flex sticky z-10 -top-4 -m-4">{leading}</div>

      <div
        className={`text-center p-10 text-3xl uppercase ${brandingFont.className}`}
      >
        Expendee
      </div>

      <Heading>Transactions</Heading>
      <Link href="/transactions" className="flex flex-col">
        <Button label="All" Icon={IconInOut} />
      </Link>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/transactions" className="flex flex-col">
          <Button className="flex-grow" label="Spent" Icon={IconInOut} />
        </Link>
        <Link href="/transactions" className="flex flex-col">
          <Button className="flex-grow" label="Received" Icon={IconInOut} />
        </Link>
      </div>

      <Heading>Wallets</Heading>
      <div className="flex flex-col rounded-2xl flex-shrink-0 overflow-hidden backdrop-blur-lg backdrop-saturate-[1.125]">
        {wallets.map((e) => (
          <Link href="/transactions" className="flex flex-col">
            <Button {...e} className="rounded-none backdrop-filter-none" />
          </Link>
        ))}
      </div>

      <Heading>Calculators</Heading>
      <Button label="Simple Interest" Icon={IconSimpleInterest} />
      <Button label="Compound Interest" Icon={IconCompoundInterest} />
      <Button label="Split" Icon={IconSplit} />
      <Button label="Tip" Icon={IconTips} />
    </div>
  );
}
