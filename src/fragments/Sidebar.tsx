import { Section, Page, Button } from "../components";
import { IconPlus } from "../components/Icons";
import sidebarLinks from "../constants/sidebarLinks";
import SidebarLink from "../components/SidebarLink";
import { useLocation, useNavigate } from "react-router-dom";
import useAppStore from "../contexts/appStore";
import signOut from "../functions/signOut";
import SidebarUserSection from "./SidebarUserSection";
import SidebarBudgetsSection from "./SidebarBudgetsSection";
import SidebarTransactionsSection from "./SidebarTransactionsSection";
import { useAuthState } from "react-firebase-hooks/auth";
import SidebarWalletsSection from "./SidebarWalletsSection";

export default function Sidebar() {
  const { auth, firestore } = useAppStore((state) => ({
    auth: state.auth,
    firestore: state.firestore,
  }));

  const [user, signingIn, signInError] = useAuthState(auth);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const path = pathname.split("/")[1];

  const walletsSection = user && (
    <Section
      heading="Wallets"
      padding={0}
      gap={0}
      className="my-4"
      actions={
        <Button buttonStyle="actionSidebar" label="New" Icon={IconPlus} />
      }
    >
      {sidebarLinks.walletLinks.map((e, i) => (
        <SidebarLink
          selected={path == e.href}
          key={i}
          className="rounded-none"
          {...e}
        />
      ))}
    </Section>
  );

  const calculatorsSection = user && (
    <Section heading="Calculators" padding={0} gap={4}>
      {sidebarLinks.calculatorLinks.map((e, i) => (
        <SidebarLink selected={`/${path}` == e.href} key={i} {...e} />
      ))}
    </Section>
  );

  return (
    <Page
      width={user ? 350 : undefined}
      backdrop="solidDark"
      className={user ? "flex-grow-0" : undefined}
    >
      <p
        onClick={() => signOut(auth).then(() => navigate("/signin"))}
        className={
          "flex justify-center items-center font-branding uppercase text-center text-3xl font-black py-16 align-middle " +
          (user ? "" : "flex-grow")
        }
      >
        Expendee
      </p>

      {user && (
        <SidebarUserSection
          userId={user.uid}
          auth={auth}
          firestore={firestore}
        />
      )}

      {user && <SidebarTransactionsSection path={path} />}

      {user && (
        <SidebarWalletsSection
          firestore={firestore}
          userId={user.uid}
          path={path}
        />
      )}

      {user && (
        <SidebarBudgetsSection
          user={user ?? undefined}
          firestore={firestore}
          path={path}
        />
      )}
      {calculatorsSection}
    </Page>
  );
}
