import * as React from 'react';

import loggingjs from '../logging.js';

import { useLocation } from "react-router-dom";
import Header from '../components/Header.js';
import ResultDisplay from '../components/result/ResultDisplay.js';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Result() {
  let query = useQuery();

  let path = "breadcrumbs=" + query.get("breadcrumbs").toString() + "&" +
  "filters=" + query.get("filters").toString() + "&" + 
  "resetsize=" + query.get("resetsize").toString() + "&" + 
  "searchbar=" + query.get("searchbar").toString()

  loggingjs.setBreadcrumbs(query.get("breadcrumbs"));
  loggingjs.setFilters(query.get("filters"));
  loggingjs.setResetSize(query.get("resetsize"));
  loggingjs.setSearchBars(query.get("searchbar"));
  loggingjs.setEnd(query.get("search"));

  return (
    <div>
      <div>
        <Header 
          path = { path }
          breadcrumbs={ query.get("breadcrumbs") === 'true' }
          filters={ query.get("filters") === 'true' }
          resetsize={ query.get("resetsize") }
          searchbar={ query.get("searchbar") === 'true' }/>
      </div>
      <ResultDisplay
        path = { path }
        breadcrumbs={ query.get("breadcrumbs") === 'true' }
        filters={ query.get("filters") === 'true' }
        resetsize={ query.get("resetsize") }
        searchbar={ query.get("searchbar") === 'true' }
        search={ query.get("search") }/>
    </div>
  );
}

export default Result;
