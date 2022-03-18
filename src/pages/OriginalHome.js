import * as React from 'react';

import Header from '../components/Header.js';
import HomeDisplay from '../components/HomeDisplay.js';

function OriginalHome() {
  return (
    <div>
      <div>
        <Header isRedesigned={ false }/>
      </div>
      <HomeDisplay />
    </div>
  );
}

export default OriginalHome;
