import { useInstantSearch } from 'react-instantsearch-hooks';

export default function SuggestionsTitle(){
    const { results } = useInstantSearch();

    return results?.nbHits ? <h5 className="text-xl font-bold leading-none text-gray-900 ">Suggestiones</h5> : null;
}