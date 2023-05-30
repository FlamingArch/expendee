import { Button, Page } from "../components";
import AppBar from "../components/AppBar";
import { IconDelete } from "../components/Icons";

export default function Split() {
  return (
    <>
      <Page
        appBar={
          <AppBar
            sticky
            heading="History"
            actions={<Button buttonStyle="action" Icon={IconDelete} />}
          />
        }
        width={350}
      >
        <div className="justify-center items-center flex-grow py-[40vh] font-bold grid">
          Sign In to view History
        </div>
      </Page>

      <Page
        appBar={
          <AppBar
            sticky
            heading="Split"
            actions={<Button buttonStyle="action" Icon={IconDelete} />}
          />
        }
      >
        <div className="justify-center items-center flex-grow py-[40vh] font-bold grid">
          Splitting between friends is Coming Soon
        </div>
      </Page>
    </>
  );
}
