import * as React from 'react';

import Header from '../components/Header.js';
import HomeDisplay from '../components/HomeDisplay.js';

function RedesignedHome() {
  return (
    <div>
      <div>
        <Header isRedesigned={ true }/>
      </div>
      <HomeDisplay />
    </div>
  );
}

export default RedesignedHome;
