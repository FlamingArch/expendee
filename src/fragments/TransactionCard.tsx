"use client";

import React from "react";
import Chip from "../components/Chip";
import { IconProps } from "../types/icon";
import { redirect } from "next/dist/server/api-utils";
import { useNavigate } from "react-router-dom";

export default function TransactionCard({
  amountWithCurrency,
  time,
  title,
  labelCategory,
  labelWallet,
  IconCategory,
  IconWallet,
  id,
  expanded,
  selected,
  color,
}: {
  amountWithCurrency: string;
  time: string;
  title: string;
  labelCategory: string;
  labelWallet: string;
  IconCategory: React.FunctionComponent<IconProps>;
  IconWallet: React.FunctionComponent<IconProps>;
  id: string;
  color: string;
  expanded?: boolean;
  selected?: boolean;
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/transaction/" + id);
      }}
      style={{
        backgroundColor: selected ? color : "",
        color: selected ? "black" : "",
      }}
      className={
        "transition bg-white dark:bg-element-dark rounded-xl shadow-[#2221] shadow-xl hover:shadow-2xl p-4 flex flex-col hover:brightness-110 cursor-pointer gap-3 "
      }
    >
      <p className="text-[12px] font-bold">{time}</p>
      <div className="flex-col flex">
        <p className="text-2xl font-light">{amountWithCurrency}</p>
        <p className="font-bold">{title}</p>
      </div>
      <div className="flex gap-1">
        <Chip
          label={labelCategory}
          Icon={IconCategory}
          color={selected ? "#fff" : color}
        />
        <Chip
          label={labelWallet}
          Icon={IconWallet}
          color={selected ? "#fff" : color}
        />
      </div>
    </div>
  );
}
