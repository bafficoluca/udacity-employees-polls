import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";
import { AppBar } from "@mui/material";

import { handleInitialData } from "./actions/shared";
import { setAuthedUser } from "./actions/authedUser";

import "./App.css";
import LoginPage from "./pages/LoginPage";
import PollPage from "./pages/PollPage";
import DashboardPage from "./pages/DashboardPage";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const App = ({ dispatch, loading, authedUser, users }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  console.log("USER", users[authedUser]);

  return (
    <div className="App">
      <ResponsiveAppBar
        userAvatar={users[authedUser]?.avatarURL}
        logout={() => dispatch(setAuthedUser(null))}
      />
      <LoadingBar />
      {!loading && (
        <Routes>
          <Route path="/" exact element={<DashboardPage />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/poll-page/:id" exact element={<PollPage />} />
        </Routes>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, polls, users }) => ({
  loading: polls === null,
  authedUser,
  users,
});

export default connect(mapStateToProps)(App);
