import * as React from 'react';
import ViewMap from '../../assets/ViewMap.png';
import ResultFilters from './ResultFilters.js';
import ResultCardList from './ResultCardList.js';
import BreadCrumbs from '../BreadCrumbs.js';

import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


const TextFieldStyled = styled(TextField)(({ theme }) => ({
  width: '500px',
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


function ResultDisplay(props) {
  const [isFilterSelected, setFilterSelected] = React.useState(false);

  return (
    <Box style={{ 'padding': '100px 250px 100px 250px' }}>
      <Stack direction="column" spacing={'30px'}>
        <Stack direction="row" sx={{ height: '135px', padding: '40px 20px 40px 20px', backgroundColor: "#FFFFFF" }} spacing={'30px'}>
          <TextFieldStyled
            sx={ props.styling }
            label="Food Name Here"
            type="search"
            size="medium"
            variant="outlined"/>
          <Button sx={{ width: '300px' }} color="tertiary" variant="outlined" startIcon={ <CalendarMonthIcon /> } endIcon={ <ArrowDropDownIcon/> }>
            today
          </Button>
          <Button sx={{ width: '250px' }} color="tertiary" variant="outlined" startIcon={ <PeopleAltIcon/> } endIcon={ <ArrowDropDownIcon/> }>
            2 people
          </Button>
          <Button sx={{ width: '200px' }} color="tertiary" variant="outlined" startIcon={ <AccessTimeIcon/> } endIcon={ <ArrowDropDownIcon/> }>
            13:30
          </Button>
          <Button sx={{ width: '200px' }} color="primary" variant="contained">
            Search
          </Button>
        </Stack>
        <Box sx={{ padding: "0px 0px 0px 20px" }}>
          <BreadCrumbs path={props.path} page="Result" />
        </Box>
        <Stack direction="row" spacing={'30px'}>
          <Stack direction="column" sx={{ width: '30%' }} spacing={ '30px' }>
            <Button
              disableRipple={true}
              variant="dense"
              className="eatigo-homepage">
              <img style={{ width: '100%', height: '100%' }} src={ ViewMap } alt="View Map"/>
            </Button>
            <ResultFilters 
              searchType={ props.search }
              resetsize={ props.resetsize }
              isFilterSelected={ isFilterSelected }
              setFilterSelected={ setFilterSelected } />
          </Stack>
          <ResultCardList
            searchType={ props.search }
            isFilterSelected={ isFilterSelected } />
        </Stack>
      </Stack>
    </Box>
  );
}

export default ResultDisplay;
