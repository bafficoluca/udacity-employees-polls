import React from "react";
import {
  Avatar,
  Box,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Question } from "../components/Question";

const PollPage = ({ authedUser, polls, users }) => {
  const { id } = useParams();
  const poll = polls[id];
  const author = users[poll?.author];

  console.log("ID", id);
  console.log("POLLS", polls);
  console.log("AUTHOR", author);
  console.log("AVATAR", author?.avatarURL);
  console.log("POLL", poll);

  return (
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
  );
};

const mapStateToProps = ({ authedUser, polls, users }) => {
  return {
    authedUser,
    users,
    polls,
  };
};

export default connect(mapStateToProps)(PollPage);
