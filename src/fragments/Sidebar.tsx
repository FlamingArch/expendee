import { Section, Page, Button } from "../components";

import React from "react";
import { IconInOut, IconPlus } from "../components/Icons";
import sidebarLinks from "../constants/sidebarLinks";
import SidebarLink from "../components/SidebarLink";
import { useLocation } from "react-router-dom";
import useAppStore from "../contexts/appStore";

export default function Sidebar() {
  const { auth } = useAppStore((state) => ({
    auth: state.auth,
  }));
  const { pathname } = useLocation();

  const path = pathname.split("/")[1];

  const transactionsSection = auth.currentUser && (
    <Section
      heading="Transactions"
      padding={0}
      gap={4}
      actions={
        <Button buttonStyle="actionSidebar" label="New" Icon={IconPlus} />
      }
    >
      <SidebarLink
        selected={!path || path == "transaction"}
        href="/"
        label="All"
        Icon={IconInOut}
      />
      <div className="grid grid-cols-2 gap-4">
        <SidebarLink
          selected={path == "spent"}
          href="/spent"
          label="Sent"
          Icon={IconInOut}
        />
        <SidebarLink
          selected={path == "received"}
          href="/received"
          label="Received"
          Icon={IconInOut}
        />
      </div>
    </Section>
  );

  const walletsSection = auth.currentUser && (
    <Section
      heading="Wallets"
      padding={0}
      gap={0}
      className="my-4"
      actions={
        <Button buttonStyle="actionSidebar" label="New" Icon={IconPlus} />
      }
    >
      {sidebarLinks.walletLinks.map((e, i) => (
        <SidebarLink
          selected={path == e.href}
          key={i}
          className="rounded-none"
          {...e}
        />
      ))}
    </Section>
  );

  const calculatorsSection = auth.currentUser && (
    <Section heading="Calculators" padding={0} gap={4}>
      {sidebarLinks.calculatorLinks.map((e, i) => (
        <SidebarLink selected={`/${path}` == e.href} key={i} {...e} />
      ))}
    </Section>
  );

  return (
    <Page
      width={auth.currentUser ? 350 : undefined}
      backdrop="solidDark"
      className={auth.currentUser ? "flex-grow-0" : undefined}
    >
      <p
        className={
          "flex justify-center items-center font-branding uppercase text-center text-3xl font-black py-16 align-middle " +
          (auth.currentUser ? "" : "flex-grow")
        }
      >
        Expendee
      </p>
      {transactionsSection}
      {walletsSection}
      {calculatorsSection}
    </Page>
  );
}
