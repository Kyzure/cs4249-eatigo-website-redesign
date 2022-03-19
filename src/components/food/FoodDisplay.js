import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import FavoriteIcon from '@mui/icons-material/Favorite';

import '../../styles/Food.scss';
import FoodGallery from './FoodGallery.js';
import FoodTabs from './FoodTabs.js';
import reservation from "../../assets/reservation-panel.png";

function FoodDisplay(props) {

  return (
    <Box className="food-body">
      <Typography variant="h5">
          Omakase Dinner @ Beppu
        </Typography>
        <Stack direction="row" gap={2}>
          <Stack direction="row">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
            <Typography>
              4.9
            </Typography>
          </Stack>
          <Divider light="false" orientation="vertical" variant="full-width" flexItem />
          <Stack direction="row">
            <MonetizationOnIcon />
            <MonetizationOnIcon />
            <MonetizationOnIcon />
            <MonetizationOnIcon />
            <MonetizationOnIcon />
          </Stack>
          <Divider light="false" orientation="vertical" variant="full-width" flexItem />
          <Typography>
            Japanese
          </Typography>
        </Stack>

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" gap={2}>
                <Typography>
                  173 reservations
                </Typography>
                <Typography>
                  Telok Ayer
                </Typography>
              </Stack>
              <Stack direction="row" gap={1}>
                <Typography>
                  add to favourites
                </Typography>
                <FavoriteIcon />
              </Stack>
            </Stack>
            <Divider light="false" variant="full-width" flexItem />
            <FoodGallery />
            <FoodTabs />
          </Grid>
        <Grid item xs={4}>
          <img src={reservation} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default FoodDisplay;
