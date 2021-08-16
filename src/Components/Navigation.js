import React from "react";
import Tab from "./Supporting Views/Tab";

const Navigation = () => {
  let activeNav = 0;

  return (
    <div className="m-6">
      <p className="text-sm font-bold">Transactions</p>
      <Navigation>
        <Tab activeIndex={activeNav} currentIndex={1}>
          All Transactions
        </Tab>
        <Tab activeIndex={activeNav} currentIndex={2}>
          Spent
        </Tab>
        <Tab activeIndex={activeNav} currentIndex={3}>
          Received
        </Tab>
      </Navigation>
    </div>
  );
};

export default Navigation;
