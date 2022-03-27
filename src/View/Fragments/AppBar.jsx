import AppBar from "../Components/AppBar";
import { TabBar, Section, Tab } from "../Components/TabBar";
import SummaryCard from "../Fragments/SummaryCard";

import IconAll from "../Icons/all.svg";
import IconSpent from "../Icons/spent.svg";
import IconReceived from "../Icons/received.svg";
import IconSimpleInterest from "../Icons/simple_interest.svg";
import IconCompoundInterest from "../Icons/compound_interest.svg";
import IconTips from "../Icons/tips.svg";

import React from "react";

const AppBarFragment = () => {
  var logo = <h1 className="text-2xl font-serif">EXPENDEE</h1>;

  var appBar_primaryChild = (
    <SummaryCard
      totalBudget={`$45,565`}
      spent={`$17,231`}
      received={`$107,769`}
    />
  );
  return (
    <AppBar logo={logo} centerLogo={true} primaryChild={appBar_primaryChild}>
      <TabBar>
        <Section heading="Transactions">
          <Tab index={0} icon={IconAll} label="All Transactions" />
          <Tab index={1} icon={IconSpent} label="Spent" />
          <Tab index={2} icon={IconReceived} label="Received" />
        </Section>
        <Section heading="Calculate">
          <Tab index={3} icon={IconSimpleInterest} label="Simple Interest" />
          <Tab
            index={4}
            icon={IconCompoundInterest}
            label="Compound Interest"
          />
          <Tab index={5} icon={IconTips} label="Tips" />
        </Section>
      </TabBar>
    </AppBar>
  );
};

export default AppBarFragment;
