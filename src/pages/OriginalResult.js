import * as React from 'react';

import Header from '../components/Header.js';
import ResultDisplay from '../components/result/ResultDisplay.js';

function OriginalResult() {
  return (
    <div>
      <div>
        <Header isRedesigned={ false }/>
      </div>
      <ResultDisplay />
    </div>
  );
}

export default OriginalResult;
