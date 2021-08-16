import "./App.css";
import Page from "./Components/Page";
import Sidebar from "./Components/Sidebar";

let spent = 0;
let received = 0;
let expenses = [];

function App() {
  return (
    <div className="App bg-theme1">
      <Sidebar />
      <Page />
    </div>
  );
}

export default App;
