import React, { useState } from "react";
import { Button, Page } from "../components";
import AppBar from "../components/AppBar";
import { IconDelete } from "../components/Icons";

export default function SimpleInterest() {
  const [principal, setPrincipal] = useState<number>();
  const [rate, setRate] = useState<number>();
  const [time, setTime] = useState<number>();

  const interest = principal && rate && time && (principal * rate * time) / 100;

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
        padding={4}
        appBar={
          <AppBar
            sticky
            heading="Simple Interest"
            actions={<Button buttonStyle="action" Icon={IconDelete} />}
          />
        }
      >
        <input
          type="text"
          className="transition bg-element dark:bg-element-dark p-3 focus-within:shadow-xl rounded-xl"
          placeholder="Principal"
          value={principal}
          onChange={(e) => {
            if (/^\d+$/.test(e.target.value)) {
              setPrincipal(Number.parseFloat(e.target.value));
            } else if (e.target.value.length == 0) {
              setPrincipal(undefined);
            }
          }}
        />
        <input
          type="text"
          className="transition bg-element dark:bg-element-dark p-3 focus-within:shadow-xl rounded-xl"
          placeholder="Rate of Interest (per annum)"
          value={rate}
          onChange={(e) => {
            if (/^\d+$/.test(e.target.value)) {
              setRate(Number.parseFloat(e.target.value));
            } else if (e.target.value.length == 0) {
              setRate(undefined);
            }
          }}
        />
        <input
          type="text"
          className="transition bg-element dark:bg-element-dark p-3 focus-within:shadow-xl rounded-xl"
          placeholder="Time (years)"
          value={time}
          onChange={(e) => {
            if (/^\d+$/.test(e.target.value)) {
              setTime(Number.parseFloat(e.target.value));
            } else if (e.target.value.length == 0) {
              setTime(undefined);
            }
          }}
        />

        <div className="flex-grow place-content-center text-lg">
          <p>
            <span className="font-bold">Interest:</span> {interest ?? 0}
          </p>
          <p>
            <span className="font-bold">Total:</span>{" "}
            {(interest ?? 0) + (principal ?? 0)}
          </p>
        </div>

        <Button label="Save" buttonStyle="primary" />
        <Button
          label="Clear"
          buttonStyle="secondary"
          onClick={() => {
            setPrincipal(undefined);
            setRate(undefined);
            setTime(undefined);
          }}
        />
      </Page>
    </>
  );
}
