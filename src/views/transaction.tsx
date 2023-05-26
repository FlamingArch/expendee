import React from "react";
import { Button, Page } from "../components";
import AppBar from "../components/AppBar";
import {
  IconCardTick,
  IconCompoundInterest,
  IconDelete,
  IconEdit,
  IconShareAlt,
  IconSplit,
} from "../components/Icons";
import { useNavigate, useParams } from "react-router-dom";
import Chip from "../components/Chip";

export default function transaction() {
  const navigate = useNavigate();
  const { id } = useParams();

  const appBar = (
    <AppBar
      heading="Transaction"
      title={<Button buttonStyle="action" className="" Icon={IconEdit} />}
      primary={<Button buttonStyle="action" className="" Icon={IconEdit} />}
      actions={
        <>
          <Button buttonStyle="action" Icon={IconSplit} />
          <Button buttonStyle="action" Icon={IconShareAlt} />
          <Button buttonStyle="action" Icon={IconDelete} />
        </>
      }
    />
  );

  return (
    <Page gap={4} appBar={appBar} adjustPaddingForAppBar={false}>
      <div className="flex flex-col items-center gap-4">
        <div className="text-6xl font-extralight">1769.65</div>
        <div className="font-bold">Sat Jun 22, 2023</div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Button
          buttonStyle="secondary"
          Icon={IconSplit}
          label="Split with Friends"
        />
        <Button
          buttonStyle="secondary"
          Icon={IconCardTick}
          label="Mark Credit as Paid"
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="font-bold">Recurring Payment</div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Chip label="Category" Icon={IconCompoundInterest} color="#ad0" />
        <Chip label="Category" Icon={IconCompoundInterest} color="#ad0" />
      </div>
    </Page>
  );
}

// fixed inset-0 lg:static md:left-[330px]
