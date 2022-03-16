import * as React from 'react';
import '../styles/App.scss';
import '../styles/Colors.scss';
import Food from '../assets/food-background.jpg'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import Box from '@mui/material/Box';
import Header from '../components/Header.js';
import EatigoTitle from '../assets/eatigo-home-title.svg';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EE2C30'
    },
    secondary: {
      light: '#FFFFFF',
      main: '#FAFAFA',
      dark: '#E2E2E2'
    },
    tertiary: {
      main: '#333333'
    },
    text: {
      main: '#333333'
    }
  }
});

function App() {
   
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline enableColorScheme={true}>
        <div>
          <Header />
        </div>
        <div style={{ backgroundImage: `url(${Food})` }} className="background-image">
          <Box className="eatigo-title">
            <img src={ EatigoTitle } alt="Eatigo Title"/>
            <Box
              className="main-search-bar"
              component="form"
              noValidate
              autoComplete="off">
              <TextField
                className="main-search-bar secondary-background-color"
                label="Try searching for a location, cuisine, or restaurant name!"
                type="search"
                size="large"
                variant="filled">
              </TextField>
              <IconButton 
                className="secondary-background-color"
                disableRipple={true}
                type="submit"
                size="large"
                sx={{ p: '15px', 'borderRadius': '0', 'background-color': '#FAFAFA'}}
                aria-label="search">
                  <SearchIcon size="large"/>
              </IconButton>
            </Box>
          </Box>
        </div>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}

export default App;
