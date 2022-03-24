import * as React from 'react';
import Button from '@mui/material/Button';

import {useNavigate} from 'react-router-dom';

function ResultCard(props) {
  
  
  function clickCard() {
    if (props.searchType === "steakhouse") {
      console.log("steakhouse")
    } else if (props.searchType === "noodles") {
      console.log("noodles")
    } else if (props.searchType === "ramen") {
      console.log("ramen")
    }
  }

  return (
    <Button 
      sx={{ width: '100%', height: '100%s', maxHeight: '100%'}}
      disableRipple={true}
      variant="dense"
      onClick={ clickCard }>
        <img style={{ width: '100%', height: '100%' }} src={ props.picture } alt="pic"/>
    </Button>
  );
}

export default ResultCard;
