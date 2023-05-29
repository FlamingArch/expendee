import React from "react";
import { PaymentMethod } from "../types/paymentMethod";
import _ from "lodash";
import Chip from "../components/Chip";
import { IconTips } from "../components/Icons";

export default function PaymentMethodCard({
  method,
  wallet,
  additionalInfo,
  color,
  style,
  className,
}: {
  method: PaymentMethod;
  wallet?: any;
  additionalInfo?: string | React.ReactNode;
  color: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const identifierDisplay =
    method.type === "upi"
      ? method.identifier
      : "···· ···· ···· " + method.identifier.slice(-4);
  const typeDisplay = _.startCase(method.type);

  return (
    <div
      style={style}
      className={
        "p-4 bg-element dark:bg-black dark:bg-opacity-50 rounded-xl flex-col flex gap-2 w-fit cursor-pointer " +
        className
      }
    >
      <div className="font-medium">
        {method.label} {typeDisplay}: {identifierDisplay}
      </div>

      {wallet && (
        <div className="flex gap-2 items-center">
          <Chip color={color} Icon={IconTips} label={wallet.name} />
          {wallet.accountNumber && (
            <p className="text-[12px]">
              Linked to Account: xxxx xxxx xx{wallet.accountNumber.slice(-4)}
            </p>
          )}
        </div>
      )}

      {additionalInfo && <p className="text-[12px]">{additionalInfo}</p>}
    </div>
  );
}
