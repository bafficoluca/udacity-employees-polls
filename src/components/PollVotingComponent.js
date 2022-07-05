import React from "react";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Question } from "../components/Question";

const PollVotingComponent = ({ polls, users, handleVoteForPoll }) => {
  const { question_id } = useParams();
  const poll = polls[question_id];
  const author = users[poll?.author];

  return (
    <Container component="main" sx={{ padding: 2 }}>
      <Box
        sx={{
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
          sx={{ marginTop: 4, width: 280, height: 280 }}
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
              <Question
                questionId={poll?.id}
                answer="optionOne"
                answerText={poll?.optionOne?.text}
                handleVoteForPoll={handleVoteForPoll}
              />
            </Grid>
            <Grid key={poll?.optionTwo?.text} item xs>
              <Question
                questionId={poll?.id}
                answer="optionTwo"
                answerText={poll?.optionTwo?.text}
                handleVoteForPoll={handleVoteForPoll}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <br />
    </Container>
  );
};

export default PollVotingComponent;
