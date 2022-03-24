import * as React from 'react';
import Button from '@mui/material/Button';

import {useNavigate} from 'react-router-dom';

function ResultCard(props) {
  const navigate = useNavigate();
  
  function clickCard(e) {
    console.log(props.path)
    if (props.searchType == null) {
      e.preventDefault();
      return 
    }
    let path = "/food?" + props.path + "&search=" + props.searchType
    return navigate(path);
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
