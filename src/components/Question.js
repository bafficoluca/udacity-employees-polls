import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import React from "react";

export const Question = ({ question }) => {
  return (
    <Card sx={{ width: 450, height: 150, margin: 4 }}>
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {`${question}`.toUpperCase()}
        </Typography>
        <CardActions>
          <Button variant="outlined" size="large" fullWidth={true}>
            VOTE
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
