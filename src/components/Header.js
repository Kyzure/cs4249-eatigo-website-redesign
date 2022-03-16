import * as React from 'react';
import '../styles/Colors.scss';
import '../styles/Header.scss';
import EatigoIcon from "../assets/eatigo.png";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const Header = (props) => {
  // Functions

  // HTML
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
            <Box
              className='search-bar'
              component="form"
              noValidate
              autoComplete="off">
              <TextField
                className="search-bar"
                label="Try searching for a location, cuisine, or restaurant name!"
                type="search"
                size="small"
                variant="outlined">
              </TextField>
              <IconButton disableRipple={true} type="submit" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
              </IconButton>
            </Box>
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
