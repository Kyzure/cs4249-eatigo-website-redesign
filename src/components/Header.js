import * as React from 'react';
import '../styles/Header.scss';
import EatigoIcon from "../assets/eatigo.png";
import SearchBar from "./SearchBar.js";

import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

function Header (props) {
  let navigate = useNavigate()
  function GetSearchBar() {
    if (props.searchbar) {
      return <SearchBar
        path={ props.path }
        resetsize={ props.resetsize }
        filters={ props.filters }
        breadcrumbs={ props.breadcrumbs }
        searchbar={ props.searchbar }
        styling={{ width: '70%', minWidth: '700px', margin: 'auto', justifyContent: 'center' }} 
        size="small"
        variant="outlined"/>;
    }
  }

  function ReturnToHome() {
    let ref = "/home?" + props.path
    navigate(ref)
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
              onClick={ ReturnToHome }
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
