import * as React from 'react';

import { useState, useReducer } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const locationFilters = ["Admiralty", "Alexandra Road", "Aljunied", "Ang Mo Kio", "Balestier", "Beach Road", "Bedok", "Bedok North", "Bishan", "Boat Quay", "Botanic Gardens", "Bugis", "Bukit Batok", "Bukit Panjang", "Bukit Timah", "Buona Vista", "Changi", "Chinatown", "Circular Road", "City Hall", "Clarke Quay", "Clementi", "Dempsey", "Dhoby Ghaut", "Duxton Road", "East Coast", "Esplanade", "Farrer Park", "Geylang", "Harbourfront", "Havelock Road", "Hillview", "Holland Village (Road)", "Hougang", "Jalan Besar", "Jalan Kayu", "Joo Koon", "Jurong", "Jurong East", "Jurong West", "Kallang", "Katong", "Kim Seng", "Kovan", "Labrador Park", "Lavender", "Little India", "Macpherson", "Marina Bay", "Marina Square", "Middle Road", "Novena", "One North", "Orchard", "Outram Road", "Pasir Panjang", "Pasir Panjang Road", "Pasir Ris", "Paya Lebar", "Punggol", "Queenstown", "Raffles Place", "River Valley", "Robertson Quay", "Rochor", "Sengkang", "Sentosa", "Serangoon", "Somerset", "Suntec", "Tai Seng", "Tampines", "Tanjong Katong", "Tanjong Pagar", "Telok Ayer", "Thomson", "Tiong Bahru", "Toa Payoh", "Upper Serangoon", "Upper Thomson", "Woodlands", "Yishun"];

let locationChecklist = {"Admiralty": false, "Alexandra Road": false, "Aljunied": false, "Ang Mo Kio": false, "Balestier": false, "Beach Road": false, "Bedok": false, "Bedok North": false, "Bishan": false, "Boat Quay": false, "Botanic Gardens": false, "Bugis": false, "Bukit Batok": false, "Bukit Panjang": false, "Bukit Timah": false, "Buona Vista": false, "Changi": false, "Chinatown": false, "Circular Road": false, "City Hall": false, "Clarke Quay": false, "Clementi": false, "Dempsey": false, "Dhoby Ghaut": false, "Duxton Road": false, "East Coast": false, "Esplanade": false, "Farrer Park": false, "Geylang": false, "Harbourfront": false, "Havelock Road": false, "Hillview": false, "Holland Village (Road)": false, "Hougang": false, "Jalan Besar": false, "Jalan Kayu": false, "Joo Koon": false, "Jurong": false, "Jurong East": false, "Jurong West": false, "Kallang": false, "Katong": false, "Kim Seng": false, "Kovan": false, "Labrador Park": false, "Lavender": false, "Little India": false, "Macpherson": false, "Marina Bay": false, "Marina Square": false, "Middle Road": false, "Novena": false, "One North": false, "Orchard": false, "Outram Road": false, "Pasir Panjang": false, "Pasir Panjang Road": false, "Pasir Ris": false, "Paya Lebar": false, "Punggol": false, "Queenstown": false, "Raffles Place": false, "River Valley": false, "Robertson Quay": false, "Rochor": false, "Sengkang": false, "Sentosa": false, "Serangoon": false, "Somerset": false, "Suntec": false, "Tai Seng": false, "Tampines": false, "Tanjong Katong": false, "Tanjong Pagar": false, "Telok Ayer": false, "Thomson": false, "Tiong Bahru": false, "Toa Payoh": false, "Upper Serangoon": false, "Upper Thomson": false, "Woodlands": false, "Yishun": false}

const cuisineFilters = ["Afternoon Tea", "American", "Arabic", "Asian", "Asian (Others)", "Asian Fusion", "Australian", "BBQ / Barbecue", "Bakery / Cafe", "Breakfast", "British", "Bubble Tea", "Buffet", "Burgers", "Cantonese", "Chicken", "Chicken Wings", "Chinese", "Contemporary", "Crab", "Dessert", "Dim Sum", "European", "Fast Food", "Fish & Chips", "French", "Fusion", "Global Fusion", "Green / Healthy", "Grill", "Halal", "Hot Pot / Steam Boat / Shabu", "Ice Cream", "Imperial Chinese", "Indian", "Indonesian", "International", "Italian", "Japanese", "Juice / Smoothies", "Korean", "Lobster", "Malaysian", "Mediterranean", "Mexican", "Middle Eastern", "Modern Indian", "Modernist European", "Noodles", "Northern Thai", "Pasta", "Peking Duck", "Pizza", "Pubs / Bars", "Ramen", "Rice", "Salad", "Sandwiches / Baguettes / Bagels", "Seafood", "Singaporean", "Soups", "South Indian", "Spanish", "Steak", "Steakhouse", "Street Food", "Sukiyaki", "Sushi", "Szechuan / Sichuan", "Taiwanese", "Tandoori Chicken", "Tapas (Small Plates)", "Thai", "Turkish", "Vegan", "Vegetarian", "Vietnamese", "Waffles & Crepes", "Western", "Wine Bar", "Yakiniku (Japanese BBQ)"];


function ResultFilters(props) {
  const [checklist, setChecklist] = useState(locationChecklist);

  function reset() {
    setChecklist(locationChecklist)
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
    <FormControlLabel key={filters} control={<Checkbox />} label={ filters } />
  );

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
