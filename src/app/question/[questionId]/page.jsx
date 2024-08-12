"use client"
import TextEditor from "@/components/TextEditor"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import questions from "@/questions.json"
import { useState } from "react"
import DOMPurify from "dompurify"
import dynamic from "next/dynamic"
import QuestionModal from "@/components/QuestionModal"
const Answer = dynamic(() => import("@/components/Answer"), { ssr: false })

export default function Question({ params }) {
  const [isAswering, setIsAnswering] = useState(false)
  const [editorText, setEditorText] = useState()
  const questionObj = questions
    .filter((question) => question.id == params.questionId)
    .pop()

  const questionText = questionObj.question
  const score = questionObj.score
  const answers = questionObj.answers
  const username = questionObj.username

  function handleSubmit(e) {
    e.preventDefault()
    const temp = document.createElement("div")
    temp.innerHTML = editorText
    if (temp.innerText.trim() == "") return

    setIsAnswering(false)

    const newAnswer = {
      id: Math.random(),
      username: "zezinho da batata",
      answer: editorText,
    }

    answers.push(newAnswer)
  }

  console.log(questionObj)

  return (
    <>
      <div className="w-full pb-8">
        <div className="w-[85%] m-auto mt-5 md:p-6 md:border-2 border-slate-200 rounded-lg lg:w-[70%]">
          <div className="flex items-center">
            <button className="rounded-full h-fit p-1 bg-slate-500 flex items-center justify-center">
              <FontAwesomeIcon
                className="h-5 w-5 text-slate-200"
                icon={faUser}
              />
            </button>
            <div className="ml-3">{username}</div>
          </div>
          <div
            className="mt-5"
            dangerouslySetInnerHTML={{ __html: questionText }}
          />

          {isAswering ? (
            <>
              <button
                onClick={() => setIsAnswering(false)}
                className="mt-5 bg-black text-white w-full  py-1 uppercase font-bold rounded-full flex items-center justify-center"
              >
                Desistir
              </button>

              <form onSubmit={handleSubmit}>
                <TextEditor
                  editorText={editorText}
                  handleTextChange={(e) => setEditorText(DOMPurify.sanitize(e))}
                  className="mt-5"
                />
                <button className=" bg-black text-white w-full py-1 uppercase font-bold rounded-full flex items-center justify-center">
                  Responder
                </button>
              </form>
            </>
          ) : (
            <button
              onClick={() => setIsAnswering(true)}
              className="mt-5 bg-black text-white w-full lg:w-[250px] py-1 uppercase font-bold rounded-full flex items-center justify-center"
            >
              <span className="text-4xl font-thin lowercase mr-3 lg:hidden">
                +
              </span>{" "}
              Responder +{score} pts
            </button>
          )}
        </div>

        <section className="mt-4">
          <div className="w-[90%] m-auto lg:hidden">
            <h1 className="font-bold text-lg">Respostas</h1>
            <div className="text-slate-700">
              {answers.length} {answers.length == 1 ? "respota" : "respostas"}
            </div>
          </div>

          <hr className="h-[2px] bg-slate-200 my-3 lg:hidden" />

          {answers.length == 0 && (
            <div className="text-center mt-3">
              Seja o primeiro a reponder e ganhe pontos
            </div>
          )}

          {answers.map((answersObj) => (
            <div
              key={answersObj.id}
              className="border-b-8 border-slate-200 py-10 md:border-2 rounded-lg md:w-[85%] lg:w-[70%] md:m-auto md:mt-5"
            >
              <Answer
                questionHTML={answersObj.answer}
                name={answersObj.username}
              />
            </div>
          ))}
        </section>
      </div>

      <QuestionModal />
    </>
  )
}
