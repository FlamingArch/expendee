import React from "react";

type PropsDrawer = {
  children: React.ReactNode;
  expanded: boolean;
  setExpanded: () => void;
};

export default function Drawer({
  children,
  expanded,
  setExpanded,
}: PropsDrawer) {
  return (
    <>
      {expanded && (
        <div
          className={
            "w-screen h-screen backdrop-blur-none fixed inset-0 z-10 saturate-150 md:hidden " +
            (expanded ? "backdrop-blur-lg bg-black/80" : "")
          }
          onClick={setExpanded}
        ></div>
      )}
      <div className="fixed z-10 h-screen md:relative md:z-0 flex">
        {children}
      </div>
    </>
  );
}
