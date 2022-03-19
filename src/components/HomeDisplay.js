import * as React from 'react';
import '../styles/Home.scss';
import Food from '../assets/food-background.jpg'
import SearchBar from './SearchBar.js'

import Box from '@mui/material/Box';
import EatigoTitle from '../assets/eatigo-home-title.svg';

function HomeDisplay(props) {
  return (
    <div style={{ backgroundImage: `url(${Food})` }} className="background-image">
      <Box className="eatigo-title">
        <img src={ EatigoTitle } alt="Eatigo Title"/>
        <SearchBar
          isRedesigned={ props.isRedesigned }
          styling={{ width: '50%', minWidth: '300px', margin: 'auto', justifyContent: 'center' }} 
          size="large"
          variant="filled"/>
      </Box>
    </div>
  );
}

export default HomeDisplay;
