import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DOMPurify from "dompurify"

export default function Answer({ questionHTML, name }) {
  return (
    <div className="w-[90%] m-auto">
      <div className="flex items-center">
        <button className="rounded-full h-fit p-1 bg-slate-500 flex items-center justify-center">
          <FontAwesomeIcon className="h-5 w-5 text-slate-200" icon={faUser} />
        </button>
        <div className="ml-2">{name}</div>
      </div>
      <div
        className="mt-3  custom"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(questionHTML) }}
      />
    </div>
  )
}
