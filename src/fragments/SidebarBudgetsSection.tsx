import React, { useState } from "react";
import { Button, Section } from "../components";
import SidebarLink from "../components/SidebarLink";
import { Budget } from "../types/budgets";
import fetchBudgets from "../functions/fetchBudgets";
import { Firestore } from "firebase/firestore";
import { User } from "firebase/auth";
import { IconPlus, IconBill } from "../components/Icons";

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

  fetchBudgets(user, firestore).then((budgets) => setBudgets(budgets));

  return (
    <Section
      heading="Budgets"
      padding={0}
      gap={0}
      className="my-4"
      actions={
        <Button buttonStyle="actionSidebar" label="New" Icon={IconPlus} />
      }
    >
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
