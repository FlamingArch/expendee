import { IconSimpleInterest } from "./Icons";

type TransactionCardProps = {
  time: string;
  amount: string;
  title: string;
  categoryIcon: string;
  categoryLabel: string;
  walletIcon: string;
  walletLabel: string;
};

export default function TransactionCard({
  time,
  amount,
  title,
  categoryIcon,
  categoryLabel,
  walletIcon,
  walletLabel,
}: TransactionCardProps) {
  function getIconComponent(iconLabel: string) {
    return IconSimpleInterest;
  }

  const CategoryIcon = getIconComponent(categoryIcon);
  const WalletIcon = getIconComponent(walletIcon);

  return (
    <button className="rounded-xl shadow-xl hover:shadow-2xl p-4 -[#72798D] -opacity-50 hover:bg-white transition cursor-pointer bg-gray-50 72798D] flex flex-col gap-1">
      <p className="text-sm uppercase font-bold">{time}</p>
      <p className="text-lg">{amount}</p>
      <p className="font-bold">{title}</p>
      <div className="flex gap-1 pt-3">
        <div className="flex items-center rounded-full p-1 px-3 text-sm font-semibold fill-black bg-[#ad0] gap-1">
          <CategoryIcon className="w-4 h-4" />
          {categoryLabel}
        </div>
        <div className="flex items-center rounded-full p-1 px-3 text-sm font-semibold fill-black bg-[#ad0] gap-1">
          <WalletIcon className="w-4 h-4" />
          {walletLabel}
        </div>
      </div>
    </button>
  );
}
