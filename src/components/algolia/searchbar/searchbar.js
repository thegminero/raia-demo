import { useEffect, useRef } from 'react';
import { SearchBox } from 'react-instantsearch-hooks-web';
import './searchbar.css'

function Searchbar(){
    

    const handleFocus = (e) => {
       console.log('focuss')
      }

    useEffect(()=>{
        console.log('addeventlistener to searchbar')
        const aisSearchbox = document?.querySelector('div.ais-SearchBox.site-search.w-full.h-10.p-2.rounded-lg.items-center > form > input')
        console.log(aisSearchbox)
        aisSearchbox.addEventListener('onfocus', handleFocus)
        return () => aisSearchbox.removeEventListener('onfocus', handleFocus);
    }, [])

    useEffect(()=>{
        const aisSearchbox = document.querySelector('.ais-SearchBox-input');
        const aisSearchForm = document.querySelector('.ais-SearchBox-form');
        const aisSearchSubmit = document.querySelector('.ais-SearchBox-submit');
        aisSearchbox.classList.add('w-full', 'h-10', 'p-2', 'rounded-l-lg');
        aisSearchForm.classList.add('flex', 'border', 'border-red-700', 'rounded-lg')
        aisSearchSubmit.classList.add('bg-white', 'w-12', 'rounded-r-lg')
        aisSearchForm.addEventListener('onfocus', handleFocus)
    })
    return <SearchBox className="site-search w-full h-10 p-2 rounded-lg items-center"
                        placeholder="O que deseja encontrar?"/>
}

export default Searchbar;