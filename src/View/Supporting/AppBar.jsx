import React from "react";
import "./AppBar.css";

const AppBar = ({ logo, primary_child, children }) => {
  return (
    <div className="base">
      {logo && <div className="logo">{logo}</div>}
      {primary_child && <div className="primary-child">{primary_child}</div>}
      {children}
    </div>
  );
};

export default AppBar;
