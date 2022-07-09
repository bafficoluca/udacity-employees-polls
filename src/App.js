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
import NotFoundPage from "./pages/NotFoundPage";

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
          <Route exact path="/" element={<DashboardPage />} />
          <Route exact path="/login-page" element={<LoginPage />} />
          <Route exact path="/questions/:question_id" element={<PollPage />} />
          <Route exact path="/add" element={<PollCreationPage />} />
          <Route exact path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
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
