import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import PublicIcon from "@mui/icons-material/Public";

import { NavLink } from "react-router-dom";
import { Divider, MenuItem } from "@mui/material";

function ResponsiveAppBar() {
  //sets dropdown
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ background: "gray" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PublicIcon
            sx={{
              display: { xs: "none", md: "flex", marginLeft: "4%" },
              mr: 1,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Ger-Eng
          </Typography>

          {/* dropdown menu controller */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* dropdown Menu starts from here */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <NavLink to="/" className="menu-item">
                <MenuItem key="home" onClick={handleCloseNavMenu}>
                  Home
                </MenuItem>
              </NavLink>
              <Divider />
              <NavLink to="/flashcards" className="menu-item">
                <MenuItem key="flashcards" onClick={handleCloseNavMenu}>
                  Flash Cards
                </MenuItem>
              </NavLink>
              <Divider />
              <NavLink to="/questions" className="menu-item">
                <MenuItem key="questions" onClick={handleCloseNavMenu}>
                  Questions
                </MenuItem>
              </NavLink>
            </Menu>
          </Box>
          {/* dropdown Menu finishes here */}
          <PublicIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
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
            Ger-Eng
          </Typography>
          {/* md size screen navbar starts */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
              marginRight: "5%",
            }}
          >
            <NavLink to="/" className="menu-item">
              <Button
                key="Home"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  marginRight: "30px",
                }}
              >
                Home
              </Button>
            </NavLink>

            <NavLink to="/flashcards" className="menu-item">
              <Button
                key="FlashCards"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  marginRight: "30px",
                }}
              >
                FlashCards
              </Button>
            </NavLink>

            <NavLink to="/questions" className="menu-item">
              <Button
                key="Questions"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  marginRight: "30px",
                }}
              >
                Questions
              </Button>
            </NavLink>
          </Box>
          {/* md size screen navbar finishes */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
