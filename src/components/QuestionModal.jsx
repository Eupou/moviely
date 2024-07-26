"use client"
import { useRef, forwardRef, useImperativeHandle, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import dynamic from "next/dynamic"
import Select from "./Select"
import DOMPurify from "dompurify"
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })
import "react-quill/dist/quill.snow.css"
import questions from "../questions.json"

const stats = {
  SCORE: 5,
  GENDER: undefined,
  QUESTION: "",
}

export default forwardRef(function QuestionModal({ setNewQuestion }, ref) {
  const [questionStats, setQuestionStats] = useState(stats)
  const [isGenderEmpty, setIsGenderEmpty] = useState("hidden")
  const [isQuestionEmpty, setIsQuestionEmpty] = useState("hidden")
  const dialogRef = useRef(null)

  const isEmpty = "text-xs font-bold text-red-600"
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic"],
      ["image"],
      ["clean"],
    ],
  }

  const formats = {
    formats: ["header", "bold", "italic"],
  }

  function addMovieGender(e) {
    setQuestionStats((prevStats) => {
      return { ...prevStats, GENDER: e.target.value }
    })
  }

  function addScore(e) {
    setQuestionStats((prevStats) => {
      return { ...prevStats, SCORE: parseInt(e.target.value) }
    })
  }

  function addQuestion(text) {
    let sanitazedText = DOMPurify.sanitize(text)
    setQuestionStats((prevStats) => {
      return { ...prevStats, QUESTION: sanitazedText }
    })
  }

  function isEditorEmpty(content) {
    const tempElement = document.createElement("div")
    tempElement.innerHTML = DOMPurify.sanitize(content)
    return (
      tempElement.textContent.trim() === "" &&
      tempElement.querySelector("img") === null
    )
  }

  function postQuestion() {
    questions.push({
      id: Math.random(),
      gender: questionStats.GENDER,
      isFirstQuestion: false,
      question: questionStats.QUESTION,
      score: questionStats.SCORE,
      answerCount: 0,
    })

    setNewQuestion(questions[questions.length - 1])
    closeModal()
  }

  function checkInputs(e) {
    e.preventDefault()
    let emptyField = false

    if (questionStats.GENDER == undefined) {
      emptyField = true
      setIsGenderEmpty(isEmpty)
    } else {
      setIsGenderEmpty("hidden")
    }

    if (isEditorEmpty(questionStats.QUESTION)) {
      console.log("esta como vazio")
      emptyField = true
      setIsQuestionEmpty(isEmpty)
    } else {
      setIsQuestionEmpty("hidden")
    }

    if (emptyField == false) {
      postQuestion()
      setQuestionStats(stats)
    }
  }

  function closeModal() {
    dialogRef.current.close()
    document.body.style.overflowY = "scroll"
  }

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal()
      },
    }
  })

  return (
    <dialog
      onClose={closeModal}
      ref={dialogRef}
      className="z-50 w-full lg:max-w-[60vw] h-full absolute top-0 rounded-lg"
    >
      <form method="dialog">
        <div className="flex flex-col p-4">
          <div className="flex justify-between">
            <p>Faça sua pergunta</p>
            <button onClick={closeModal}>
              <FontAwesomeIcon className="h-7 text-slate-400" icon={faXmark} />
            </button>
          </div>

          <div className="h-[59vh] md:h-[50vh]">
            <ReactQuill
              className="h-[40vh] mt-1"
              theme="snow"
              placeholder="Escreva sua bela pergunta"
              value={questionStats.QUESTION}
              onChange={(text) => addQuestion(text)}
              modules={modules}
              formats={formats}
            />
          </div>
          <div className={isQuestionEmpty}>
            Você realmente tem uma pergunta?
          </div>
          <menu>
            <div>
              <Select handleChange={addMovieGender}>
                <option value="">Escolha o gênero</option>
                <option value="Terror">Terror</option>
                <option value="Comédia">Comédia</option>
                <option value="Romance">Romance</option>
                <option value="Sci-fi">Sci-fi</option>
              </Select>
              <div className={isGenderEmpty}>Selecione um gênero</div>
            </div>
            <div className="flex justify-between">
              <Select className="w-20" handleChange={addScore}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </Select>
              <button
                className="mt-3 py-2 px-4 bg-black text-white font-bold text-sm rounded-full"
                onClick={checkInputs}
              >
                Faça sua pergunta
              </button>
            </div>
          </menu>
        </div>
      </form>
    </dialog>
  )
})
