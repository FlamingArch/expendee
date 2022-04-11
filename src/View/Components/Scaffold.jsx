import React from "react";
import "./Scaffold.css";

const Scaffold = ({ appBar, children }) => {
  return (
    <div style={{ fontSize: "14px" }} className="layout styling">
      {appBar || <div></div>} {children}
    </div>
  );
};

export default Scaffold;
