import React from "react";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { connect } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { Question } from "../components/Question";

const PollPage = ({ polls, users, authedUser }) => {
  const { id } = useParams();
  const poll = polls[id];
  const author = users[poll?.author];

  return (
    <>
      {authedUser ? (
        <Container component="main" sx={{ padding: 8 }}>
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{
                marginTop: 8,
              }}
            >
              POLL BY {`${poll?.author}`.toUpperCase()}
            </Typography>
            <Avatar
              alt="User Avatar"
              src={`${process.env.PUBLIC_URL}${author?.avatarURL}`}
              sx={{ marginTop: 8, width: 384, height: 384 }}
            />
            <Typography
              component="h1"
              variant="h5"
              sx={{
                marginTop: 8,
              }}
            >
              WOULD YOU RATHER
            </Typography>

            <Box sx={{ marginTop: 4, flexGrow: 1 }}>
              <Grid container spacing={4}>
                <Grid key={poll?.optionOne?.text} item xs>
                  <Question question={poll?.optionOne?.text} />
                </Grid>
                <Grid key={poll?.optionTwo?.text} item xs>
                  <Question question={poll?.optionTwo?.text} />
                </Grid>
              </Grid>
            </Box>
          </Box>
          <br />
        </Container>
      ) : (
        <Navigate to="/login-page" />
      )}
    </>
  );
};

const mapStateToProps = ({ polls, users, authedUser }) => {
  return {
    authedUser,
    users,
    polls,
  };
};

export default connect(mapStateToProps)(PollPage);
