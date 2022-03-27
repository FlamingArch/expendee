import { createContext, useContext, useState } from "react";
import "./TabBar.css";

export const TabViewContext = createContext();

import React from "react";

export const TabViewProvider = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <TabViewContext.Provider
      value={{
        selectedIndex: selectedIndex,
        setSelectedIndex: setSelectedIndex,
      }}
    >
      {children}
    </TabViewContext.Provider>
  );
};

export const TabBar = ({ children }) => {
  return <div className="tabbar">{children}</div>;
};

export const Section = ({ children, heading }) => {
  return (
    <div className="section">
      <div className="heading">{heading}</div>
      {children}
    </div>
  );
};

export const Tab = ({ icon, label, trailing, index }) => {
  const { selectedIndex, setSelectedIndex } = useContext(TabViewContext);

  return (
    <div
      className={`tab ${index == selectedIndex ? "selected" : "tabHover"}`}
      onClick={() => setSelectedIndex(index)}
    >
      {<img src={icon} />}
      <div></div>
      <p>{label}</p>
      <div></div>
      {trailing}
    </div>
  );
};

export const TabView = ({ children }) => {
  const { selectedIndex } = useContext(TabViewContext);

  return children[selectedIndex];
};

export default TabBar;
