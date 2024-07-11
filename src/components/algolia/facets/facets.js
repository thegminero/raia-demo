import { RangeInput, RefinementList, HierarchicalMenu, DynamicWidgets } from "react-instantsearch-hooks-web";
import './facets.css';
import ToggleFacet from "./toggleFacet";

function Facets(){
    return <div className="facets mt-2 w-full">
        
        <DynamicWidgets fallbackComponent={RefinementList}>
            {/* <ToggleFacet attribute="super_express" />
            <ToggleFacet attribute="status" />
            <HierarchicalMenu attributes={
                                        ['categories.lvl0',
                                        'categories.lvl1',
                                        'categories.lvl2',]
                                        } /> */}
            {/* <RangeInput attribute="price" /> */}
        </DynamicWidgets>
       
    </div>
}
export default Facets;