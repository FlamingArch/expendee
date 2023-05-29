import React, { useEffect, useState } from "react";
import { Account } from "../types/wallet";
import { User } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import { Button, Section } from "../components";
import SidebarLink from "../components/SidebarLink";
import { IconWallet } from "../components/Icons";
import { IconPlus } from "../components/Icons";
import fetchWallets from "../functions/fetchWallets";

type SidebarWalletsSectionProps = {
  userId: string;
  firestore: Firestore;
  path: string;
};

export default function SidebarWalletsSection({
  userId,
  firestore,
  path,
}: SidebarWalletsSectionProps) {
  const [wallets, setWallets] = useState<Account[]>();

  useEffect(() => {
    fetchWallets(firestore, userId).then(setWallets);
  }, []);

  return (
    <Section
      heading="Accounts"
      padding={0}
      gap={0}
      className="my-4"
      actions={
        <Button buttonStyle="actionSidebar" label="New" Icon={IconPlus} />
      }
    >
      {wallets?.map((e, i) => (
        <SidebarLink
          href={`/${e.id}`}
          selected={path == `/${e.id}`}
          key={i}
          className="rounded-none"
          label={e.title}
          Icon={IconWallet}
        />
      ))}
    </Section>
  );
}
