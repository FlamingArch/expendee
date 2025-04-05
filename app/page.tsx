import Page from "@/views/Page";
import Section from "@/views/Section";
import Tab from "@/views/Tab";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { IoPieChartOutline } from "react-icons/io5";
import { MdWallet } from "react-icons/md";

const tabs = [
  { path: "/overview", label: "Overview", icon: IoPieChartOutline },
  { path: "/transactions", label: "Transactions", icon: HiArrowsRightLeft },
];

const wallets = [
  { id: 1, label: "Kotak Bank", balance: 32_709.0 },
  { id: 2, label: "HDFC Bank", balance: 100_000.0 },
  { id: 3, label: "Fi Bank", balance: 2_540.0 },
];

function ToolbarSidebar() {
  return (
    <aside>
      <p className="font-family-[family-name:var(--font-branding)] font-black text-2xl">
        Expendee
      </p>
    </aside>
  );
}

export default function Home() {
  return (
    <Page toolbar={<ToolbarSidebar />}>
      <Section heading="Pages">
        {tabs.map((item) => (
          <Tab
            style="sidebar"
            key={item.path}
            path={item.path}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </Section>
      <Section heading="Wallets">
        {wallets.map((item) => (
          <Tab
            style="sidebar"
            key={item.id}
            path={`wallet/${item.id}`}
            label={item.label}
            icon={MdWallet}
          />
        ))}
      </Section>
    </Page>
  );
}
