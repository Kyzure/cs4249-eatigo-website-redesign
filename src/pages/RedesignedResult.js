import * as React from 'react';

import Header from '../components/Header.js';
import ResultDisplay from '../components/result/ResultDisplay.js';

function RedesignedResult() {
  return (
    <div>
      <div>
        <Header isRedesigned={ true }/>
      </div>
      <ResultDisplay />
    </div>
  );
}

export default RedesignedResult;
