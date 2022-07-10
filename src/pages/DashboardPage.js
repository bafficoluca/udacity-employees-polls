import { Container, CssBaseline, Grid, Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import Poll from "../components/Poll";
import { getAnsweredQuestions, getNewQuestions } from "../utils/helpers";

const DashboardPage = ({ authedUser, newQuestions, answeredQuestionsIds }) => {
  return (
    <>
      {authedUser ? (
        <>
          <Container component="main" sx={{ padding: 2 }}>
            <Typography component="h1" variant="h3">
              NEW QUESTIONS
            </Typography>
            <CssBaseline />
            <Grid sx={{ display: "flex", marginTop: 4 }} container spacing={3}>
              {newQuestions?.map((poll) => {
                return (
                  <Grid key={poll?.id} item xs={4}>
                    <Poll poll={poll} dataTestId="new-question" />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
          <Container component="main" sx={{ marginTop: 2, padding: 2 }}>
            <Typography component="h1" variant="h3">
              DONE
            </Typography>
            <CssBaseline />
            <Grid
              sx={{ marginTop: 4 }}
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              {answeredQuestionsIds?.map((poll) => {
                return (
                  <Grid key={poll?.id} item xs={4}>
                    <Poll poll={poll} dataTestId="answered-question" />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </>
      ) : (
        <Navigate to="/login-page" />
      )}
    </>
  );
};

const mapStateToProps = ({ polls, authedUser }) => {
  return {
    authedUser,
    pollsIds: Object.keys(polls).sort(
      (a, b) => polls[b].timestamp - polls[a].timestamp
    ),
    newQuestions: getNewQuestions(polls, authedUser),
    answeredQuestionsIds: getAnsweredQuestions(polls, authedUser),
  };
};

export default connect(mapStateToProps)(DashboardPage);
