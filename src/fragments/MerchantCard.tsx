import { link } from "fs";
import { IconDownload, IconOutwardLink, IconUpload } from "../components/Icons";
import { Transaction } from "../types/transaction";
import React from "react";
import { Button } from "../components";

export default function MerchantCard({
  transaction,
}: {
  transaction: Transaction;
}) {
  const merchantNameDetail = transaction.merchant && (
    <p className="font-medium">{transaction.merchant}</p>
  );

  const merchantWebsiteDetail = transaction.merchantWebsite && (
    <a
      href={transaction.merchantWebsite}
      className="text-[12px] font-bold text-accent hover:underline"
    >
      {transaction.merchantWebsite}
    </a>
  );
  const merchantAddressDetail = transaction.merchantAddress && (
    <a
      href={
        "https://www.google.com/maps/search/" +
        transaction.merchantAddress.replaceAll(" ", "+")
      }
      className="text-[12px] font-bold text-accent hover:underline"
    >
      {transaction.merchantAddress}
    </a>
  );

  const merchantDetails = (merchantNameDetail ||
    merchantAddressDetail ||
    merchantWebsiteDetail) && (
    <div className="flex-col flex gap-2">
      <p className="text-[12px] font-bold">Merchant</p>
      {merchantNameDetail}
      {merchantAddressDetail}
      {merchantWebsiteDetail}
    </div>
  );

  const linkToOrderPage =
    transaction.invoiceLinks &&
    transaction.invoiceLinks.map((link, index) => (
      <div
        key={index}
        className="flex gap-2 items-center hover:text-accent hover:underline cursor-pointer text-text dark:text-text-dark"
      >
        <IconOutwardLink className="w-5 h-5 fill-text dark:fill-text-dark" />
        {link}
      </div>
    ));

  const linkDetails = linkToOrderPage && (
    <div className="flex-col flex gap-2">
      <p className="text-[12px] font-bold">Link to Order Page</p>
      {linkToOrderPage}
    </div>
  );

  const linkedDocuments =
    transaction.documentLinks &&
    transaction.documentLinks.map((document, index) => (
      <a
        key={index}
        href={document.link}
        className="flex gap-2 items-center cursor-pointer text-accent p-3 rounded-xl bg-accent bg-opacity-10 hover:bg-opacity-20"
      >
        <IconDownload className="w-6 h-6 fill-accent" />
        {document.label}
      </a>
    ));

  const recieptDetails = linkedDocuments && (
    <div className="flex-col flex gap-2">
      <p className="text-[12px] font-bold">Link to Order Page</p>
      <div className="flex gap-4">
        {linkedDocuments}
        <Button
          buttonStyle="primary"
          className="bg-black"
          Icon={IconUpload}
          label={
            <>
              Store in{" "}
              <span className="font-branding font-black uppercase">
                Expendee
              </span>
            </>
          }
          onClick={() => alert("Coming Soon!")}
        />
      </div>
    </div>
  );

  return (
    <div className="rounded-2xl shadow-xl bg-element-light dark:bg-element-dark flex flex-col p-6 gap-6">
      <div className="text-xl">Merchant Details</div>
      {merchantDetails}
      {linkDetails}
      {recieptDetails}
    </div>
  );
}
