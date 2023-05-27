import React from "react";
import { Button, Page } from "../components";
import AppBar from "../components/AppBar";
import { IconDelete } from "../components/Icons";

export default function SimpleInterest() {
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
            heading="Simple Interest"
            actions={<Button buttonStyle="action" Icon={IconDelete} />}
          />
        }
      ></Page>
    </>
  );
}
