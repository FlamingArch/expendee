import PageNavigation from "./pages/navigation";
import PageTransactions from "./pages/transactions";

export default function App() {
  return (
    <>
      <PageNavigation />
      <PageTransactions />
      <div className="bg-[#f2f3f6] text-black dark:bg-black dark:text-white font-bold flex-grow grid place-content-center">
        No Transaction Selected
      </div>
    </>
  );
}
