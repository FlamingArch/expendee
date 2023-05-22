import { Button } from "../components";
import { IconPlus } from "../components/Icons";
import Page from "../components/Page";
import React from "react";

export default function Home() {
  return (
    <Page>
      <Button Icon={IconPlus} label="New Transaction" />
    </Page>
  );
}
