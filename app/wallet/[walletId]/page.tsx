import Page from "@/views/Page";
import Button from "@/views/Button";
import Toolbar from "@/views/Toolbar";
import {
  IoCheckboxOutline,
  IoEllipsisHorizontalCircleOutline,
  IoFilterSharp,
} from "react-icons/io5";
import ToggleSidebarButton from "../../toggleSidebarButton";

type PropsPageWallet = {
  params: Promise<{ walletId: string }>;
};

function ToolbarWallet({ title }: { title: string }) {
  return (
    <Toolbar
      position="top"
      leading={
        <>
          <ToggleSidebarButton />
          <Button icon={IoCheckboxOutline} iconClassName="stroke-[1.5]" />
        </>
      }
      trailing={
        <>
          <Button icon={IoFilterSharp} />
          <Button icon={IoEllipsisHorizontalCircleOutline} />
        </>
      }
    >
      <p className="text-xl p-3">{title}</p>
    </Toolbar>
  );
}

export default async function PageWallet({ params }: PropsPageWallet) {
  const { walletId } = await params;
  return (
    <Page toolbar={<ToolbarWallet title={`Wallet ID: ${walletId}`} />}>
      <div className="rounded-xl shadow-xl bg-white w-72 h-24 m-4" />
    </Page>
  );
}
