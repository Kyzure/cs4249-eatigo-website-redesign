import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

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
      return (
        <>
          recommended menu<br />
          <br />
          Promotion cannot be applied with any other in-house promotions. Please refer to the special conditions below for more details.<br />
          <br />
          <br />
          * Menu and pricing subject to change without notice.<br />
          ** All prices in SGD and are exclusive of GST and service charge unless otherwise indicated under special conditions.<br />
          <br />
          <br />
          special conditions
          <Divider light={false} variant="full-width" flexItem />
          Deposit is required to secure the reservations. Do notify the restaurant 1 day before your reservation date if you wish to cancel and deposit will be refunded to you accordingly.<br />
          <br />
          12-Course Omakase Meal for 2 pax includes:<br />
          <br />
          Cold Tofu with Hokkaido Scallop<br />
          Sashimi of The Day<br />
          Asuhos Tempura with Nanban Sauce<br />
          Engawa Sushi<br />
          Anago Sushi<br />
          Grilled Mentaiko Stuffed Chicken Wing<br />
          Lemon Shishamo<br />
          Baby Abalone<br />
          Signature Ramen with Soft Bone Pork<br />
          Salmon Tataki<br />
          Negitoro Don<br />
          Dessert of The Day
        </>
        
      )
    case "steakhouse":
      return (
        <>
          recommended menu<br />
          <br />
          Promotion cannot be applied with any other in-house promotions. Please refer to the special conditions below for more details.<br />
          <br />
          <br />
          * Menu and pricing subject to change without notice.<br />
          ** All prices in SGD and are exclusive of GST and service charge unless otherwise indicated under special conditions.<br />
        </>
      )
    case "noodles":
      return (
        <>
          recommended menu<br />
          <br />
          Promotion cannot be applied with any other in-house promotions. Please refer to the special conditions below for more details.<br />
          <br />
          <br />
          * Menu and pricing subject to change without notice.<br />
          ** All prices in SGD and are exclusive of GST and service charge unless otherwise indicated under special conditions.<br />
        </>
      )
    default:
      return (
        <>
          recommended menu<br />
          <br />
          Promotion cannot be applied with any other in-house promotions. Please refer to the special conditions below for more details.<br />
          <br />
          <br />
          * Menu and pricing subject to change without notice.<br />
          ** All prices in SGD and are exclusive of GST and service charge unless otherwise indicated under special conditions.<br />
        </>
      )
  }
}

function aboutSwitch(search) {
  switch (search) {
    case "ramen":
      return (
        <>
          Beppu Menkan prides itself as one of the best spicy fried chicken ramen in town. Its name, ‘Beppu’, is where its cuisine is inspired from – a city within Kyushu, Japan. Located at China Square Central near Telok Ayer MRT station, the restaurant’s top dishes here include the char siew ramen set, beppu ramen, and their signature fried chicken ramen set.<br />
          <br />
          <br />
          operating hours
          <Divider light={false} variant="full-width" flexItem />
        </>
      )
      case "steakhouse":
        return (
          <Typography>
      
          </Typography>
        )
      case "noodles":
        return (
          <Typography>
      
          </Typography>
        )
      default:
        return (
          <Typography>
      
          </Typography>
        )  
  }
}

function reviewSwitch(search) {
  switch (search) {
    case "ramen":
      return (
        <Typography>
    
        </Typography>
      )
      case "steakhouse":
        return (
          <Typography>
      
          </Typography>
        )
      case "noodles":
        return (
          <Typography>
      
          </Typography>
        )
      default:
        return (
          <Typography>
      
          </Typography>
        )  
  }
}