

export default function AutocompleteView({ hit, sendEvent }) {

        return <li className="py-3 sm:py-4 cursor-pointer">
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
                {(hit?.images)?<img className="w-24 h-24 rounded-full" src={hit?.images[0]?.link} alt={hit?.title} />:null}
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                    {hit.title}
                </p>
                <p className="text-sm text-gray-500 truncate ">
                    {hit?.precio}
                </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900">
                ${hit?.price}
            </div>
        </div>
    </li>
}
