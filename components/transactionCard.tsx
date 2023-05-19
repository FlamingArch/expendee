import Link from "next/link";
import { IconSimpleInterest } from "./Icons";

type TransactionCardProps = {
  time?: string;
  amount?: string;
  title?: string;
  categoryIcon?: string;
  categoryLabel?: string;
  walletIcon?: string;
  walletLabel?: string;
  categoryColor?: string;
  selected?: boolean;
  href: string;
};

export default function TransactionCard({
  time,
  amount,
  title,
  categoryIcon,
  categoryLabel,
  categoryColor,
  walletIcon,
  walletLabel,
  selected,
  href,
  ...rest
}: TransactionCardProps) {
  function getIconComponent(iconLabel?: string) {
    return IconSimpleInterest;
  }

  const CategoryIcon = getIconComponent(categoryIcon);
  const WalletIcon = getIconComponent(walletIcon);

  return (
    <Link
      href={href}
      {...rest}
      style={{ background: !selected ? "white" : categoryColor }}
      className="rounded-xl shadow-xl hover:shadow-2xl p-4 hover:brightness-110 transition cursor-pointer bg-gray-50 72798D] flex flex-col gap-1"
    >
      <p className="text-sm uppercase font-bold">{time}</p>
      <p className="text-lg">{amount}</p>
      <p className="font-bold">{title}</p>
      <div className="flex gap-1 pt-3">
        <div
          style={{ background: selected ? "white" : categoryColor }}
          className="flex items-center rounded-full p-1 px-3 text-sm font-semibold fill-black gap-1"
        >
          <CategoryIcon className="w-4 h-4" />
          {categoryLabel}
        </div>
        <div
          style={{ background: selected ? "white" : categoryColor }}
          className="flex items-center rounded-full p-1 px-3 text-sm font-semibold fill-black gap-1"
        >
          <WalletIcon className="w-4 h-4" />
          {walletLabel}
        </div>
      </div>
    </Link>
  );
}
