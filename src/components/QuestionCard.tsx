import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { twMerge } from "tailwind-merge"
import DOMPurify from "dompurify"

type QuestionCardProps = {
  text: string
  isFirstQuestion: boolean
  movieGender: string
  score: number
  animation?: string
  path: string
}

export default function QuestionCard({
  text,
  isFirstQuestion,
  movieGender,
  score,
  animation,
  path,
}: QuestionCardProps) {
  let formatedText = text

  if (text) {
    const tempElement = document.createElement("div")
    tempElement.innerHTML = DOMPurify.sanitize(text)

    if (tempElement.textContent == null) return

    if (tempElement.textContent.length > 146) {
      formatedText = tempElement.innerHTML.slice(0, 147).concat("...")
    } else {
      formatedText = tempElement.innerHTML
    }
  }

  return (
    <div
      className={twMerge(
        "mt-2 md:mt-0 md:border-b-2 md:border-b-slate-200 bg-white md:bg-transparent",
        animation
      )}
    >
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
              {isFirstQuestion && (
                <p className=" bg-purple-700 p-1  rounded-lg text-white font-medium">
                  Primeira Pergunta
                </p>
              )}
              <p className="pt-1 text-sm">{movieGender}</p>
            </div>
          </div>
          <div className="rounded-full flex items-center h-fit px-2 bg-slate-100">
            <div className="bg-black text-white -rotate-6 font-bold text-xs  leading-none h-fit py-[1px] px-[2px]">
              M
            </div>
            <p className="ml-1">+{score}</p>
          </div>
        </div>

        <Link href={path}>
          <p
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: formatedText }}
          ></p>
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
