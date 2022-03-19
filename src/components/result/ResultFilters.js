import * as React from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const locationFilters = ["Admiralty", "Alexandra Road", "Aljunied", "Ang Mo Kio", "Balestier", "Beach Road", "Bedok", "Bedok North", "Bishan", "Boat Quay", "Botanic Gardens", "Bugis", "Bukit Batok", "Bukit Panjang", "Bukit Timah", "Buona Vista", "Changi", "Chinatown", "Circular Road", "City Hall", "Clarke Quay", "Clementi", "Dempsey", "Dhoby Ghaut", "Duxton Road", "East Coast", "Esplanade", "Farrer Park", "Geylang", "Harbourfront", "Havelock Road", "Hillview", "Holland Village (Road)", "Hougang", "Jalan Besar", "Jalan Kayu", "Joo Koon", "Jurong", "Jurong East", "Jurong West", "Kallang", "Katong", "Kim Seng", "Kovan", "Labrador Park", "Lavender", "Little India", "Macpherson", "Marina Bay", "Marina Square", "Middle Road", "Novena", "One North", "Orchard", "Outram Road", "Pasir Panjang", "Pasir Panjang Road", "Pasir Ris", "Paya Lebar", "Punggol", "Queenstown", "Raffles Place", "River Valley", "Robertson Quay", "Rochor", "Sengkang", "Sentosa", "Serangoon", "Somerset", "Suntec", "Tai Seng", "Tampines", "Tanjong Katong", "Tanjong Pagar", "Telok Ayer", "Thomson", "Tiong Bahru", "Toa Payoh", "Upper Serangoon", "Upper Thomson", "Woodlands", "Yishun"];

const cuisineFilters = ["Afternoon Tea", "American", "Arabic", "Asian", "Asian (Others)", "Asian Fusion", "Australian", "BBQ / Barbecue", "Bakery / Cafe", "Breakfast", "British", "Bubble Tea", "Buffet", "Burgers", "Cantonese", "Chicken", "Chicken Wings", "Chinese", "Contemporary", "Crab", "Dessert", "Dim Sum", "European", "Fast Food", "Fish & Chips", "French", "Fusion", "Global Fusion", "Green / Healthy", "Grill", "Halal", "Hot Pot / Steam Boat / Shabu", "Ice Cream", "Imperial Chinese", "Indian", "Indonesian", "International", "Italian", "Japanese", "Juice / Smoothies", "Korean", "Lobster", "Malaysian", "Mediterranean", "Mexican", "Middle Eastern", "Modern Indian", "Modernist European", "Noodles", "Northern Thai", "Pasta", "Peking Duck", "Pizza", "Pubs / Bars", "Ramen", "Rice", "Salad", "Sandwiches / Baguettes / Bagels", "Seafood", "Singaporean", "Soups", "South Indian", "Spanish", "Steak", "Steakhouse", "Street Food", "Sukiyaki", "Sushi", "Szechuan / Sichuan", "Taiwanese", "Tandoori Chicken", "Tapas (Small Plates)", "Thai", "Turkish", "Vegan", "Vegetarian", "Vietnamese", "Waffles & Crepes", "Western", "Wine Bar", "Yakiniku (Japanese BBQ)"];


function ResultFilters(props) {
  /*
  for (let i = 0; i < locationFilters.length; i++) {
    props.selectedLocations[locationFilters[i]] = false;
  }
  */

  function changeSelectedLocation(e, filter) {
    if (filter === "Telok Ayer" && props.searchType === "ramen") {
      props.setFilterSelected(e.target.checked);
    } else if (filter === "Serangoon" && props.searchType === "noodles") {
      props.setFilterSelected(e.target.checked);
    }
    // props.selectedLocations[filter] = e.target.checked;
  }

  const locations = locationFilters.map((filters) => 
    <FormControlLabel key={filters} control={<Checkbox onChange={ (e) => changeSelectedLocation(e, filters) }  />} label={ filters } />
  );

  const cuisine = cuisineFilters.map((filters) => 
    <FormControlLabel key={filters} control={<Checkbox />} label={ filters } />
  );

  return (
    <Stack direction="column" spacing={'20px'} sx={{ padding: '10px 10px 10px 10px', backgroundColor: "#FFFFFF" }}>
      <Stack justifyContent="space-between" direction="row">
        <Typography variant="h6" display="inline">
          Filters
        </Typography>
        <Button size={ props.resetSize } color="primary" variant="outlined">
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
