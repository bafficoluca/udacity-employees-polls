import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import { handleInitialData } from "./actions/shared";

import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

const App = ({ dispatch, authedUser }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<DashboardPage />}></Route>
        <Route path="/login-page" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
