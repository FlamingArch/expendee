import React from "react";
import "./Scaffold.css";

const Scaffold = ({ appBar, children }) => {
  return (
    <div style={{ fontSize: "14px" }} className="layout styling">
      {appBar} {children}
    </div>
  );
};

export default Scaffold;
