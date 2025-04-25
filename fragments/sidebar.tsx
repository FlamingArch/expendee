import Collapsible from "@/app/collapsible";
import ToggleSidebarButton from "@/app/toggleSidebarButton";
import Button from "@/views/Button";
import Page from "@/views/Page";
import Section from "@/views/Section";
import Tab from "@/views/Tab";
import Toolbar from "@/views/Toolbar";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { IoPersonCircleOutline, IoPieChartOutline } from "react-icons/io5";
import { MdWallet } from "react-icons/md";

const sidebarAlwaysDark = true;

const tabs = [
  {
    path: "/",
    label: "Overview",
    icon: <IoPieChartOutline className="w-5 h-5" />,
  },
  {
    path: "/transactions",
    label: "Transactions",
    icon: <HiArrowsRightLeft className="w-5 h-5" />,
  },
];

const wallets = [
  { id: 1, label: "Kotak Bank", balance: 32_709.0 },
  { id: 2, label: "HDFC Bank", balance: 100_000.0 },
  { id: 3, label: "Fi Bank", balance: 2_540.0 },
];

function ToolbarSidebar() {
  return (
    <Toolbar
      className={sidebarAlwaysDark ? "!bg-black !text-white" : ""}
      leading={
        <p className="font-[family-name:var(--font-branding)] font-black text-xl pl-3 flex-grow">
          Expendee
        </p>
      }
      trailing={
        <>
          <Button
            icon={IoPersonCircleOutline}
            className={sidebarAlwaysDark ? "hover:bg-white/20" : ""}
            iconClassName={sidebarAlwaysDark ? "text-white" : ""}
          />
          <ToggleSidebarButton inSidebar />
        </>
      }
    >
      <div className="flex items-center"></div>
    </Toolbar>
  );
}

export default function Sidebar() {
  let width = 240;
  return (
    <Collapsible width={width}>
      <Page
        style={{
          width: 240,
        }}
        className={
          "shrink-0 " + (sidebarAlwaysDark ? "!bg-black text-white " : "")
        }
        toolbar={<ToolbarSidebar />}
      >
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
              path={`/wallet/${item.id}`}
              label={item.label}
              icon={<MdWallet />}
              trailing={item.balance}
            />
          ))}
        </Section>
      </Page>
    </Collapsible>
  );
}
