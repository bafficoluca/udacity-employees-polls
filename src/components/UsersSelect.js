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
    navigate("/");
  };

  return (
    <Box sx={{ minWidth: 120, margin: 4 }}>
      <FormControl fullWidth>
        <InputLabel id="users-select-label">Log in as...</InputLabel>
        <Select
          data-testid="users-select"
          labelId="users-select-label"
          id="users-select"
          value={authedUser ?? ""}
          label="Log in as..."
          onChange={handleChange}
          sx={{ width: 400 }}
        >
          {Object.entries(users)?.map((user) => (
            <MenuItem
              key={user[1]?.id}
              value={user[1]?.id}
              data-testid={user[1]?.name}
            >
              {user[1]?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
