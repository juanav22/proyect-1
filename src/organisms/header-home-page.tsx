
import React from 'react';

import { AppBar, Toolbar, Typography, IconButton, InputBase, Badge } from '@mui/material';

import { Search, ShoppingCart, AccountCircle } from '@mui/icons-material';


import '../styles/app.scss';

function Header () {

  return (

    <div className="header">
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" className="logo">
            Mi Tienda Online
          </Typography>
          <div className="search">
            <div className="searchIcon">
              <Search />
            </div>
            <InputBase placeholder="Buscar productos..." className="inputBase" />
          </div>
          <div className="actions">
            <IconButton color="inherit">
              <Badge badgeContent={5} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
