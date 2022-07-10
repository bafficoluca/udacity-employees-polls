import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";

const pages = [
  { label: "Home", path: "/" },
  { label: "Leaderboard", path: "/leaderboard" },
  { label: "New", path: "/add" },
];

const ResponsiveAppBar = ({ user, logout }) => {
  const navigate = useNavigate();

  const gotToPage = (pagePath) => {
    navigate(pagePath);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => gotToPage(page.path)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
          {user?.name && (
            <Typography sx={{ marginRight: 2 }} data-testid="user-name-label">
              {user?.name.toUpperCase()}
            </Typography>
          )}
          <Avatar
            alt="Remy Sharp"
            src={`${process.env.PUBLIC_URL}${user?.avatarURL}`}
          />
          <Box
            sx={{
              flexGrow: 0,
              marginLeft: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              onClick={logout}
              sx={{ my: 2, color: "white", display: "block" }}
              data-testid="logout-button"
            >
              LOGOUT
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
