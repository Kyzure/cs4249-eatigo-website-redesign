import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import FavoriteIcon from '@mui/icons-material/Favorite';

import '../styles/FoodPage.scss';
import FoodPageGallery from '../components/FoodPageGallery.js';
import FoodPageTabs from '../components/FoodPageTabs.js';
import Header from '../components/Header.js';
import reservation from "../assets/reservation-panel.png";

function OriginalFoodPage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <div>
        <Header isRedesigned={ false }/>
      </div>

      <Box className="food-page-body">
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
              <FoodPageGallery />
              <FoodPageTabs />
            </Grid>
          <Grid item xs={4}>
            <img src={reservation} alt="" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default OriginalFoodPage;
