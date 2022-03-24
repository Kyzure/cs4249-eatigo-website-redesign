import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import FoodTab from "./FoodTab";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function FoodTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} variant="fullWidth" onChange={handleChange} centered>
          <Tab label="menu" {...a11yProps(0)} />
          <Tab label="about" {...a11yProps(1)} />
          <Tab label="reviews" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <FoodTab value={value} index={0}>
        Item One
      </FoodTab>
      <FoodTab value={value} index={1}>
        Item Two
      </FoodTab>
      <FoodTab value={value} index={2}>
        Item Three
      </FoodTab>
    </Box>
  );
}

export default FoodTabs;