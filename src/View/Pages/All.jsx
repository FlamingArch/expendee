import Page from "../Components/Page";
import Toolbar from "../Components/Toolbar";

const All = () => {
  var toolbar = <Toolbar title="All Transactions"></Toolbar>;

  return <Page toolbar={toolbar}></Page>;
};

export default All;
