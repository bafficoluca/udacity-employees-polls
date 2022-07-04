import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import { handleInitialData } from "./actions/shared";
import { setAuthedUser } from "./actions/authedUser";

import "./App.css";
import LoginPage from "./pages/LoginPage";
import PollPage from "./pages/PollPage";
import DashboardPage from "./pages/DashboardPage";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import PollCreationPage from "./pages/PollCreationPage";
import LeaderboardPage from "./pages/LeaderboardPage";

const App = ({ dispatch, loading, authedUser, users }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div className="App">
      <ResponsiveAppBar
        userAvatar={users[authedUser]?.avatarURL}
        logout={() => dispatch(setAuthedUser(null))}
      />
      {!loading && (
        <Routes>
          <Route path="/" exact element={<DashboardPage />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/questions/:question_id" exact element={<PollPage />} />
          <Route path="/add" exact element={<PollCreationPage />} />
          <Route path="/leaderboard" exact element={<LeaderboardPage />} />
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
