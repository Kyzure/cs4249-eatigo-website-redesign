import * as React from 'react';

import { useLocation } from "react-router-dom";
import Header from '../components/Header.js';
import FoodDisplay from '../components/food/FoodDisplay.js';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Food() {
  let query = useQuery();

  let path = "breadcrumbs=" + query.get("breadcrumbs").toString() + "&" +
  "filters=" + query.get("filters").toString() + "&" + 
  "resetsize=" + query.get("resetsize").toString() + "&" + 
  "searchbar=" + query.get("searchbar").toString()

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
      <FoodDisplay
        path = { path }
        breadcrumbs={ query.get("breadcrumbs") === 'true' }
        filters={ query.get("filters") === 'true' }
        resetsize={ query.get("resetsize") }
        searchbar={ query.get("searchbar") === 'true' }
        search={ query.get("search") }/>
    </div>
  );
}

export default Food;
