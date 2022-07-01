import React from "react";

import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { setAuthedUser } from "../actions/authedUser";

export const UsersSelect = ({ dispatch, users, authedUser }) => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    dispatch(setAuthedUser(event.target.value));
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <Box sx={{ minWidth: 120, margin: 4 }}>
      <FormControl fullWidth>
        <InputLabel id="users-select-label">Log in as...</InputLabel>
        <Select
          labelId="users-select-label"
          id="users-select"
          value={authedUser ?? ""}
          label="Log in as..."
          onChange={handleChange}
          sx={{ width: 400 }}
        >
          {Object.entries(users)?.map((user) => (
            <MenuItem key={user[1]?.id} value={user[1]?.id}>
              {user[1]?.id}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
