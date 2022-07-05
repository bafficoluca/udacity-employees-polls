import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import React from "react";

export const Question = ({
  questionId,
  answer,
  answerText,
  handleVoteForPoll,
}) => {
  const onClick = () => {
    handleVoteForPoll(questionId, answer);
  };

  return (
    <Card
      sx={{ width: 450, height: 180, margin: 4, backgroundColor: "#3399ff" }}
    >
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {`${answerText}`.toUpperCase()}
        </Typography>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            fullWidth={true}
            onClick={onClick}
            sx={{ color: "#000000", backgroundColor: "#ffd11a" }}
          >
            VOTE
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
