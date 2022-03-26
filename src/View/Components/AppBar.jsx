
import "./AppBar.css";

const AppBar = ({ logo, primaryChild, children, centerLogo }) => {
  return (
    <div className="appbar-base">
      <div className={`logo ${centerLogo ? "center_logo" : ""}`}>{logo}</div>
      {primaryChild && <div className="primary-child">{primaryChild}</div>}
      {children}
    </div>
  );
};

export default AppBar;
