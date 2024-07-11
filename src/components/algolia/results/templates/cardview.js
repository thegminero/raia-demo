import { useEffect } from 'react';

export default function CardView({ hit, sendEvent }) {
    useEffect(() => {

    }, [])
    const formatter = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
    });


    return <div className="w-full sm:w-72 h-96 rounded-md overflow-hidden shadow-lg my-2 mx-1 flex flex-col justify-between">
    <div className="w-full h-32">
        <img className="object-scale-down h-48 w-96 rounded-t-lg" src={hit?.thumbnail} alt={hit?.name} />
    </div>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl truncate h-8 wrap font-semibold tracking-tight text-gray-900">{hit?.name}</h5>
        </a>
        {(hit?.stock > 0) ? <div className="flex items-center mt-2.5 mb-5">
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{hit.stock}</span>
        </div>: null}
        <div className="flex items-center w-full">
        <div className="grid grid-cols-3 divide-x w-full items-center">
            <img className="w-" src="
https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fs2.drogaraia.com.br%2Fskin%2Ffrontend%2Fdrogaraia%2Fdefault%2Fimages%2Fsvg%2Fmyorders-desk.svg%20&w=48&q=75" alt="pickup"/>
            {hit?.super_express ? <img className=" py-4" src="
https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fs2.drogaraia.com.br%2Fskin%2Ffrontend%2Fdrogaraia%2Fdefault%2Fimages%2Fsvg%2Fmyorders-desk.svg%20&w=48&q=75" alt="express shipping"/> : null }
            {hit?.isfullfilment ? <span className="text-green-600 uppercase text-xs">envio gratis</span> : null }
            </div>
        </div>
        <div className="flex items-center justify-between">
        { (hit?.discount != 0) ?
                <div className="special">
                    {/* <span className="line-through text-red-600 text-xl font-bold">{formatter.format(hit?.valueTo)}</span> */}
                    <span className="pl-2 text-2xl font-bold text-gray-900">{formatter.format(hit?.valueTo)}</span> 
                    
                </div>
                :
                <span className="text-3xl font-bold text-gray-900">{formatter.format(hit?.price)}</span>

        }
            {/* <span className="text-3xl font-bold text-gray-900 ">{formatter.format(hit?.price)}</span> */}
            {/* <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a> */}
        </div>
    </div>
</div>

    // return <div className="w-full sm:w-72 h-72 rounded-md overflow-hidden shadow-lg my-2 mx-1 flex flex-col justify-between">
    //     {/* {
    //         (hit?.stores?.["1"]?.undiscounted_price && hit?.stores?.["1"]?.discounted_price) ? <span className="absolute ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-400 rounded-md">- {Math.floor(100 - (hit?.stores?.["1"]?.undiscounted_price * 100 / hit?.stores?.["1"]?.discounted_price))} %</span>
    //             :
    //             null
    //     } */}
    //     <div className="img-container w-full h-18 flex justify-center items-center align-center">
    //         <a href={`https://www.sanborns.com.mx/producto/${hit.id}/${hit.title_seo}`} >
    //             <img className="w-40" src={hit.images[0]?.link} alt={hit.title} />
    //         </a>
    //     </div>
    //     <div className="px-2 py-2 h-28 flex justify-center items-center">
    //         <div className="text-xl mb-2  w-full  items-center">
    //             <Highlight hit={hit} attribute="title" />
    //         </div>
    //     </div>

    //     <div className="px-6 pt-4 pb-2">
    //         {hit.isfree ?
    //             <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-gray-500 rounded-md">Envio Gratis</span>
    //             :
    //             null
    //         }
    //         {/* {
    //             hit?.delivery_time ?
    //                 calculateDelivery(hit?.delivery_time)
    //                 :
    //                 null
    //         } */}
    //         {hit?.super_express ? <img className="w-4 ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-white rounded-md" src="https://www.sanborns.com.mx/img/fullf.png" alt="express shipping"/> : null }
    //         {/* {hit?.attributes?.condition_type[0] == "Reacondicionado" ? <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-teal-400 rounded-md">Reacondicionado</span> : null } */}
            
    //         {/* <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-white rounded-md">{hit.sort_priority}</span> */}
    //     </div>
    //     <div className="pricing">
    //         <span className="text-black ">{formatter.format(hit?.price)}</span>
    //         { (hit?.discounted_price != hit?.price) ?
    //             <div className="special">
    //                 <span className="line-through text-red-600">{hit?.price}</span>
    //                 <span className="pl-2">{hit?.discounted_price}</span> 
    //                 {formatter.format(hit?.price)}
    //             </div>
    //             :
    //             <span className="">{hit?.stores.find( prod => prod.available)}</span>
    //         }

    //     </div>
    //     <div>

    //     </div>
    //     <div className="add-to-bag w-full justify-end">
    //         <button onClick={() => {
    //       sendEvent('conversion', hit, 'Product Ordered');
    //     }} className="shadow-md w-12 bg-red-400 hover:bg-red-600 rounded-full p-3 absolute ml-20 -mt-16">
    //             <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="#FFF"
    //                 className=""
    //                 viewBox="0 0 14 14"
    //             >
    //                 <path d="M13 8H8v5c0 .55-.45 1-1 1s-1-.45-1-1V8H1c-.55 0-1-.45-1-1s.45-1 1-1h5V1c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
    //             </svg>
    //         </button>
    //     </div>

    // </div>
} 