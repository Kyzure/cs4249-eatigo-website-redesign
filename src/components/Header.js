import * as React from 'react';
import '../styles/Header.scss';
import EatigoIcon from "../assets/eatigo.png";
import SearchBar from "./SearchBar.js";

import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

function Header (props) {
  function GetSearchBar() {
    if (props.isRedesigned) {
      return <SearchBar
        styling={{ width: '70%', minWidth: '700px', margin: 'auto', justifyContent: 'center' }} 
        size="small"
        variant="outlined"/>;
    }
  }
  
  return (
    <AppBar
      position="fixed"
      color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
            <Button
              disableRipple={true}
              variant="dense"
              href="/"
              size="small"
              className="eatigo-homepage">
              <img className="eatigo-icon" src={EatigoIcon} alt="Eatigo Homepage"/>
            </Button>
            { GetSearchBar() }
            <Box sx={{ 'display': 'flex'}}>
              <Divider orientation="vertical" />
              <Button disableRipple={true}>
                Singapore
              </Button>
              <Divider orientation="vertical" />
              <Button disableRipple={true}>
                  Login
              </Button>
              <Divider orientation="vertical" />
              <Button  disableRipple={true}>
                  register
              </Button>
              <Divider orientation="vertical" />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
