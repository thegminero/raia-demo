import { useEffect } from "react"
import { Link } from "react-router-dom";

export default function QrySuggestView({ hit, sendEvent }) {
    useEffect(()=>{
       console.log(hit);
    }, [hit])
    return <li className="w-full">
    <div className="">
        <div className="">
            <Link to={`/search?q=${hit?.query}`} className="cursor-pointer text-md text-gray-600 truncate">
                {hit?.query}
            </Link>
        </div>
    </div>
</li>
}