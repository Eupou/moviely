import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { twMerge } from "tailwind-merge"

export default function Select({ children, className, handleChange }) {
  return (
    <div
      className={twMerge(
        "relative flex items-center mt-3 md:w-[47%] h-10 bg-slate-200 rounded-full",
        className
      )}
    >
      <FontAwesomeIcon
        className="h-4 w-4 absolute right-3"
        icon={faCaretDown}
      />
      <select
        className="p-2 focus:outline-none bg-transparent rounded-full w-full appearance-none absolute "
        name=""
        id=""
        onChange={handleChange}
      >
        {children}
      </select>
    </div>
  )
}
