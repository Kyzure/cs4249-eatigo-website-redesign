import * as React from 'react';

import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

const locationFilters = ["Admiralty", "Alexandra Road", "Aljunied", "Ang Mo Kio", "Balestier", "Beach Road", "Bedok", "Bedok North", "Bishan", "Boat Quay", "Botanic Gardens", "Bugis", "Bukit Batok", "Bukit Panjang", "Bukit Timah", "Buona Vista", "Changi", "Chinatown", "Circular Road", "City Hall", "Clarke Quay", "Clementi", "Dempsey", "Dhoby Ghaut", "Duxton Road", "East Coast", "Esplanade", "Farrer Park", "Geylang", "Harbourfront", "Havelock Road", "Hillview", "Holland Village (Road)", "Hougang", "Jalan Besar", "Jalan Kayu", "Joo Koon", "Jurong", "Jurong East", "Jurong West", "Kallang", "Katong", "Kim Seng", "Kovan", "Labrador Park", "Lavender", "Little India", "Macpherson", "Marina Bay", "Marina Square", "Middle Road", "Novena", "One North", "Orchard", "Outram Road", "Pasir Panjang", "Pasir Panjang Road", "Pasir Ris", "Paya Lebar", "Punggol", "Queenstown", "Raffles Place", "River Valley", "Robertson Quay", "Rochor", "Sengkang", "Sentosa", "Serangoon", "Somerset", "Suntec", "Tai Seng", "Tampines", "Tanjong Katong", "Tanjong Pagar", "Telok Ayer", "Thomson", "Tiong Bahru", "Toa Payoh", "Upper Serangoon", "Upper Thomson", "Woodlands", "Yishun"];

let locationObject = {"Admiralty": false, "Alexandra Road": false, "Aljunied": false, "Ang Mo Kio": false, "Balestier": false, "Beach Road": false, "Bedok": false, "Bedok North": false, "Bishan": false, "Boat Quay": false, "Botanic Gardens": false, "Bugis": false, "Bukit Batok": false, "Bukit Panjang": false, "Bukit Timah": false, "Buona Vista": false, "Changi": false, "Chinatown": false, "Circular Road": false, "City Hall": false, "Clarke Quay": false, "Clementi": false, "Dempsey": false, "Dhoby Ghaut": false, "Duxton Road": false, "East Coast": false, "Esplanade": false, "Farrer Park": false, "Geylang": false, "Harbourfront": false, "Havelock Road": false, "Hillview": false, "Holland Village (Road)": false, "Hougang": false, "Jalan Besar": false, "Jalan Kayu": false, "Joo Koon": false, "Jurong": false, "Jurong East": false, "Jurong West": false, "Kallang": false, "Katong": false, "Kim Seng": false, "Kovan": false, "Labrador Park": false, "Lavender": false, "Little India": false, "Macpherson": false, "Marina Bay": false, "Marina Square": false, "Middle Road": false, "Novena": false, "One North": false, "Orchard": false, "Outram Road": false, "Pasir Panjang": false, "Pasir Panjang Road": false, "Pasir Ris": false, "Paya Lebar": false, "Punggol": false, "Queenstown": false, "Raffles Place": false, "River Valley": false, "Robertson Quay": false, "Rochor": false, "Sengkang": false, "Sentosa": false, "Serangoon": false, "Somerset": false, "Suntec": false, "Tai Seng": false, "Tampines": false, "Tanjong Katong": false, "Tanjong Pagar": false, "Telok Ayer": false, "Thomson": false, "Tiong Bahru": false, "Toa Payoh": false, "Upper Serangoon": false, "Upper Thomson": false, "Woodlands": false, "Yishun": false}

const cuisineFilters = ["Afternoon Tea", "American", "Arabic", "Asian", "Asian (Others)", "Asian Fusion", "Australian", "BBQ / Barbecue", "Bakery / Cafe", "Breakfast", "British", "Bubble Tea", "Buffet", "Burgers", "Cantonese", "Chicken", "Chicken Wings", "Chinese", "Contemporary", "Crab", "Dessert", "Dim Sum", "European", "Fast Food", "Fish & Chips", "French", "Fusion", "Global Fusion", "Green / Healthy", "Grill", "Halal", "Hot Pot / Steam Boat / Shabu", "Ice Cream", "Imperial Chinese", "Indian", "Indonesian", "International", "Italian", "Japanese", "Juice / Smoothies", "Korean", "Lobster", "Malaysian", "Mediterranean", "Mexican", "Middle Eastern", "Modern Indian", "Modernist European", "Noodles", "Northern Thai", "Pasta", "Peking Duck", "Pizza", "Pubs / Bars", "Ramen", "Rice", "Salad", "Sandwiches / Baguettes / Bagels", "Seafood", "Singaporean", "Soups", "South Indian", "Spanish", "Steak", "Steakhouse", "Street Food", "Sukiyaki", "Sushi", "Szechuan / Sichuan", "Taiwanese", "Tandoori Chicken", "Tapas (Small Plates)", "Thai", "Turkish", "Vegan", "Vegetarian", "Vietnamese", "Waffles & Crepes", "Western", "Wine Bar", "Yakiniku (Japanese BBQ)"];

let cuisineObject = {"Afternoon Tea": false,"American": false,"Arabic": false,"Asian": false,"Asian (Others)": false,"Asian Fusion": false,"Australian": false,"BBQ / Barbecue": false,"Bakery / Cafe": false,"Breakfast": false,"British": false,"Bubble Tea": false,"Buffet": false,"Burgers": false,"Cantonese": false,"Chicken": false,"Chicken Wings": false,"Chinese": false,"Contemporary": false,"Crab": false,"Dessert": false,"Dim Sum": false,"European": false,"Fast Food": false,"Fish & Chips": false,"French": false,"Fusion": false,"Global Fusion": false,"Green / Healthy": false,"Grill": false,"Halal": false,"Hot Pot / Steam Boat / Shabu": false,"Ice Cream": false,"Imperial Chinese": false,"Indian": false,"Indonesian": false,"International": false,"Italian": false,"Japanese": false,"Juice / Smoothies": false,"Korean": false,"Lobster": false,"Malaysian": false,"Mediterranean": false,"Mexican": false,"Middle Eastern": false,"Modern Indian": false,"Modernist European": false,"Noodles": false,"Northern Thai": false,"Pasta": false,"Peking Duck": false,"Pizza": false,"Pubs / Bars": false,"Ramen": false,"Rice": false,"Salad": false,"Sandwiches / Baguettes / Bagels": false,"Seafood": false,"Singaporean": false,"Soups": false,"South Indian": false,"Spanish": false,"Steak": false,"Steakhouse": false,"Street Food": false,"Sukiyaki": false,"Sushi": false,"Szechuan / Sichuan": false,"Taiwanese": false,"Tandoori Chicken": false,"Tapas (Small Plates)": false,"Thai": false,"Turkish": false,"Vegan": false,"Vegetarian": false,"Vietnamese": false,"Waffles & Crepes": false,"Western": false,"Wine Bar": false,"Yakiniku (Japanese BBQ)": false}

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

function ResultFilters(props) {
  const [checklist, setChecklist] = useState(locationObject);
  const [cuisineChecklist, setCuisineChecklist] = useState(cuisineObject);

  function reset() {
    setChecklist(locationObject)
    setCuisineChecklist(cuisineObject)
    props.setFilterSelected(false);
  }

  function changeSelectedLocation(e, filters) {
    setChecklist(prevState => {
      let a = ({
        ...prevState
      })
      a[filters] = !a[filters]
      return a
    })
    if (filters === "Telok Ayer" && props.searchType === "ramen") {
      props.setFilterSelected(e.target.checked);
    } else if (filters === "Serangoon" && props.searchType === "noodles") {
      props.setFilterSelected(e.target.checked);
    }
  }

  function changeSelectedCuisine(e, filters) {
    setCuisineChecklist(prevState => {
      let a = ({
        ...prevState
      })
      a[filters] = !a[filters]
      return a
    })
  }

  let locations = locationFilters.map((filters) => 
    <FormControlLabel 
      key={filters}
      control={
        <Checkbox
          onChange={ (e) => changeSelectedLocation(e, filters) } 
          value={ checklist[filters] }
          checked={ checklist[filters] }/>} 
      label={ filters }/>
  );

  let cuisine = cuisineFilters.map((filters) => 
    <FormControlLabel
      key={filters}
      control={
        <Checkbox
          onChange={ (e) => changeSelectedCuisine(e, filters) } 
          value={ cuisineChecklist[filters] }
          checked={ cuisineChecklist[filters] }/>} 
      label={ filters } />
  );

  let [searchLocation, setSearchLocation] = useState("");
  let [searchCuisine, setSearchCuisine] = useState("");

  let locationNew = locationFilters.map((filters) => {
    let val = searchLocation === filters || searchLocation === "" || filters.toLowerCase().includes(searchLocation.toLowerCase())
    if (val) {
      return <FormControlLabel key={filters} label={ filters } control={
          <Checkbox
            onChange={ (e) => changeSelectedLocation(e, filters) } 
            value={ checklist[filters] }
            checked={ setChecklist[filters] }/>}/>
    }
    return <></>
  });

  let cuisineNew = cuisineFilters.map((filters) => {
    let val = searchCuisine === filters || searchCuisine === "" || filters.toLowerCase().includes(searchCuisine.toLowerCase())
    if (val) {
      return <FormControlLabel key={filters} label={ filters } control={
          <Checkbox
            onChange={ (e) => changeSelectedCuisine(e, filters) } 
            value={ cuisineChecklist[filters] }
            checked={ cuisineChecklist[filters] }/>}/>
    }
    return <></>
  });

  if (props.filters) {
    return (
      <Stack direction="column" spacing={'20px'} sx={{ padding: '10px 10px 10px 10px', backgroundColor: "#FFFFFF" }}>
        <Stack justifyContent="space-between" direction="row">
          <Typography variant="h5" display="inline" sx={{ "font-weight": "bold" }}>
            Filters
          </Typography>
          <Button size={ props.resetsize.toString() } color="primary" variant="outlined" onClick={ reset }>
            Reset
          </Button>
        </Stack>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="location">
            <Typography variant="h6" display="inline">
              Location
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextFieldStyled
                sx={{ width: "100%" }}
                label="Search for a filter"
                type="search"
                size="small"
                value={ searchLocation }
                onChange={ (e) => { setSearchLocation(e.target.value) } }
                InputProps={{
                  endAdornment: 
                    <InputAdornment position="end">
                      <IconButtonStyled
                        disableRipple={true}
                        aria-label="Search"
                        label="Search">
                          <SearchIcon />
                      </IconButtonStyled>
                    </InputAdornment>
                }}/>
              <FormGroup>
                { locationNew }
              </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="cuisine">
            <Typography variant="h6" display="inline">
              Cuisine
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextFieldStyled
              sx={{ width: "100%" }}
              label="Search for a filter"
              type="search"
              size="small"
              value={ searchCuisine }
              onChange={ (e) => { setSearchCuisine(e.target.value) } }
              InputProps={{
                endAdornment: 
                  <InputAdornment position="end">
                    <IconButtonStyled
                      disableRipple={true}
                      aria-label="Search"
                      label="Search">
                        <SearchIcon />
                    </IconButtonStyled>
                  </InputAdornment>
              }}/>
            <FormGroup>
              { cuisineNew }
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </Stack>
    );
  }

  return (
    <Stack direction="column" spacing={'20px'} sx={{ padding: '10px 10px 10px 10px', backgroundColor: "#FFFFFF" }}>
      <Stack justifyContent="space-between" direction="row">
        <Typography variant="h6" display="inline">
          Filters
        </Typography>
        <Button size={ props.resetsize.toString() } color="primary" variant="outlined" onClick={ reset }>
          Reset
        </Button>
      </Stack>
      <Divider orientation="horizontal" />
      <Typography variant="h6" display="inline">
        Location
      </Typography>
      <FormGroup>
        { locations }
      </FormGroup>
      <Divider orientation="horizontal" />
      <Typography variant="h6" display="inline">
        Cuisine
      </Typography>
      <FormGroup>
        { cuisine }
      </FormGroup>
    </Stack>
  );
}

export default ResultFilters;
