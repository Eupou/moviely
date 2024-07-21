import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

export default function QuestionCard() {
  const text =
    "As taxas de mortalidade da população mundial se motivam elevadas e aexpectativa de vida baixa durante a maior parte da história de acordo com o que"
  const formatedText = text.slice(0, 147).concat("...")

  return (
    <div className="mt-2 md:mt-0 md:border-b-2 md:border-b-slate-200 bg-white md:bg-transparent">
      <div className="w-[90%] m-auto py-5">
        <div className="flex justify-between">
          <div className="flex items-center">
            <button className="rounded-full h-fit p-1 bg-slate-500 flex items-center justify-center">
              <FontAwesomeIcon
                className="h-5 w-5 text-slate-200"
                icon={faUser}
              />
            </button>
            <div className="ml-2 flex flex-col text-xs">
              <p className=" bg-purple-700 p-1  rounded-lg text-white font-medium">
                Primeira Pergunta
              </p>
              <p className="pt-1 text-sm">Terror</p>
            </div>
          </div>
          <div className="rounded-full flex items-center h-fit px-2 bg-slate-100">
            <div className="bg-black text-white -rotate-6 font-bold text-xs  leading-none h-fit py-[1px] px-[2px]">
              M
            </div>
            <p className="ml-1">+5</p>
          </div>
        </div>

        <Link href="">
          <p className="hover:underline">{formatedText}</p>
        </Link>

        <div className="flex">
          <div className="grow"></div>
          <menu>
            <li>
              <button disabled></button>
            </li>
            <li>
              <button className="px-3 py-1 border-[1.5px] font-bold text-[10px] md:text-sm border-black rounded-full">
                RESPONDER
              </button>
            </li>
          </menu>
        </div>
      </div>
    </div>
  )
}
