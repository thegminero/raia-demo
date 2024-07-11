import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useConnector, Configure, Index, Hits } from 'react-instantsearch-hooks-web';
import connectStats from 'instantsearch.js/es/connectors/stats/connectStats';
import AutocompleteTemplate from '../results/autocompleteTemplate';
import QuerySuggestionTemplate from '../results/querySuggestionTemplate';

export function useStats(props) {
  return useConnector(connectStats, props);
}
export default function SimpleAutocomplete(props) {
  let location = useLocation();
  const [show, setShow] = useState(false);

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

  useEffect(() => {
    console.log(location.pathname);
}, [location]);
  useEffect(()=>{
    console.log(query)
  }, [query])

  useEffect(()=>{
    
    //console.log(nbHits)
  }, [nbHits])

    return (nbHits > 0 && location.pathname === '/' && query.length > 1) ? <div className="absolute w-full right-0 z-10 mt-3 origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
            <div className="grid grid-cols-3 gap-4 divide-x divide-solid auto-complete" role="none">
              <div className="w-full bg-white rounded-lg sm:p-8 ">
              <div className="flex  justify-between mb-4 flex-col"> 
                    <h5 className="text-xl font-bold leading-none text-gray-900 ">Busquedas Recientes</h5>
                    <div className='flex flex-col pt-2'>
                      <Link to="/search?q=Tequila" className='text-md text-gray-600'>Tequila</Link>
                      <Link to="/search?q=Nivea" className='text-md text-gray-600'> Nivea</Link>
                      <Link to="/search?q=Cabernet" className='text-md text-gray-600'>Cabernet</Link>
                      <Link to="/search?q=Juegos%20de%20playstation" className='text-md text-gray-600'>Juegos de playstation</Link>
                    </div>
              </div>
              <div className="flex justify-between mb-4 flex-col"> 
                <h5 className="text-xl font-bold leading-none text-gray-900 ">Sugestiones</h5>
                  <Index indexName="raia_test_price_asc">
                    <Configure hitsPerPage={8} /> 
                    <div className='query-suggestions items-center pt-2'>
                      <Hits hitComponent={QuerySuggestionTemplate}/>
                    </div>
                  </Index>
              </div>
              </div>
              <div className="w-full bg-white rounded-lg sm:p-8 col-span-2">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 ">Productos</h5>
                    <Link to="/search" className="text-sm font-medium text-blue-600 hover:underline ">
                        ver todos
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