import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { formatPoll } from "../utils/helpers";

const Poll = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          USER NAME
        </Typography>
        <Typography variant="body2" color="text.secondary">
          TIMESTAMP
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="big">SHOW</Button>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = ({ authedUser, polls, users }, { id }) => {
  const poll = polls[id];

  return {
    authedUser,
    poll: formatPoll(poll, authedUser),
  };
};

export default connect(mapStateToProps)(Poll);
