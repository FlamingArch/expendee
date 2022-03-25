import AppBar from "./Supporting/AppBar";
import Scaffold from "./Supporting/Scaffold";

const App = () => {
  var appBar = <AppBar>Sup</AppBar>;

  return (
    <Scaffold appBar={appBar}>
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          padding: "16px",
          borderRadius: "10px 0px 0px 10px",
          boxShadow: "0px 12px 40px rgba(0,0,0,0.16)",
        }}
      >
        App
      </div>
    </Scaffold>
  );
};

export default App;
