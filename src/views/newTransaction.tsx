import { useEffect, useState } from "react";
import { Button, Page } from "../components";
import AppBar from "../components/AppBar";
import {
  IconBill,
  IconDelete,
  IconDone,
  IconEdit,
  IconPlus,
  IconPreloader,
  IconWallet,
} from "../components/Icons";
import Chip from "../components/Chip";
import { Budget } from "../types/budgets";
import ModalSheet from "../components/ModalSheet";
import fetchWallets from "../functions/fetchWallets";
import useAppStore from "../contexts/appStore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Account } from "../types/wallet";
import fetchBudgets from "../functions/fetchBudgets";
import createExpense from "../functions/createExpense";
import addExpense from "../functions/addExpense";

type ReceiptDoc = {
  link: string;
  label: string;
};

export default function PageNewTransaction() {
  const [wallets, setWallets] = useState<Account[]>([]);
  const [selectedWallet, setSelectedWallet] = useState<Account>();
  const [categories, setCategories] = useState<Budget[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Budget>();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState<number | null>(null);
  const [recurring, setRecurring] = useState(false);
  const [recurringDuration, setRecurringDuration] = useState(0);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [accountVisible, setAccountVisible] = useState(false);
  const [merchant, setMerchant] = useState("");
  const [merchantAddress, setMerchantAddress] = useState("");
  const [merchantWebsite, setMerchantWebsite] = useState("");
  const [invoiceLinks, setInvoiceLinks] = useState<string[]>([]);
  const [invoiceLink, setInvoiceLink] = useState("");
  const [docLinks, setDocLinks] = useState<ReceiptDoc[]>([]);
  const [docLabel, setDocLabel] = useState("");
  const [docLink, setDocLink] = useState("");

  const { auth, firestore } = useAppStore((state) => ({
    auth: state.auth,
    firestore: state.firestore,
  }));

  const [user, signingIn] = useAuthState(auth);
  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);

  if (signingIn)
    return (
      <Page>
        <div className="flex items-center justify-center flex-grow">
          <IconPreloader className="w-6 h-6 stroke-text dark:stroke-text-dark" />
        </div>
      </Page>
    );

  if (!signingIn && !user) navigate("/signin");

  const doneDisabled =
    title.length === 0 ||
    amount === null ||
    amount === 0 ||
    (recurring && recurringDuration === 0) ||
    !selectedCategory ||
    !selectedWallet;

  useEffect(() => {
    if (user) {
      fetchWallets(firestore, user?.uid).then(setWallets);
      fetchBudgets(firestore, user?.uid).then(setCategories);
    }
  }, [user]);

  const handleSubmit = () => {
    if (user && amount && selectedCategory && selectedWallet) {
      createExpense(firestore, user?.uid, {
        title,
        amount,
        currency: "INR",
        recurring,
        recurringDurationDays: recurringDuration,
        categoryDoc: selectedCategory,
        walletDoc: selectedWallet,
        merchant,
        merchantWebsite,
        merchantAddress,
        invoiceLinks,
        documentLinks: docLinks,
        paymentMethods: [],
        repaidWith: [],
        notes: "",
      })
        .then((doc) =>
          addExpense(firestore, doc, selectedCategory, selectedWallet).then(
            () => navigate("/")
          )
        )
        .catch((e) => console.error(e));
    }
  };

  const appBar = (
    <AppBar
      sticky
      padding={2}
      leading={
        <Button
          buttonStyle="secondaryAccent"
          className="bg-red-500 fill-red-500 dark:bg-red-500"
          onClick={navigateBack}
        >
          <IconDelete className="w-6 h-6 fill-red-500" />
        </Button>
      }
      actions={
        <Button
          disabled={doneDisabled}
          Icon={IconDone}
          label="Done"
          buttonStyle="secondaryAccent"
          onClick={handleSubmit}
        />
      }
      heading={
        <input
          style={{
            textAlign: "left",
          }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="clear p-2 text-left"
          placeholder="Title"
        />
      }
    />
  );

  return (
    <Page appBar={appBar} gap={6} className="relative">
      <div className="flex flex-col justify-center items-center gap-4">
        <input
          value={amount ?? ""}
          onChange={(e) => {
            if (e.target.value.length === 0) {
              setAmount(null);
            } else if (/^\d+$/.test(e.target.value)) {
              setAmount(parseInt(e.target.value));
            }
          }}
          className="clear p-2 text-6xl text-center font-extralight"
          placeholder="Amount"
        />
      </div>
      <div className="flex justify-center items-center gap-4">
        <input
          type="checkbox"
          checked={recurring}
          className="scale-125"
          onChange={() => setRecurring(!recurring)}
        />
        <p className="font-bold">Recurring Payment</p>
      </div>
      {recurring && (
        <div className="flex justify-center items-center gap-4">
          <p className="font-bold">Recurring Duration: </p>
          <input
            type="number"
            className="w-24"
            value={`${recurringDuration}`}
            onChange={(e) => {
              if (e.target.value.length === 0) {
                setRecurringDuration(0);
              } else if (/^\d+$/.test(e.target.value)) {
                setRecurringDuration(parseInt(e.target.value));
              }
            }}
          />
          <p className="font-bold">Days</p>
        </div>
      )}
      <div className="flex justify-center items-center gap-4">
        <Chip
          chipStyle="secondary"
          Icon={selectedCategory ? IconBill : IconEdit}
          label={selectedCategory?.categoryLabel ?? "Choose Category"}
          onClick={() => setCategoryVisible(true)}
        />
        <Chip
          chipStyle="secondary"
          Icon={selectedWallet ? IconWallet : IconEdit}
          label={selectedWallet?.title ?? "Choose Account"}
          onClick={() => setAccountVisible(true)}
        />
      </div>

      <div className="rounded-2xl shadow-xl bg-element-light dark:bg-element-dark flex flex-col p-6 gap-6">
        <div className="text-xl">Merchant Details</div>

        <div className="flex-col flex gap-2">
          <p className="text-[12px] font-bold">Merchant</p>
          <input
            value={merchant}
            onChange={(e) => setMerchant(e.target.value)}
            className="clear p-0 font-medium"
            placeholder="Merchant Name"
          />
          <input
            value={merchantAddress}
            onChange={(e) => setMerchantAddress(e.target.value)}
            className="clear p-0 text-[12px] font-bold text-accent hover:underline"
            placeholder="Address"
          />
          <input
            value={merchantWebsite}
            onChange={(e) => setMerchantWebsite(e.target.value)}
            className="clear p-0 text-[12px] font-bold text-accent hover:underline"
            placeholder="Website"
          />
        </div>

        <div className="flex-col flex gap-2">
          <p className="text-[12px] font-bold">Link to Order Page</p>
          <div className="flex gap-4">
            <input
              value={invoiceLink}
              onChange={(e) => setInvoiceLink(e.target.value)}
              placeholder="Add Link"
              className="flex-grow"
            />
            <Button
              Icon={IconPlus}
              buttonStyle="secondaryAccent"
              onClick={() => {
                setInvoiceLinks([...invoiceLinks, invoiceLink]);
                setInvoiceLink("");
              }}
            />
          </div>
          {invoiceLinks.map((link, index) => (
            <div
              key={index}
              onClick={() => {
                setInvoiceLinks(
                  invoiceLinks.filter((e, i) => {
                    return i !== index;
                  })
                );
              }}
              className="flex gap-2 items-center hover:underline cursor-pointer text-text dark:text-text-dark hover:text-red-500"
            >
              <IconDelete className="w-5 h-5 fill-text dark:fill-text-dark" />
              {link}
            </div>
          ))}
        </div>

        <div className="flex-col flex gap-2">
          <p className="text-[12px] font-bold">Receipts</p>
          <div className="flex gap-4">
            <input
              value={docLabel}
              onChange={(e) => setDocLabel(e.target.value)}
              placeholder="Document Name"
              className="flex-grow"
            />
            <input
              value={docLink}
              onChange={(e) => setDocLink(e.target.value)}
              placeholder="Document Link"
              className="flex-grow"
            />
            <Button
              Icon={IconPlus}
              buttonStyle="secondaryAccent"
              onClick={() => {
                setDocLinks([
                  ...docLinks,
                  {
                    label: docLabel,
                    link: docLink,
                  },
                ]);
                setDocLabel("");
                setDocLink("");
              }}
            />
          </div>

          {docLinks.map((document, index) => (
            <a
              key={index}
              href={document.link}
              className="flex gap-2 items-center cursor-pointer text-accent p-3 rounded-xl bg-accent bg-opacity-10 hover:bg-opacity-20"
            >
              <IconDelete className="w-6 h-6 fill-accent" />
              {document.label}
            </a>
          ))}
        </div>
      </div>

      <ModalSheet
        visible={categoryVisible}
        title="Choose Category"
        onClose={() => setCategoryVisible(false)}
      >
        <Button
          buttonStyle="secondaryAccent"
          Icon={IconPlus}
          label="New Category"
          onClick={() => {
            navigate("/category/new");
          }}
        />
        {categories.map((e) => (
          <Button
            key={e.id}
            Icon={IconBill}
            label={e.categoryLabel}
            onClick={() => {
              setSelectedCategory(e);
              setCategoryVisible(false);
            }}
          />
        ))}
      </ModalSheet>

      <ModalSheet
        visible={accountVisible}
        title="Choose Account"
        onClose={() => setAccountVisible(false)}
      >
        <Button
          buttonStyle="secondaryAccent"
          Icon={IconPlus}
          label="New Account"
          onClick={() => {
            navigate("/wallet/new");
          }}
        />
        {wallets.map((e) => (
          <Button
            key={e.id}
            Icon={IconWallet}
            label={e.title}
            onClick={() => {
              setSelectedWallet(e);
              setAccountVisible(false);
            }}
          />
        ))}
      </ModalSheet>
    </Page>
  );
}

// const documentRef = doc(collection(firestore, "transactions"));
//     const data: Transaction = {
//       id: documentRef.id,
// userId: user?.uid,
// title: title,
// amount: amount,
// currency: "INR",
// date: Timestamp.now(),
// recurring: recurring,
// recurringDurationDays: recurringDuration,
// categoryId: selectedCategory?.id,
// categoryColor: selectedCategory?.color,
// categoryLabel: selectedCategory?.categoryLabel,
// categoryIcon: selectedCategory?.categoryIcon,
// categoryBudgetRemainingAfterTxn: (selectedCategory?.budgetAmount ?? 0 - ((selectedCategory?.spentAmount ?? 0) +( amount ?? 0))),
// categoryBudgetRemainingAfterTxnPercentage: (selectedCategory?.budgetAmount ?? 0 - ((selectedCategory?.spentAmount ?? 0) +( amount ?? 0))) / (selectedCategory?.budgetAmount ?? 0) * 100,
// walletId: selectedWallet?.id,
// walletLabel:selectedWallet?.title ,
// walletIcon: selectedWallet?.icon,
// walletRemainingAfterTxn: (selectedWallet?.balance ?? 0) - (amount ?? 0),
// merchant: merchant,
// merchantWebsite: merchantWebsite, ,
// merchantAddress: merchantAddress,
// invoiceLinks: invoiceLinks,
// documentLinks: docLinks,
// paidInitiallyViaCredit: ,
// paymentMethods: ,
// isRepaid: ,
// repaidWith: ,
// splitWith: ,
// remaining: ,
// notes: ,
// deleted: ,
//     }
