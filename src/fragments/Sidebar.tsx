import { Section, Page } from "../components";

import React from "react";
import { IconInOut } from "../components/Icons";
import sidebarLinks from "../constants/sidebarLinks";
import SidebarLink from "../components/SidebarLink";

export default function Sidebar() {
  return (
    <Page backdrop="solidDark" style={{ width: 350 }} className="flex-grow-0">
      <p className="font-serif uppercase text-center text-3xl font-bold py-16">
        Expendee
      </p>

      <Section heading="Transactions" padding={0} gap={4}>
        <SidebarLink href="navLink" label="All" Icon={IconInOut} />
        <div className="grid grid-cols-2 gap-4">
          <SidebarLink href="navLink" label="Sent" Icon={IconInOut} />
          <SidebarLink href="navLink" label="Received" Icon={IconInOut} />
        </div>
      </Section>
      <Section heading="Wallets" padding={0} gap={0} className="my-4">
        {sidebarLinks.walletLinks.map((e, i) => (
          <SidebarLink key={i} className="rounded-none" {...e} />
        ))}
      </Section>
      <Section heading="Wallets" padding={0} gap={4}>
        {sidebarLinks.calculatorLinks.map((e, i) => (
          <SidebarLink key={i} {...e} />
        ))}
      </Section>
    </Page>
  );
}
