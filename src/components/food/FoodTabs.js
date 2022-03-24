import * as React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'

import ramen_menu from "../../assets/ramen_menu.png"
import ramen_about from "../../assets/ramen_about.png"
import ramen_reviews from "../../assets/ramen_reviews.png"
import steakhouse_menu from "../../assets/steakhouse_menu.png"
import steakhouse_about from "../../assets/steakhouse_about.png"
import steakhouse_reviews from "../../assets/steakhouse_reviews.png"
import noodles_menu from "../../assets/noodles_menu.png"
import noodles_about from "../../assets/noodles_about.png"
import noodles_reviews from "../../assets/noodles_reviews.png"

function FoodTabs({search}) {
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
        {menuSwitch(search)}
      </FoodTab>
      <FoodTab value={value} index={1}>
        {aboutSwitch(search)}
      </FoodTab>
      <FoodTab value={value} index={2}>
        {reviewSwitch(search)}
      </FoodTab>
    </Box>
  );
}

export default FoodTabs;

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function FoodTab(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function menuSwitch(search) {
  switch (search) {
    case "ramen":
      return <img src={ramen_menu} alt="" />
    case "steakhouse":
      return <img src={steakhouse_menu} alt="" />
    case "noodles":
      return <img src={noodles_menu} alt="" />
    default:
      return;
  }
}

function aboutSwitch(search) {
  switch (search) {
    case "ramen":
      return <img src={ramen_about} alt="" />
      case "steakhouse":
        return <img src={steakhouse_about} alt="" />
      case "noodles":
        return <img src={noodles_about} alt="" />
      default:
        return;
  }
}

function reviewSwitch(search) {
  switch (search) {
    case "ramen":
      return <img src={ramen_reviews} alt="" />
      case "steakhouse":
        return <img src={steakhouse_reviews} alt="" />
      case "noodles":
        return <img src={noodles_reviews} alt="" />
      default:
        return;
  }
}