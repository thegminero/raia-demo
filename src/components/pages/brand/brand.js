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
    const [banner, setBanner] = useState(null);
    
    useEffect(() => {
        if (results && results?.renderingContent?.widgets && results?.renderingContent?.widgets?.banners) {
            // Assuming you want to use the first banner in the array
            const firstBanner = results.renderingContent.widgets.banners[0];
            setBanner(firstBanner);
        }
    }, [results]);

    return <div className="container max-w-lg px-4 mx-auto mt-px text-left md:max-w-none md:text-center">

                 {(brand)? <Configure filters={`brand:"L'Oréal"`} /> : null }   
            
                {
                    (banner) ?
                    <div className="relative bg-white">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex-1 min-w-0">
                        {/* Banner Image */}
                        <div className="relative">
                            <img className="w-full h-auto" src={banner.image.urls[0].url} alt={banner.image.title} />
                        </div>
                        {/* Banner Title */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl sm:text-2xl">{banner.image.title}</div>
                    </div>
                    <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-4">
                        {/* Banner Link */}
                        <a href={banner.link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-800 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Saiba mais
                        </a>
                    </div>
                </div>
            </div>
        </div>
        : null
                }
        
        <section className="bg-white py-8">
        <div className="flex flex-wrap gap-2 mb-4">
            
            </div>
            <div className="container mx-auto flex items-center flex-wrap  pb-12">

                <div id="search-header" className="w-full z-30 top-0 px-6 py-1">
                    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                        <Link to="/" className="uppercase flex items-center justify-around w-2/12 tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">
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