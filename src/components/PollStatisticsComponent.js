import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";

const COLOR_ONE = "#FF6600";
const COLOR_TWO = "#00C49F";

const PollStatisticsComponent = ({ poll }) => {
  const [pollData, setPollData] = useState([]);

  const getVotePercentageString = (answer) => {
    const totalVotes =
      poll.optionOne.votes.length + poll.optionTwo.votes.length;
    const percentage = parseFloat(
      (poll[answer].votes.length / totalVotes) * 100
    ).toFixed(2);
    return `VOTES PERCENTAGE: ${percentage}%`;
  };

  useEffect(() => {
    setPollData([
      {
        name: "OPTION ONE",
        votes: poll?.optionOne?.votes?.length,
      },
      {
        name: "OPTION TWO",
        votes: poll?.optionTwo?.votes?.length,
      },
    ]);
  }, [poll]);

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
          <ResponsiveContainer width={350} height={350}>
            <PieChart width="100%" height="100%">
              <Pie
                data={pollData}
                dataKey="votes"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
              >
                <Cell key={"option-one"} fill={COLOR_ONE} />
                <Cell key={"option-two"} fill={COLOR_TWO} />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Card sx={{ margin: 4, padding: 2 }}>
              <CardContent>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{
                    marginY: 2,
                    color: COLOR_ONE,
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
                    {`NUMBER OF VOTES: ${poll.optionOne.votes.length}`}
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
                    color: COLOR_TWO,
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
                    {`NUMBER OF VOTES: ${poll.optionTwo.votes.length}`}
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
        </Box>
        <br />
      </Container>
    </>
  );
};

export default PollStatisticsComponent;
