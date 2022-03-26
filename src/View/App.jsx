import { useContext } from "react";

import SummaryCard from "./Fragments/SummaryCard";

import AppBar from "./Components/AppBar";
import Scaffold from "./Components/Scaffold";
import { TabBar, TabBarContext, Section, Tab } from "./Components/TabBar";

import IconAll from "./Icons/all.svg";
import IconSpent from "./Icons/spent.svg";
import IconReceived from "./Icons/received.svg";
import IconSimpleInterest from "./Icons/simple_interest.svg";
import IconCompoundInterest from "./Icons/compound_interest.svg";
import IconTips from "./Icons/tips.svg";

import All from "./Pages/All";
import Spent from "./Pages/Spent";
import Received from "./Pages/Received";
import SimpleInterest from "./Pages/SimpleInterest";
import CompoundInterest from "./Pages/CompoundInterest";
import Tips from "./Pages/Tips";

const App = () => {
  const { selectedIndex } = useContext(TabBarContext);

  var logo = <h1 className="text-2xl font-serif">EXPENDEE</h1>;

  var appBar_primaryChild = (
    <SummaryCard
      totalBudget={`$45,565`}
      spent={`$17,231`}
      received={`$107,769`}
    />
  );

  var appBar = (
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

  return (
    <Scaffold appBar={appBar}>
      {selectedIndex === 0 ? (
        <All />
      ) : selectedIndex === 1 ? (
        <Spent />
      ) : selectedIndex === 2 ? (
        <Received />
      ) : selectedIndex === 3 ? (
        <SimpleInterest />
      ) : selectedIndex === 4 ? (
        <CompoundInterest />
      ) : selectedIndex === 5 ? (
        <Tips />
      ) : null}
    </Scaffold>
  );
};

export default App;
