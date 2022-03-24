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

import Malaysian1 from '../../assets/Malaysian1.png';
import Malaysian2 from '../../assets/Malaysian2.png';

import Burgers1 from '../../assets/Burgers1.png';
import Burgers2 from '../../assets/Burgers2.png';
import Burgers3 from '../../assets/Burgers3.png';
import Burgers4 from '../../assets/Burgers4.png';

import Mediterranean1 from '../../assets/Mediterranean1.png';
import Mediterranean2 from '../../assets/Mediterranean2.png';
import Mediterranean3 from '../../assets/Mediterranean3.png';
import Mediterranean4 from '../../assets/Mediterranean4.png';


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

const malaysianList = [{ show: false, pic: Malaysian1 }, { show: false, pic: Malaysian2 }];
const burgersList = [{ show: false, pic: Burgers1 }, { show: false, pic: Burgers2 }, { show: false, pic: Burgers3 }, { show: false, pic: Burgers4 }];
const mediterraneanList = [{ show: false, pic: Mediterranean1 }, { show: false, pic: Mediterranean2 }, { show: false, pic: Mediterranean3 }, { show: false, pic: Mediterranean4 }];

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
      } else if (props.searchType === "malaysian") {
        chosen = malaysianList
      } else if (props.searchType === "burgers") {
        chosen = burgersList
      } else if (props.searchType === "mediterranean") {
        chosen = mediterraneanList
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
