import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Hits, SortBy, ClearRefinements, Pagination, useInstantSearch, Configure } from 'react-instantsearch-hooks-web';
import { Link } from 'react-router-dom';
import Facets from '../../algolia/facets/facets';
import ResultTemplate from '../../algolia/results/resultTemplate';

import './brand.css';

export default function BrandPage() {
    const { brand } = useParams();
    const { results } = useInstantSearch();
    
    useEffect(() => {
        // Show Request Data from the query
        console.log(brand)

    }, [results]);

    return <div className="container max-w-lg px-4 mx-auto mt-px text-left md:max-w-none md:text-center">

                 {(brand)? <Configure filters={`brand:"L'Oréal"`} /> : null }   
            

        
        <section className="bg-white py-8">
        <div className="flex flex-wrap gap-2 mb-4">
            
            </div>
            <div className="container mx-auto flex items-center flex-wrap  pb-12">

                <div id="search-header" className="w-full z-30 top-0 px-6 py-1">
                    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                        <Link to="/" className="uppercase flex items-center justify-around w-2/12 tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " to="/search">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="red"
                                className="sc-bdvvaa eAsDEz BreadCrumbsstyles__IconHome-justo__sc-r89k9z-3 eTlAkt"
                                viewBox="0 0 22 22"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7 22h8.003v-7.993a1 1 0 00-1-1H7.999a1 1 0 00-1 1V22zM20.625 6.398L11.922.29a1.61 1.61 0 00-1.844 0L1.375 6.397A3.236 3.236 0 000 9.047v8.417C0 19.965 2.024 22 4.513 22h12.974C19.975 22 22 19.965 22 17.464V9.046a3.237 3.237 0 00-1.374-2.648z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="8"
                                fill="#BDBDBD"
                                className="rotate-90"
                                viewBox="0 0 13 8"
                            >
                                <path
                                    fill="#333"
                                    d="M10.46 6.71L6.58 2.83 2.7 6.71A.996.996 0 111.29 5.3L5.88.71a.996.996 0 011.41 0l4.59 4.59c.39.39.39 1.02 0 1.41-.39.38-1.03.39-1.42 0z"
                                ></path>
                            </svg>
                            <span>
                                Store
                            </span>
                        </Link>

                        <div className="flex items-center" id="store-nav-content">

                            <a className="pl-3 flex no-underline hover:text-black shadow-md rounded-md" href="#">
                                <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                                </svg>
                                <SortBy
                                    items={[
                                    { label: 'Featured', value: 'raia_test' },
                                    { label: 'Price (desc)', value: 'raia_test_price_desc' },
                                    { label: 'Price (asc)', value: 'raia_test_price_asc' },
                                    ]}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center align-center">
              
                <div className="flex flex-wrap w-4/4 search-results justify-center align-center">
                    <Hits className="w-full" hitComponent={ResultTemplate} />
                </div>
                <div className="flex flex-wrap w-full">
                    <Pagination className="flex w-full justify-center"/>  
                </div>
            </div>
        </section>
    </div>
}