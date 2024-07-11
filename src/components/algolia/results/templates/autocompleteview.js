/**
 * 
 * Federated search product view template
 * make sure to replace attributes accordingly 
 * @returns 
 */

export default function AutocompleteView({ hit, sendEvent }) {

    const titleAttribute = 'name'
    const imageThumbnail = 'thumbnail'

    return <li className="py-3 sm:py-4 cursor-pointer">
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
                {(hit?.[imageThumbnail])?<img className="w-24 h-24 rounded-full" src={`${hit?.[imageThumbnail]}`} alt={hit?.[titleAttribute]} />:null}
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                    {hit?.[titleAttribute]}
                </p>
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                    {hit?.brand}
                </p>
            </div>
           
        </div>
    </li>
}
