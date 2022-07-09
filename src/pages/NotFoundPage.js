import { Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import sadComputer from "../assets/sad_computer.png";

const NotFoundPage = ({ authedUser }) => {
  return (
    <>
      {authedUser ? (
        <>
          <img
            src={sadComputer}
            alt="sad computer"
            style={{ marginTop: 80, width: 400, height: 400 }}
          />
          <Typography component="h1" variant="h3" sx={{ marginTop: 4 }}>
            OPS! NOT FOUND!
          </Typography>
        </>
      ) : (
        <Navigate to="/login-page" />
      )}
    </>
  );
};
const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NotFoundPage);
