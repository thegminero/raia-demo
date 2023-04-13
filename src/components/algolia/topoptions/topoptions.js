import { SortBy } from 'react-instantsearch-hooks-web';


export default function TopOptions(){

    return <div cllassName="catalogue-search-container col-md-12 flex flex-wrap">
    <SortBy
        items={[
          { label: 'Featured', value: 'sanborns_test' },
          { label: 'Price (desc)', value: 'sanborns_test_price_desc' },
          { label: 'Price (asc)', value: 'sanborns_test_price_asc' },
        ]}
      />
  </div>
}