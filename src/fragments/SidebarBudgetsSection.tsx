import React, { useState } from "react";
import { Button, Section } from "../components";
import SidebarLink from "../components/SidebarLink";
import { Budget } from "../types/budgets";
import fetchBudgets from "../functions/fetchBudgets";
import { Firestore } from "firebase/firestore";
import { User } from "firebase/auth";
import { IconPlus, IconBill, IconPreloader } from "../components/Icons";

type SidebarBudgetsSectionProps = {
  user?: User;
  firestore: Firestore;
  path: string;
};

export default function SidebarBudgetsSection({
  user,
  firestore,
  path,
}: SidebarBudgetsSectionProps) {
  const [budgets, setBudgets] = useState<Budget[]>();
  if (!user) return <></>;

  fetchBudgets(firestore, user.uid).then((budgets) => setBudgets(budgets));

  return (
    <Section
      heading="Budgets"
      padding={0}
      gap={0}
      className="my-4"
      actions={
        <SidebarLink
          href="/category/new"
          buttonStyle="actionSidebar"
          label="New"
          Icon={IconPlus}
        />
      }
    >
      {budgets?.length == undefined ||
        (budgets.length <= 0 && <IconPreloader className="w-5 h-5" />)}
      {budgets?.map((e, i) => (
        <SidebarLink
          selected={path == `/${e.id}`}
          // href={`/${e.id}`}
          href={``}
          Icon={IconBill}
          label={e.categoryLabel}
          key={i}
          className="rounded-none"
        />
      ))}
    </Section>
  );
}
