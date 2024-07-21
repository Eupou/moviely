import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function SearchBar() {
  return (
    <div className="flex group items-center bg-slate-100 p-1 w-[58%] md:w-[55%] rounded-full hover:bg-slate-200 transition">
      <input
        className="bg-slate-100 w-full pl-2 focus:outline-none group-hover:bg-slate-200 transition"
        type="text"
        placeholder="Pesquisar..."
      />
      <div className=" flex justify-center items-center h-[25px] w-[30px]">
        <FontAwesomeIcon className="h-3" icon={faMagnifyingGlass} />
      </div>
    </div>
  )
}
