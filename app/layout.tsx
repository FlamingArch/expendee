import { Manrope, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

import Page from "@/views/Page";
import Section from "@/views/Section";
import Tab from "@/views/Tab";

import { MdWallet } from "react-icons/md";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { IoPersonCircleOutline, IoPieChartOutline } from "react-icons/io5";
import Button from "@/views/Button";
import Toolbar from "@/views/Toolbar";

const fontBase = Manrope({
  variable: "--font-base",
  subsets: ["latin"],
});

const fontBranding = Playfair_Display({
  variable: "--font-branding",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expendee",
  description: "The Financial Management Platform",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

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
    <Toolbar>
      <p className="font-family-[family-name:var(--font-branding)] font-black text-xl pl-3 flex-grow">
        Expendee
      </p>
      <Button
        icon={IoPersonCircleOutline}
        className="hover:bg-white/10"
        iconClassName="text-white"
      />
    </Toolbar>
  );
}

export default function RootLayout(props: RootLayoutProps) {
  const fontStyles = `${fontBase.variable} ${fontBranding.variable} font-[family-name:var(--font-base)] antialiased`;
  return (
    <html lang="en">
      <body className={`flex w-screen h-screen overflow-hidden ${fontStyles}`}>
        <Page
          className="bg-black text-white w-[250px]"
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
                path={`wallet/${item.id}`}
                label={item.label}
                icon={MdWallet}
              />
            ))}
          </Section>
        </Page>
        {props.children}
      </body>
    </html>
  );
}
