import * as React from 'react';
import ResultCard from './ResultCard.js';

import Ramen1 from '../../assets/Japanese1.png';
import Ramen2 from '../../assets/Japanese2.png';
import Ramen3 from '../../assets/Japanese3.png';

import SteakHouse1 from '../../assets/SteakHouse1.png';
import SteakHouse2 from '../../assets/SteakHouse2.png';
import SteakHouse3 from '../../assets/SteakHouse3.png';
import SteakHouse4 from '../../assets/SteakHouse4.png';

import Noodles1 from '../../assets/Noodles1.png';
import Noodles2 from '../../assets/Noodles2.png';
import Noodles3 from '../../assets/Noodles3.png';
import Noodles4 from '../../assets/Noodles4.png';
import Noodles5 from '../../assets/Noodles5.png';

import Stack from '@mui/material/Stack';

const ramenList = [
  {
    show: false,
    pic: Ramen1
  },
  {
    show: false,
    pic: Ramen2    
  },
  {
    show: true,
    pic: Ramen3
}];

const steakHouseList = [
  {
    show: true,
    pic: SteakHouse1
  },
  {
    show: false,
    pic: SteakHouse2
  },
  {
    show: false,
    pic: SteakHouse3
  },
  {
    show: false,
    pic: SteakHouse4
  }
];

const noodlesList = [
  {
    show: false,
    pic: Noodles1
  },
  {
    show: true,
    pic: Noodles2
  },
  {
    show: false,
    pic: Noodles3
  },
  {
    show: false,
    pic: Noodles4
  },
  {
    show: false,
    pic: Noodles5
  },
];

function ResultCardList(props) {
  function CardList() {
    if (props.isFilterSelected && props.searchType !== "steakhouse") {
      if (props.searchType === "noodles") {
        return <ResultCard searchType={ props.searchType } picture={Noodles2} path={ props.path } />
      } else {
        return <ResultCard searchType={ props.searchType } picture={Ramen3} path={ props.path } />
      }
    } else {
      let chosen = ramenList
      if (props.searchType === "steakhouse") {
        chosen = steakHouseList
      } else if (props.searchType === "noodles") {
        chosen = noodlesList
      }
      const a = chosen.map((item) => {
        if (item.show) {
          return <ResultCard
            searchType={ props.searchType }
            key={item.pic}
            picture={item.pic}
            path={ props.path }/>
        }
        return <ResultCard key={item.pic} picture={item.pic} path={ props.path }/>
      }); 
      return a;
    }
  }

  return (
    <Stack direction="column" sx={{ width: '70%', backgroundColor: "#FFFFFF", padding: '10px 20px 10px 20px' }} spacing={ '10px' }>
      <CardList />
    </Stack>
  );
}

export default ResultCardList;
