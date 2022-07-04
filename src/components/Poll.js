import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import { formatPoll, formatDate } from "../utils/helpers";

const Poll = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${props?.poll?.author}`.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${formatDate(props?.poll?.timestamp)}`.toUpperCase()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/questions/${props?.poll?.id}`}
          variant="outlined"
          size="large"
          fullWidth={true}
        >
          SHOW
        </Button>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = ({ authedUser, polls, users }, { id }) => {
  console.log("question_id", id);
  const poll = polls[id];

  return {
    authedUser,
    users,
    poll: formatPoll(poll, authedUser, users),
  };
};

export default connect(mapStateToProps)(Poll);
