import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import SearchBar from "./SearchBar"

export default function Header({ handleClick }) {
  return (
    <header className="bg-white flex h-[8vh] sm:h-[10vh] items-center justify-around border-b-2 border-slate-100 sticky top-0 z-50">
      <Link
        href="/"
        className="-rotate-6 text-xs sm:text-base px-1 border-transparent italic text-white bg-black font-black"
      >
        MOVIELY
      </Link>
      <SearchBar />
      <menu className="flex items-center">
        <li className="hidden sm:flex items-center justify-center hover:bg-slate-100  p-2 rounded-full transition">
          <button className=" text-sm font-bold" onClick={handleClick}>
            PERGUNTAR
          </button>
        </li>
        <li className="hidden md:flex items-center justify-center hover:bg-slate-100 ml-3 p-2 rounded-full transition">
          <button>
            <FontAwesomeIcon className="h-5 w-5" icon={faBell} />
          </button>
        </li>
        <li className="flex items-center justify-center hover:bg-slate-100 md:ml-3 p-2 rounded-full transition">
          <button className=" rounded-full h-fit p-1 bg-slate-500 flex items-center justify-center">
            <FontAwesomeIcon className="h-5 w-5 text-slate-200" icon={faUser} />
          </button>
        </li>
        <li>
          <button className="hidden lg:block  ml-3 py-2 px-3 rounded-full text-sm font-bold bg-blue-600 hover:bg-blue-800 text-white">
            ASSINE AGORA
          </button>
        </li>
      </menu>
    </header>
  )
}
