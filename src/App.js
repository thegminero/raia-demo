import './App.css';
import Header from './components/layout/header/header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/pages/home/home';
import { pageRoutes } from './components/routes/routes';

import { InstantSearch, Configure } from 'react-instantsearch-hooks-web';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'MWN8IH23ME',
  '4e648074863f9356162d9db95a19efe0'
);

function App() {
  return (
    <div className="w-full pb-12 antialiased bg-white" data-tails-scripts="//unpkg.com/alpinejs">
        <Router>
          <div className="mx-auto">
            <InstantSearch indexName="sanborns_test" searchClient={searchClient}>
            <Configure
              analytics
              hitsPerPage={48}
              distinct
            />
              <Header />

              <Routes>
                { pageRoutes.map( page =>
                  <Route exact path={page.path} element={page.component} />)
                }
              </Routes>

            </InstantSearch>
          </div>
      </Router>
  </div>
  );
}

export default App;
