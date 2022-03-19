import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import LiveCasino from "./pages/liveCasino/LiveCasino";

import "./app.css";

function App() {

  return (
    <Router>
      <div class="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<LiveCasino />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
