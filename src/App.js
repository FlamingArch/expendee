import "./App.css";
import Page from "./Components/Page";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App bg-theme1">
      <Sidebar />
      <Page />
    </div>
  );
}

export default App;
