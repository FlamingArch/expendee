import { Manrope, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/fragments/sidebar";

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

export default function RootLayout(props: RootLayoutProps) {
  const fontStyles = `${fontBase.variable} ${fontBranding.variable} font-[family-name:var(--font-base)] antialiased`;
  return (
    <html lang="en">
      <body
        className={`flex w-screen h-screen overflow-hidden ${fontStyles} font-medium`}
      >
        <Sidebar />
        {props.children}
      </body>
    </html>
  );
}
