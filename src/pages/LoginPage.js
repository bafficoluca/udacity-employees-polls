import React from "react";

import { connect } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import { Link as MaterialLink } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import people from "../assets/people.png";
import { UsersSelect } from "../components/UsersSelect";

const theme = createTheme();

const LoginPage = ({ authedUser, users, dispatch }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Login icon"
            src={people}
            sx={{ width: 384, height: 384 }}
          />
          <Typography component="h1" variant="h3" sx={{ marginTop: 2 }}>
            Log in
          </Typography>
          <UsersSelect
            users={users}
            role="select"
            dispatch={dispatch}
            authedUser={authedUser}
          />
        </Box>
        <Typography variant="body2" color="text.secondary" align="center">
          {"'People' icon attribution:' "}
          <MaterialLink
            color="inherit"
            href="https://www.flaticon.com/premium-icon/people_1921935?term=people&page=1&position=13&page=1&position=13&related_id=1921935&origin=tag#"
            target="_blank"
          >
            Flat Icons
          </MaterialLink>
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users,
});

export default connect(mapStateToProps)(LoginPage);
