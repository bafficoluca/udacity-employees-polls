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
    <Card sx={{ width: 450, height: 150, margin: 4 }}>
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {`${answerText}`.toUpperCase()}
        </Typography>
        <CardActions>
          <Button
            variant="outlined"
            size="large"
            fullWidth={true}
            onClick={onClick}
          >
            VOTE
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
