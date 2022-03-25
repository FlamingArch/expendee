import React from "react";
import "./Scaffold.css";

const Scaffold = ({ appBar, children }) => {
  return (
    <div className="layout styling">
      {appBar} {children}
    </div>
  );
};

export default Scaffold;
