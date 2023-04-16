import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className="header" >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <FaBars />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Shopping List
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
