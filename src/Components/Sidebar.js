import React from "react";
import Branding from "./Branding";
import CurrentCard from "./CurrentCard";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full justify-items-center">
      <Branding />
      <CurrentCard />
      <Navigation />
    </div>
  );
};

export default Sidebar;
