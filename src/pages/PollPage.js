import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

export const PollPage = () => {
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
          POLL BY
        </Typography>
        <Avatar
          alt="User Avatar"
          src=""
          sx={{ marginTop: 8, width: 384, height: 384 }}
        />
      </Box>
      <br />
    </>
  );
};
