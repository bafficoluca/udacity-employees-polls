import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import { handleInitialData } from "./actions/shared";

import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import PollPage from "./pages/PollPage";
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
        <Route path="/poll-page/:id" exact element={<PollPage />}></Route>
      </Routes>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
