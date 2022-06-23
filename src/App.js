import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<DashboardPage />}></Route>
        <Route path="/login-page" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
