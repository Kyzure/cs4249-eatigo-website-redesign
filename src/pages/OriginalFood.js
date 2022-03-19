import * as React from 'react';

import Header from '../components/Header.js';
import FoodDisplay from '../components/food/FoodDisplay.js';

function OriginalFood() {
  return (
    <div>
      <div>
        <Header isRedesigned={ false }/>
      </div>
      <FoodDisplay />
    </div>
  );
}

export default OriginalFood;
