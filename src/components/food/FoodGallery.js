import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import ramen from "../../assets/ramen.jpeg";
import ramen2 from "../../assets/ramen2.jpeg";
import ramen3 from "../../assets/ramen3.jpeg";
import steakhouse from "../../assets/steakhouse.jpg";
import steakhouse2 from "../../assets/steakhouse2.jpg";
import steakhouse3 from "../../assets/steakhouse3.jpg";
import noodles from "../../assets/noodles.jpg";
import noodles2 from "../../assets/noodles2.jpg";
import noodles3 from "../../assets/noodles3.jpg";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function FoodGallery({search}) {
  return (
    <ImageList
      variant="quilted"
      cols={4}
    >
      {switchPictures(search).map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default FoodGallery;

function switchPictures(search) {
  switch (search) {
    case "ramen":
      return [
        {
          img: ramen,
          title: 'Ramen',
          rows: 2,
          cols: 3,
        },
        {
          img: ramen2,
          title: 'Sea star',
          cols: 1,
        },
        {
          img: ramen3,
          title: 'Bike',
          cols: 1,
        }
      ]
    case "steakhouse":
      return [
        {
          img: steakhouse,
          title: 'Mushrooms',
          rows: 2,
          cols: 3,
        },
        {
          img: steakhouse2,
          title: 'Sea star',
          cols: 1,
        },
        {
          img: steakhouse3,
          title: 'Bike',
          cols: 1,
        }
      ]
    case "noodles":
      return [
        {
          img: noodles,
          title: 'Mushrooms',
          rows: 2,
          cols: 3,
        },
        {
          img: noodles2,
          title: 'Sea star',
          cols: 1,
        },
        {
          img: noodles3,
          title: 'Bike',
          cols: 1,
        }
      ]
    default:
      return [
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
          rows: 2,
          cols: 3,
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          title: 'Sea star',
          cols: 1,
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
          cols: 1,
        }
      ]
  }
}