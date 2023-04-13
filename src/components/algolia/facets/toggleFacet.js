import { useState, useEffect } from 'react'
import { useRefinementList } from 'react-instantsearch-hooks-web';
import { Switch } from '@headlessui/react'
import './facets.css';

function ToggleFacet(props){
        const {
          items,
          title,
          hasExhaustiveItems,
          createURL,
          refine,
          sendEvent,
          searchForItems,
          isFromSearch,
          canRefine,
          canToggleShowMore,
          isShowingMore,
          toggleShowMore,
        } = useRefinementList(props);

        const [enabled, setEnabled] = useState(false)
        
        useEffect(()=>{
            console.log(props)
            refine(!enabled)
        }, [enabled]);

    return <div className="facets mt-2 w-full ais-RefinementList flex justify-between items-center">
        {(props.attribute === 'super_express') ? 
            <img className="w-28 py-4" src="https://www.sanborns.com.mx/img/fullf.png" alt="express shipping"/> : 
            (props.attribute === 'status') ? 
            <div className="w-full flex items-center"><img className="w-16 py-4 pr-2" src="https://www.sanborns.com.mx/img/camion-de-reparto.svg" alt="express shipping"/><span className="text-green-600">Envio Gratis</span></div>
        :null} 

            
        <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
            enabled ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
        <span className="sr-only bg-green-400">{title}</span>
        <span
            className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
        </Switch>
       
    </div>
}
export default ToggleFacet;