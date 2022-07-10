import React from "react";

import { Navigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";

export const RequiredAuth = ({ authedUser, children }) => {
  const authed = !!authedUser;
  const location = useLocation();

  return authed === true ? (
    children
  ) : (
    <Navigate to="/login-page" replace state={{ path: location.pathname }} />
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(RequiredAuth);
