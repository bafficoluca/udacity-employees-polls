import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

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
    <>
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
      </Box>
      <br />
    </>
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
