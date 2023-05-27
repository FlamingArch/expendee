import { Sidebar } from "../fragments";
import "../styles/globals.scss";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function LayoutRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}