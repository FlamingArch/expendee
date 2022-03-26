import { useContext } from "react";

import SummaryCard from "./Elements/SummaryCard";
import AppBar from "./Supporting/AppBar";
import Scaffold from "./Supporting/Scaffold";
import Page from "./Supporting/Page";
import { TabBar, TabBarContext, Section, Tab } from "./Supporting/TabBar";

import IconAll from "./Icons/all.svg";
import IconSpent from "./Icons/spent.svg";
import IconReceived from "./Icons/received.svg";
import IconSimpleInterest from "./Icons/simple_interest.svg";
import IconCompoundInterest from "./Icons/compound_interest.svg";
import IconTips from "./Icons/tips.svg";

const App = () => {
  const { selectedIndex } = useContext(TabBarContext);

  var logo = <h1 className="text-2xl font-serif">EXPENSES</h1>;

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
          <Tab index={4} icon={IconSimpleInterest} label="Simple Interest" />
          <Tab
            index={5}
            icon={IconCompoundInterest}
            label="Compound Interest"
          />
          <Tab index={6} icon={IconTips} label="Tips" />
        </Section>
      </TabBar>
    </AppBar>
  );

  return (
    <Scaffold appBar={appBar}>
      <Page>
        <h1>{selectedIndex}</h1>
      </Page>
    </Scaffold>
  );
};

export default App;
