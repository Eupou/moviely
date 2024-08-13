import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faGear } from "@fortawesome/free-solid-svg-icons"

export default function Stats() {
  return (
    <aside className="hidden lg:block w-[30%] mt-5 mr-4">
      <div className="border-2 rounded-lg pt-5 border-slate-200">
        <div className="w-[85%] m-auto ">
          <div className="flex items-center">
            <button className=" rounded-full h-fit p-2 bg-slate-500 flex items-center justify-center">
              <FontAwesomeIcon
                className="h-10 w-10 text-slate-200"
                icon={faUser}
              />
            </button>
            <div className="font-bold ml-3">Zezinho da batata</div>
          </div>
        </div>

        <hr className="text-slate-200 bg-slate-200 h-[2px] my-3" />

        <div className="w-[85%] m-auto flex justify-between items-center pb-3">
          <div className="flex flex-col">
            <p className="text-xs font-bold">Plano atual</p>
            <p className="font-bold text-slate-700">Moviely básico</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faGear} />
          </div>
        </div>
      </div>
    </aside>
  )
}
