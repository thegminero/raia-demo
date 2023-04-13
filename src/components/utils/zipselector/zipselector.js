import { useState } from "react"
import { useRecoilState } from "recoil"
import { currentZipcodeState } from "../../../context/appstate"

const testZipCodes = ["03100", "03820", "03100", "03710", "03640", "03630"]

export default function ZipSelector() {
    const [selected, setSelected] = useState(false)
    const [cp, setCp] = useRecoilState(currentZipcodeState)

    const toggleCP = () => {
        setSelected(!selected);
    }
    const changeCP = (e) => {
        setCp(e.target.innerText)
        setSelected(!selected);
    }
    return <div className="flex w-40 items-center">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            fill="#333"
            className=""
            viewBox="0 0 20 24"
        >
            <path
                d="M10 0c5.523 0 10 4.477 10 10 0 3.372-1.802 6.676-4.774 9.813a31.128 31.128 0 01-4.254 3.726c-.195.141-.337.24-.417.293a1 1 0 01-1.11 0 15 15 0 01-.417-.293 31.125 31.125 0 01-4.254-3.727C1.802 16.677 0 13.373 0 10 0 4.477 4.477 0 10 0zm0 2a8 8 0 00-8 8c0 2.753 1.573 5.636 4.226 8.437A29.155 29.155 0 0010 21.773a29.155 29.155 0 003.774-3.335C16.427 15.636 18 12.752 18 10a8 8 0 00-8-8zm0 4a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z"
                opacity="0.85"
            ></path>
        </svg>

        <div cllassName="relative inline-block text-left pl-4">
            <div>
                <button type="button" onClick={toggleCP} cllassName="inline-flex w-full justify-center rounded-md border border-white bg-white px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    C.P. {cp}

                    <svg cllassName="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {(selected) ?
                <div cllassName="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-white focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div cllassName="py-1 flex flex-col items-center" role="none">
                        {
                            testZipCodes.map(cp => <span onClick={changeCP} key={cp} cllassName="cursor-pointer hover:bg-gray-200 w-full text-center">{cp}</span>)
                        }
                    </div>
                </div>
                :
                null}
        </div>
    </div>

}