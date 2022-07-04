import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { createNewQuestion } from "../actions/polls";
import { saveQuestion } from "../utils/api";

const PollCreationPage = ({ authedUser, dispatch }) => {
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  const handleSubmit = () => {
    saveQuestion({
      author: authedUser,
      optionOneText: optionOneText,
      optionTwoText: optionTwoText,
    }).then((newQuestion) => {
      dispatch(createNewQuestion(newQuestion));
      setOptionOneText("");
      setOptionTwoText("");
    });
  };

  return (
    <>
      {" "}
      {authedUser ? (
        <Container component="main" sx={{ padding: 8 }}>
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
              variant="h3"
              sx={{
                marginTop: 8,
              }}
            >
              WOULD YOU RATHER
            </Typography>

            <Typography
              component="h1"
              variant="h5"
              sx={{
                marginTop: 2,
                color: "#696969",
              }}
            >
              CREATE YOUR OWN POLL
            </Typography>

            <Box sx={{ marginTop: 4, width: 800 }}>
              <Grid container spacing={2} sx={{ width: 1 }}>
                <Grid key={"option-one"} item xs={6}>
                  <TextField
                    id="option-one"
                    label="OPTION ONE"
                    variant="outlined"
                    sx={{ width: 1 }}
                    onChange={(e) => {
                      setOptionOneText(e?.target?.value);
                    }}
                    value={optionOneText}
                  />
                </Grid>
                <Grid key={"option-two"} item xs={6}>
                  <TextField
                    id="option-two"
                    label="OPTION TWO"
                    variant="outlined"
                    sx={{ width: 1 }}
                    onChange={(e) => {
                      setOptionTwoText(e?.target?.value);
                    }}
                    value={optionTwoText}
                  />
                </Grid>
              </Grid>
              <Button
                id="submit"
                sx={{ marginTop: 4, width: 200 }}
                onClick={() => handleSubmit()}
                variant="contained"
              >
                SUBMIT
              </Button>
            </Box>
          </Box>
          <br />
        </Container>
      ) : (
        <Navigate to="/login-page" />
      )}
    </>
  );
};

const mapStateToProps = ({ polls, users, authedUser }) => {
  return {
    authedUser,
    users,
    polls,
  };
};

export default connect(mapStateToProps)(PollCreationPage);
