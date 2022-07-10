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

const Poll = ({ poll, dataTestId }) => {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#3399ff" }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          data-testid={dataTestId}
        >
          {`${poll?.author}`.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${formatDate(poll?.timestamp)}`.toUpperCase()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/questions/${poll?.id}`}
          variant="outlined"
          size="large"
          fullWidth={true}
          sx={{ color: "#000000", backgroundColor: "#ffd11a" }}
        >
          SHOW
        </Button>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = ({ authedUser, users }, { poll }) => {
  return {
    authedUser,
    users,
    poll: formatPoll(poll, authedUser, users),
  };
};

export default connect(mapStateToProps)(Poll);
