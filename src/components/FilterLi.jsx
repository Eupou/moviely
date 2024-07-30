import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function FilterLi({ isActive, handleActiveLi, icon, children }) {
  const selected = isActive ? "bg-slate-200" : null
  return (
    <li
      className={`flex items-center hover:cursor-pointer mt-1 rounded-md p-1 hover:bg-slate-200 ${selected}`}
      onClick={handleActiveLi}
    >
      <FontAwesomeIcon className="w-4" icon={icon} />
      <p className="ml-2 font-bold">{children}</p>
    </li>
  )
}
