import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Stack,Grid} from '@mui/material';
import { NavLink } from "react-router-dom";

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar({}) { 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:"gray"}}>
        <Toolbar>
          <Typography variant="h6" component="div" mr="auto">
            GER-ENG
          </Typography>
          {/* <Button color="inherit"></Button> */}
        <Stack sx={{ marginRight:"10vw" }} direction="row" spacing={5}>
          <NavLink to="/" className="nav-link appBar">Home</NavLink>
          <NavLink to="/flashcards" className="nav-link appBar">Flash Cards</NavLink>
          <NavLink to="/questions" className="nav-link appBar">Questions</NavLink>
        </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}