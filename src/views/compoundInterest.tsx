import React, { useState } from "react";
import { Button, Page } from "../components";
import AppBar from "../components/AppBar";
import { IconDelete } from "../components/Icons";

function calculate(
  principal: number,
  interest: number,
  compound: number,
  time: number
) {
  return principal * Math.pow(1 + interest / compound, compound * time);
}

export default function CompoundInterest() {
  const [principal, setPrincipal] = useState<number | undefined>(undefined);
  const [interest, setInterest] = useState<number | undefined>(undefined);
  const [compound, setCompound] = useState<number | undefined>(undefined);
  const [time, setTime] = useState<number | undefined>(undefined);

  const interestCalculated =
    principal &&
    interest &&
    compound &&
    time &&
    calculate(principal, interest, compound, time);

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
        gap={4}
        appBar={
          <AppBar
            sticky
            heading="Compound Interest"
            actions={<Button buttonStyle="action" Icon={IconDelete} />}
          />
        }
      >
        <input
          type="number"
          value={principal}
          onChange={(e) => {
            if (e.target.value.length === 0) {
              setPrincipal(undefined);
            } else if (/^\d+$/.test(e.target.value)) {
              setPrincipal(parseInt(e.target.value));
            }
          }}
          placeholder="Principal"
        />
        <input
          type="number"
          value={interest}
          onChange={(e) => {
            if (e.target.value.length === 0) {
              setInterest(undefined);
            } else if (/^\d+$/.test(e.target.value)) {
              setInterest(parseInt(e.target.value));
            }
          }}
          placeholder="Interest"
        />
        <input
          type="number"
          value={time}
          onChange={(e) => {
            if (e.target.value.length === 0) {
              setTime(undefined);
            } else if (/^\d+$/.test(e.target.value)) {
              setTime(parseInt(e.target.value));
            }
          }}
          placeholder="Time"
        />
        <input
          type="number"
          value={compound}
          onChange={(e) => {
            if (e.target.value.length === 0) {
              setCompound(undefined);
            } else if (/^\d+$/.test(e.target.value)) {
              setCompound(parseInt(e.target.value));
            }
          }}
          placeholder="Compound"
        />
        <div className="flex-grow place-content-center text-lg">
          <p>
            <span className="font-bold">Interest:</span>{" "}
            {interestCalculated ?? 0}
          </p>
          <p>
            <span className="font-bold">Total:</span>{" "}
            {(interestCalculated ?? 0) + (principal ?? 0)}
          </p>
        </div>
      </Page>
    </>
  );
}
