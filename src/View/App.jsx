import Scaffold from "./Components/Scaffold";
import { TabView } from "./Components/TabBar";

import All from "./Pages/All";
import Spent from "./Pages/Spent";
import Received from "./Pages/Received";
import SimpleInterest from "./Pages/SimpleInterest";
import CompoundInterest from "./Pages/CompoundInterest";
import Tips from "./Pages/Tips";
import AppBar from "./Fragments/AppBar";

const App = () => {
  var appBar = <AppBar />;

  return (
    <Scaffold appBar={appBar}>
      <TabView>
        <All />
        <Spent />
        <Received />
        <SimpleInterest />
        <CompoundInterest />
        <Tips />
      </TabView>
    </Scaffold>
  );
};

export default App;
