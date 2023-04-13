import { useEffect } from 'react';
import { SearchBox } from 'react-instantsearch-hooks-web';
import './searchbar.css'

function Searchbar(){

    useEffect(()=>{
        const aisSearchbox = document.querySelector('.ais-SearchBox-input');
        const aisSearchForm = document.querySelector('.ais-SearchBox-form');
        const aisSearchSubmit = document.querySelector('.ais-SearchBox-submit');
        aisSearchbox.classList.add('w-full', 'h-10', 'p-2', 'rounded-l-lg');
        aisSearchForm.classList.add('flex', 'border', 'border-red-700', 'rounded-lg')
        aisSearchSubmit.classList.add('bg-white', 'w-12', 'rounded-r-lg')
    })
    return <SearchBox className="site-search w-full h-10 p-2 rounded-lg items-center"
                        placeholder="¿Qué es lo que buscas?"/>
}

export default Searchbar;