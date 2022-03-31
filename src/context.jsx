import { createContext } from "react";

import ViewModel from "./ViewModel";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  var viewModel = new ViewModel();

  return <AppContext.Provider>{children}</AppContext.Provider>;
};
