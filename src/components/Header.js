import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { FaCartPlus } from 'react-icons/fa';

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
          <FaCartPlus />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} data-testid="shopping-list-header" >
          Shopping List
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
