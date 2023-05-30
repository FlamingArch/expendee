import { Button, Section, SidebarLink } from "../components";
import { IconInOut, IconPlus } from "../components/Icons";

type SidebarTransactionsSectionProps = {
  path: string;
};

export default function SidebarTransactionsSection({
  path,
}: SidebarTransactionsSectionProps) {
  return (
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
          selected={path == "/"}
          href="/"
          label="Sent"
          Icon={IconInOut}
        />
        <SidebarLink
          selected={path == "/"}
          href="/"
          label="Received"
          Icon={IconInOut}
        />
      </div>
    </Section>
  );
}
