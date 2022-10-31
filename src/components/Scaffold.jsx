import React from "react";
import styles from "../styles/Scaffold.module.scss";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <Context.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </Context.Provider>
  );
};

const View = ({ className, children }) => {
  return (
    <Provider>
      <div className={`${styles.container} ${className}`}>
        <div className="sidebar">
          <div className="branding"></div>
        </div>
        <div className={`${styles.content} content`}>{children}</div>
      </div>
    </Provider>
  );
};

const Scaffold = {
  View: View,
  Context: Context,
};

export default Scaffold;
