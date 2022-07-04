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

const ResponsiveAppBar = ({ userAvatar, logout }) => {
  const navigate = useNavigate();

  const gotToPage = (pagePath) => {
    navigate(pagePath);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
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

          <Box sx={{ flexGrow: 0 }}>
            <Avatar
              alt="Remy Sharp"
              src={`${process.env.PUBLIC_URL}${userAvatar}`}
            />
          </Box>
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
