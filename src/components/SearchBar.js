import * as React from 'react';
import '../styles/Home.scss';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  '& label.Mui-focused': {
    color: theme.palette.text.secondary,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.secondary,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.secondary,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.secondary,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary,
    },
  },
}));

const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  "&:hover, &.Mui-focusVisible": {
    backgroundColor: theme.palette.secondary
  }
}));

function HomeDisplay(props) {
  const [searchValue, setSearchValue] = React.useState("");
  const navigate = useNavigate();

  function searchFunc(e) {
    let path = "/result?" + props.path + "&"
    let lower = searchValue.toLowerCase()
    let val = searchValue
    if (lower === "steakhouse" || lower === "noodles" || lower === "ramen" || lower === "malaysian" || lower === "burgers" || lower === "mediterranean") {
      val = "search=" + lower
    } else {
      e.preventDefault();
      return
    }
    path += val
    return navigate(path);
  }

  const setSearchValueFunc = (e) => {
    setSearchValue(e.target.value);
  }
  
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={ searchFunc }>
      <TextFieldStyled
        sx={ props.styling }
        label="Try searching for a location, cuisine, or restaurant name!"
        type="search"
        size={ props.size }
        variant={ props.variant }
        value={ searchValue }
        onChange={ setSearchValueFunc }
        InputProps={{
          endAdornment: 
            <InputAdornment position="end">
              <IconButtonStyled
                type="submit"
                disableRipple={true}
                aria-label="Search"
                onClick={ searchFunc }
                label="Search">
                  <SearchIcon />
              </IconButtonStyled>
            </InputAdornment>
        }}/>
    </Box>
  );
}

export default HomeDisplay;
