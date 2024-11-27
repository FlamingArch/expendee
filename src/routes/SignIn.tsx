import useAppStore from "../store";
import Page from "../views/Page";

export default function PageSignIn() {
  const fullSidebar = useAppStore((state) => state.fullSidebar);
  fullSidebar(true);
  return (
    <Page heading="Sign In" contentClassName="items-center" width={380}>
      Sign In with your Expendee ID
    </Page>
  );
}
