import React from "react";
import { Header } from "./Components/Header/Header";

import "./styles/global.css";
import { Tasks } from "./Components/Tasks/Tasks";

function App() {
  return (
    <>
      <Header />
      <Tasks />
    </>
  );
}

export default App;
