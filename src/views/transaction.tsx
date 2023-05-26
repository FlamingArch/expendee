import React from "react";
import { Button, Page } from "../components";
import AppBar from "../components/AppBar";
import {
  IconClose,
  IconDelete,
  IconEdit,
  IconShare,
  IconShareAlt,
  IconSplit,
} from "../components/Icons";
import { useNavigate, useParams } from "react-router-dom";

export default function transaction() {
  const navigate = useNavigate();
  const { id } = useParams();

  const appBar = (
    <AppBar
      gap={0}
      title={
        <Button
          buttonStyle="action"
          Icon={IconEdit}
          onClick={() => navigate(-1)}
        />
      }
      actions={
        <>
          <Button
            buttonStyle="action"
            Icon={IconSplit}
            onClick={() => navigate(-1)}
          />
          <Button
            buttonStyle="action"
            Icon={IconShareAlt}
            onClick={() => navigate(-1)}
          />
          <Button
            buttonStyle="action"
            Icon={IconDelete}
            onClick={() => navigate(-1)}
          />
        </>
      }
    />
  );

  return (
    <Page appBar={appBar}>
      <p className="font-bold">Select Transaction: {id}</p>
    </Page>
  );
}
