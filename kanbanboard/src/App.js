import React from "react";
import KanbanBoard from "./KanbanBoard.js";
import './assets/css/App.css'

import "../public/styles.css";

const App = () => {
  const data = require("../public/data.json");

  return (
    <KanbanBoard />
  );
};


export default App;