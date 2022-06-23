import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Poll from "../components/Poll";
import { getAnsweredQuestions, getNewQuestions } from "../utils/helpers";

const DashboardPage = (props) => {
  console.log("POLLS", props.pollsIds);
  return (
    <>
      <Container component="main" sx={{ padding: 8 }}>
        <Typography component="h1" variant="h5">
          NEW QUESTIONS
        </Typography>
        <CssBaseline />
        <Box sx={{ marginTop: 4, flexGrow: 1 }}>
          <Grid container spacing={3}>
            {props.pollsIds?.map((pollId) => {
              return (
                <Grid item xs>
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
            <Grid item xs>
              <Poll />
            </Grid>
            <Grid item xs>
              <Poll />
            </Grid>
            <Grid item xs>
              <Poll />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

const mapStateToProps = ({ polls, authedUser, users }) => {
  return {
    pollsIds: Object.keys(polls).sort(
      (a, b) => polls[b].timestamp - polls[a].timestamp
    ),
    polls,
    newQuestions: getNewQuestions(polls, authedUser, users),
    done: getAnsweredQuestions(polls, authedUser, users),
  };
};

export default connect(mapStateToProps)(DashboardPage);
