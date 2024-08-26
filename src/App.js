import './App.css';
import Header from './components/layout/header/header';
import {
  Routes,
  Route,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { useEffect, useState } from 'react';
//import Home from './components/pages/home/home';
import { pageRoutes } from './components/routes/routes';
//import { useRecoilValue } from 'recoil';
import { InstantSearch, Configure } from 'react-instantsearch-hooks-web';
import algoliasearch from 'algoliasearch/lite';
//import { algoliaQueryTerm, algoliaUrlState } from './context/appstate';

const searchClient = algoliasearch(
  'MWN8IH23ME',
  '4e648074863f9356162d9db95a19efe0'
);

function App() {

  //const algoliaState = useRecoilValue(algoliaUrlState);  
  //const algolyaQuery = useRecoilValue(algoliaQueryTerm)
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [category, setCategorie] = useState('');
  const [context, setContext] = useState('');
  const [routing, setRouting] = useState(false)
  let location = useLocation();

  useEffect(() => {
    setQuery(searchParams.get('q'))
  },[searchParams])

  useEffect(() => {
    (location?.pathname === '/search') ? setRouting(true) : setRouting(false);
    (location.pathname.includes('cemento')) ? setCategorie(`categories:cemento`) : setCategorie('');
    (location.pathname.includes('categorias')) ? setContext(location.pathname.split('/')[2]) : setContext('search');
  },[location])

  return (
    <div className="w-full pb-12 antialiased bg-white" data-tails-scripts="//unpkg.com/alpinejs">
          <div className="mx-auto">
            <InstantSearch indexName="raia_test" searchClient={searchClient}> 
            { (location?.pathname === '/search' && query !== null) ?
                  <Configure
                  ruleContexts={[context]}
                  analyticsTags={['tag1']}
                  hitsPerPage={48} 
                  distinct
                  query={query}
                /> :
                  <Configure
                  ruleContexts={[context]}
                  analytics
                  hitsPerPage={48} 
                  distinct
                  filters={category}
                />
            }
              <Header />

              <Routes>
                { pageRoutes.map( page =>
                  <Route exact path={page.path} element={page.component} />)
                }
              </Routes>

            </InstantSearch>
          </div>
  </div>
  );
}

export default App;
