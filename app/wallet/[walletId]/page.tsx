import Page from "@/views/Page";

type PropsPageWallet = {
  params: Promise<{ walletId: string }>;
};

export default async function PageWallet({ params }: PropsPageWallet) {
  const { walletId } = await params;
  return <Page>Wallet Page for Wallet ID: {walletId}</Page>;
}
