import { Box, Container } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import LeaderboardTable from "../components/LeaderboardTable";

const LeaderboardPage = ({ authedUser, users }) => {
  return (
    <>
      {authedUser ? (
        <Container component="main" sx={{ padding: 8 }}>
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingX: 12,
            }}
          >
            <LeaderboardTable users={users} />
          </Box>
        </Container>
      ) : (
        <Navigate to="/login-page" />
      )}
    </>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(LeaderboardPage);
