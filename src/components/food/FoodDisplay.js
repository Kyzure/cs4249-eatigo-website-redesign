import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

import '../../styles/Food.scss';
import FoodGallery from './FoodGallery.js';
import FoodTabs from './FoodTabs.js';
import BreadCrumbs from '../BreadCrumbs.js'
import reservation from "../../assets/reservation-panel.png";

function FoodDisplay(props) {

  return (
    <Box className="food-body">
        <Box>
          <BreadCrumbs path={props.path} page="Food" search={props.search} breadcrumbs={ props.breadcrumbs }/>
        </Box>
      {titleSwitch(props.search)}
      <Stack direction="row" gap={2}>
        {scoreSwitch(props.search)}
        <Divider light={false} orientation="vertical" variant="full-width" flexItem />
        {priceSwitch(props.search)}
        <Divider light={false} orientation="vertical" variant="full-width" flexItem />
        {cuisineSwitch(props.search)}
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" gap={2}>
              {reservationSwitch(props.search)}
              {locationSwitch(props.search)}
            </Stack>
            <Stack direction="row" gap={1}>
              <Typography>
                add to favourites
              </Typography>
              <FavoriteIcon />
            </Stack>
          </Stack>
          <Divider light={false} variant="full-width" flexItem />
          <FoodGallery search={props.search} />
          <FoodTabs search={props.search} />
      </Grid>
      <Grid item xs={4}>
        <img src={reservation} alt="" />
      </Grid>
    </Grid>
    </Box>
  );
}

export default FoodDisplay;

function titleSwitch(search) {
  switch (search) {
    case "ramen":
      return (
        <Typography variant="h5">
          Omakase Dinner @ Beppu
        </Typography>
      )
    case "steakhouse":
      return (
        <Typography variant="h5">
          Fosters Steakhouse
        </Typography>
      )
    case "noodles":
      return (
        <Typography variant="h5">
          King's Laksa Steamboat
        </Typography>
      )
    default:
      return (
        <Typography variant="h5">
          Restaurant Name goes here lmao
        </Typography>
      )
  }
}

function scoreSwitch(search) {
  switch (search) {
    case "ramen":
      return (
        <Stack direction="row" gap={1}>
          <Stack direction="row">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Stack>
          <Typography>
              4.8
            </Typography>
        </Stack>

      )
    case "steakhouse":
      return (
        <Stack direction="row" gap={1}>
          <Stack direction="row">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderOutlinedIcon />
          </Stack>
          <Typography>
            4.2
          </Typography>
        </Stack>
      )
    case "noodles":
      return (
        <Stack direction="row" gap={1}>
          <Stack direction="row">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderOutlinedIcon />
          </Stack>
          <Typography>
            4.1
          </Typography>
        </Stack>
      )
    default:
      return (
        <Stack direction="row" gap={1}>
          <Stack direction="row">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Stack>
          <Typography>
            5.0
          </Typography>
        </Stack>
      )
  }
}

function priceSwitch(search) {
  switch (search) {
    case "ramen":
      return (
        <Stack direction="row">
          <MonetizationOnIcon />
          <MonetizationOnIcon />
          <MonetizationOnIcon />
          <MonetizationOnIcon />
          <MonetizationOnIcon />
        </Stack>
      )
    case "steakhouse":
      return (
        <Stack direction="row">
          <MonetizationOnIcon />
          <MonetizationOnIcon />
          <MonetizationOnIcon />
          <MonetizationOnOutlinedIcon />
          <MonetizationOnOutlinedIcon />
        </Stack>
      )
    case "noodles":
      return (
        <Stack direction="row">
          <MonetizationOnIcon />
          <MonetizationOnIcon />
          <MonetizationOnOutlinedIcon />
          <MonetizationOnOutlinedIcon />
          <MonetizationOnOutlinedIcon />
        </Stack>
      )
    default:
      return (
        <Stack direction="row">
          <MonetizationOnOutlinedIcon />
          <MonetizationOnOutlinedIcon />
          <MonetizationOnOutlinedIcon />
          <MonetizationOnOutlinedIcon />
          <MonetizationOnOutlinedIcon />
        </Stack>
      )
  }
}

function cuisineSwitch(search) {
  switch (search) {
    case "ramen":
      return (
        <Typography>
          Japanese
        </Typography>
      )
    case "steakhouse":
      return (
        <Typography>
          Steak
        </Typography>
      )
    case "noodles":
      return (
        <Typography>
          Chinese
        </Typography>
      )
    default:
      return (
        <Typography>
          Cuisine
        </Typography>
      )
  }
}

function reservationSwitch(search) {
  switch (search) {
    case "ramen":
      return (
        <Typography>
          176 reservations
        </Typography>
      )
    case "steakhouse":
      return (
        <Typography>
          1,577 reservations
        </Typography>
      )
    case "noodles":
      return (
        <Typography>
          681 reservations
        </Typography>
      )
    default:
      return (
        <Typography>
          100 reservations
        </Typography>
      )
  }
}

function locationSwitch(search) {
  switch (search) {
    case "ramen":
      return (
        <Typography>
          Telok Ayer
        </Typography>
      )
    case "steakhouse":
      return (
        <Typography>
          Holland Village (Road)
        </Typography>
      )
    case "noodles":
      return (
        <Typography>
          Serangoon
        </Typography>
      )
    default:
      return (
        <Typography>
          Singapore
        </Typography>
      )
  }
}