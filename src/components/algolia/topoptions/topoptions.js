import { SortBy } from 'react-instantsearch-hooks-web';


export default function TopOptions(){

    return <div className="catalogue-search-container col-md-12 flex flex-wrap">
    <SortBy
        items={[
          { label: 'Featured', value: 'raia_test' },
          { label: 'Price (desc)', value: 'raia_test_price_desc' },
          { label: 'Price (asc)', value: 'raia_test_price_asc' },
        ]}
      />
  </div>
}