import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchBox } from 'react-instantsearch-hooks-web';
import './searchbar.css'
import { useRecoilState } from 'recoil';
import { algoliaQueryTerm, algoliaUrlState } from '../../../context/appstate';

function Searchbar(){
    const [algoliaState, setAlgoliaState] = useRecoilState(algoliaUrlState)
    const [queryTermState, setQueryTermState] = useRecoilState(algoliaQueryTerm)
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [color, setColor] = useState('blue')

    const handleFocus = () => {
      };
    const addRecentSearches = (query) => {
        const currentRecents = localStorage?.getItem('algoliaRecentSearches') ?? []
        const newRecents = (typeof currentRecents === 'string' || currentRecents instanceof String) ? JSON?.parse(currentRecents) : currentRecents;
        newRecents.push(query)
        if(newRecents.length >= 6){ console.log('popping'); newRecents.pop()}
        localStorage.setItem('algoliaRecentSearches', JSON.stringify([...new Set(newRecents)]))

    };
    const handleSubmit = (e) =>{
        /** if not using routing = true on instantsearch use queryTerm */
        const queryTerm = e.currentTarget.getElementsByClassName('ais-SearchBox-input')[0].value
        setAlgoliaState(`?${process.env.REACT_APP_INDEX_NAME}%5Bquery%5B=${queryTerm}`)
        addRecentSearches(queryTerm)
        setSearchParams({'q': `queryTerm`})
        setQueryTermState(queryTerm)
        
        navigate(`search?q=${queryTerm}`);

    }

    useEffect(()=>{
        setColor(process.env.REACT_APP_MAIN_THEME_COLOR);
        const aisSearchbox = document?.querySelector('div.ais-SearchBox.site-search.w-full.h-10.p-2.rounded-lg.items-center > form > input')
        aisSearchbox.addEventListener('onfocus', handleFocus)
        return () => aisSearchbox.removeEventListener('onfocus', handleFocus);
    }, [])

    useEffect(()=>{
        const aisSearchbox = document.querySelector('.ais-SearchBox-input');
        const aisSearchForm = document.querySelector('.ais-SearchBox-form');
        const aisSearchSubmit = document.querySelector('.ais-SearchBox-submit');
        aisSearchbox.classList.add('w-full', 'h-10', 'p-2', 'rounded-l-lg');
        aisSearchForm.classList.add('flex', 'border', `border-blue-700`, 'rounded-lg')
        aisSearchSubmit.classList.add('bg-red-500', 'w-12', 'rounded-r-lg')
        aisSearchForm.addEventListener('onfocus', handleFocus)
    })
    return <SearchBox className="site-search w-full h-10 p-2 rounded-lg items-center"
                        placeholder="Que estas buscando?"
                        onSubmit={(event) => handleSubmit(event)} />
}

export default Searchbar;