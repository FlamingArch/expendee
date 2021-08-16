import React from "react";

const Tab = (activeIndex, selfIndex, children) => {
  return (
    <div
      className={`p-2 ${
        activeIndex === selfIndex ? "bg-white rounded-md shadow-md" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Tab;
