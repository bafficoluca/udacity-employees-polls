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
import RequiredAuth from "./components/RequiredAuth";

const App = ({ dispatch, loading, authedUser, users }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div className="App">
      <ResponsiveAppBar
        user={users[authedUser]}
        logout={() => dispatch(setAuthedUser(null))}
      />
      {!loading && (
        <Routes>
          <Route
            exact
            path="/"
            element={
              <RequiredAuth>
                <DashboardPage />
              </RequiredAuth>
            }
          />
          <Route
            exact
            path="/questions/:question_id"
            element={
              <RequiredAuth>
                <PollPage />
              </RequiredAuth>
            }
          />
          <Route
            exact
            path="/add"
            element={
              <RequiredAuth>
                <PollCreationPage />
              </RequiredAuth>
            }
          />
          <Route
            exact
            path="/leaderboard"
            element={
              <RequiredAuth>
                <LeaderboardPage />
              </RequiredAuth>
            }
          />
          <Route exact path="/login-page" element={<LoginPage />} />
          <Route
            path="*"
            element={
              <RequiredAuth>
                <NotFoundPage />
              </RequiredAuth>
            }
          />
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
