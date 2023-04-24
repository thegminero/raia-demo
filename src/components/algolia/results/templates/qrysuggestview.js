import { useEffect } from "react"
import { Link } from "react-router-dom";

export default function QrySuggestView({ hit, sendEvent }) {
    useEffect(()=>{
       console.log(hit);
    }, [hit])
    return <li class="w-full">
    <div class="">
        <div class="">
            <Link to={`/search?q=${hit?.query}`} class="cursor-pointer text-md text-gray-600 truncate">
                {hit?.query}
            </Link>
        </div>
    </div>
</li>
}