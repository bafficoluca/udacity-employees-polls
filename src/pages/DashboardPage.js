import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import Poll from "../components/Poll";
import { getAnsweredQuestionsIds, getNewQuestionsIds } from "../utils/helpers";

const DashboardPage = ({
  authedUser,
  newQuestionsIds,
  answeredQuestionsIds,
}) => {
  return (
    <>
      {authedUser ? (
        <>
          <Container component="main" sx={{ padding: 8 }}>
            <Typography component="h1" variant="h5">
              NEW QUESTIONS
            </Typography>
            <CssBaseline />
            <Box sx={{ marginTop: 4, flexGrow: 1 }}>
              <Grid container spacing={3}>
                {newQuestionsIds?.map((pollId) => {
                  return (
                    <Grid key={pollId} item xs>
                      <Poll id={pollId} />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Container>
          <Container component="main" sx={{ marginTop: 2, padding: 8 }}>
            <Typography component="h1" variant="h5">
              DONE
            </Typography>
            <CssBaseline />
            <Box sx={{ marginTop: 4, flexGrow: 1 }}>
              <Grid container spacing={3}>
                {answeredQuestionsIds?.map((pollId) => {
                  return (
                    <Grid key={pollId} item xs>
                      <Poll id={pollId} />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
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
    newQuestionsIds: getNewQuestionsIds(polls, authedUser),
    answeredQuestionsIds: getAnsweredQuestionsIds(polls, authedUser),
  };
};

export default connect(mapStateToProps)(DashboardPage);
