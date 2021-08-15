import Image from "next/image"
import { SearchIcon } from '@heroicons/react/solid'
const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">

            {/* left      */}

            <div className="relative flex items-center h-10 cursor-pointer my-auto">

                <Image src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"

                />

            </div>

            {/* search bar */}

            <div className="flex items-center md:border-2
            py-2
            md:shadow-sm
            rounded-full
            ">

                <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-grey-600 placeholder-gray-400" type="text" placeholder="Start your search" />
                <SearchIcon className="md:mx-2 h-8 hidden md:inline-flex bg-red-400 rounded-full text-white p-2 cursor-pointer" />
            </div>

            <div></div>
        </header>
    )
}

export default Header
