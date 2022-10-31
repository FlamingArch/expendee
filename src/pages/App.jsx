import React from "react";
import { Button, Input, Scaffold } from "../components";

function App() {
  const [description, setDescription] = React.useState("");

  return (
    <Scaffold.View className="">
      <div className="w-[32rem] h-full bg-yellow-600"></div>
      <div className="w-full h-full bg-green-600"></div>
    </Scaffold.View>
  );
}

export default App;
