import QuerySuggestBox from "../../algolia/querysuggestbox/querysuggestbox";
import { headerCategoryOptions } from "../../routes/routes";
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from "react";
import Searchbar from "../../algolia/searchbar/searchbar";
import ZipSelector from "../../utils/zipselector/zipselector";

export default function Header() {

    let location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
    }, [location]);

    return <nav className="relative justify-between z-50 h-32 w-full select-none bg-red-500 shadow-md">
        <div className="container w-full relative flex items-center justify-between h-24 mx-auto overflow-hidden font-medium md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0">
            <div className="px-8 flex flex-col items-center items-end justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-gray-100">
                <svg className="w-6 h-6 text-white" x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" x-cloak=""><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </div>
            <div className="flex items-center justify-start h-full ">
                <Link to="/" className="inline-block py-4 md:py-0 pr-4 border-r-2 border-gray-200 ">
                    
                    <img src="https://www.sanborns.com.mx/img/logo_blc.svg" className="w-64" />
                </Link>
                <div className="px-4 w-24">
                    <ZipSelector />
                </div>
            </div>
            <div className="search-bar w-2/4">
                {
                    (location.pathname === '/') ?
                        <QuerySuggestBox />
                        :
                        <Searchbar />
                }

            </div>

            <div className="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-red-500 rounded-full cursor-pointer md:hidden hover:bg-gray-100">
                <svg className="w-6 h-6 text-gray-700" x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" x-cloak=""><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                <svg className="w-6 h-6 text-gray-700" x-show="showMenu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x-cloak=""><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </div>
        </div>
        <div className="items-end hidden text-sm bg-gray-900 bg-opacity-50 md:items-center w-full lg:text-base md:bg-transparent md:p-0 md:relative md:flex">
            <div className="flex-col w-full h-auto overflow-hidden bg-red-500 rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                <div className="flex flex-col items-end justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                    {
                        headerCategoryOptions.map(
                            nav => <span className="flex items-center" key={nav.label}>
                                {nav.icon}
                                <a href="#_" className="inline-block w-full py-2 mx-0 ml-6 font-large text-left text-white md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">{nav.label}</a>
                            </span>
                        )
                    }

                </div>
            </div>
        </div>
    </nav>
}