import React from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";

const PollStatisticsComponent = ({ poll }) => {
  const getVotePercentageString = (answer) => {
    const totalVotes =
      poll.optionOne.votes.length + poll.optionTwo.votes.length;
    const percentage = parseFloat(
      (poll[answer].votes.length / totalVotes) * 100
    ).toFixed(2);
    return `Percentage of votes: ${percentage}%`;
  };
  return (
    <>
      <Container component="main" sx={{ padding: 8 }}>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h3">
            POLL STATISTICS
          </Typography>
          <Card sx={{ margin: 4, padding: 2 }}>
            <CardContent>
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginY: 2,
                }}
              >
                {poll.optionOne.text.toUpperCase()}
              </Typography>
              <Box
                sx={{
                  marginLeft: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{
                    marginY: 2,
                  }}
                >
                  {`Number of votes ${poll.optionOne.votes.length}`}
                </Typography>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{
                    marginY: 2,
                  }}
                >
                  {getVotePercentageString("optionOne")}
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ margin: 4, padding: 2 }}>
            <CardContent>
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginY: 2,
                }}
              >
                {poll.optionTwo.text.toUpperCase()}
              </Typography>
              <Box
                sx={{
                  marginLeft: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{
                    marginY: 2,
                  }}
                >
                  {`Number of votes ${poll.optionTwo.votes.length}`}
                </Typography>

                <Typography
                  component="h1"
                  variant="h5"
                  sx={{
                    marginY: 2,
                  }}
                >
                  {getVotePercentageString("optionTwo")}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <br />
      </Container>
    </>
  );
};

export default PollStatisticsComponent;
