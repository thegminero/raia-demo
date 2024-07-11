import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useConnector, Configure, Index, Hits } from 'react-instantsearch-hooks-web';
import connectStats from 'instantsearch.js/es/connectors/stats/connectStats';
import AutocompleteTemplate from '../results/autocompleteTemplate';
import QuerySuggestionTemplate from '../results/querySuggestionTemplate';
import SuggestionsTitle from '../utils/suggestionstitle/suggestionstitle';

export function useStats(props) {
  return useConnector(connectStats, props);
}
export default function FederatedSearch(props) {
  let location = useLocation();
  const [show, setShow] = useState(false);
  const [color, setColor] = useState('blue');
  const [recentItems, setRecentItems] = useState([]);
  const {
    hitsPerPage,
    nbHits,
    areHitsSorted,
    nbSortedHits,
    nbPages,
    page,
    processingTimeMS,
    query,
  } = useStats(props);

  useEffect(()=>{
    const currentRecents = JSON?.parse(localStorage?.getItem('algoliaRecentSearches')) ?? [];
    setRecentItems(currentRecents);
    setColor(process.env.REACT_APP_MAIN_THEME_COLOR)
  }, [])
  useEffect(() => {
  }, [location]);
  useEffect(()=>{
  }, [query])

    return (nbHits > 0 && location.pathname === '/' && query.length > 1) ? <div className="absolute w-full right-0 z-10 mt-3 origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
            <div className="grid grid-cols-3 gap-4 divide-x divide-solid auto-complete" role="none">
              <div className="w-full bg-white rounded-lg sm:p-8 ">
              <div className="flex  justify-between mb-4 flex-col"> 
                    {recentItems ? <h5 className="text-xl font-bold leading-none text-gray-900 ">Recent Searches</h5> : null }
                    <div className='flex flex-col pt-2'>
                      { 
                        recentItems?.map( recent => 
                          <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <Link to={`/search?q=${recent}`} className='ml-2 text-md text-gray-600'>{recent}</Link>
                            </div>
                          ) 
                      } 
                    </div>
              </div>
              <div className="flex justify-between mb-4 flex-col">  
                  <Index indexName="raia_test_query_suggestions">
                      <Configure hitsPerPage={8} /> 
                      <div className='query-suggestions items-center pt-2'>
                        <SuggestionsTitle />
                        <Hits hitComponent={QuerySuggestionTemplate}/>
                      </div>
                  </Index>
              </div>
              </div>
              <div className="w-full bg-white rounded-lg sm:p-8 col-span-2">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 ">Products</h5>
                    <Link to="/search" className={`text-sm font-medium text-blue-600 hover:underline`}>
                        see all
                    </Link>
                </div>
                <div className="w-full">
                  <ul role="list" className="flex w-full">
                    <Hits hitComponent={AutocompleteTemplate} />
                  </ul>
                </div>
              </div>
              <Configure hitsPerPage={3} /> 
            </div>
          </div>
          : null;
}