import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PaginaCentral from "./components/paginacentral";

function App() {
  return (
    <Router>
      <PaginaCentral />
    </Router>
  );
}

export default App;
