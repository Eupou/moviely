import { useState, useContext, useRef } from "react"
import DOMPurify from "dompurify"
import questions from "../questions.json"
import { ModalContext } from "@/context/ModalContext"

const INITIAL_STATS = {
  SCORE: 5,
  GENDER: undefined,
  QUESTION: "",
}

export default function useQuestionModal() {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext)
  const [questionStats, setQuestionStats] = useState(INITIAL_STATS)
  const [isGenderEmpty, setIsGenderEmpty] = useState("hidden")
  const [isQuestionEmpty, setIsQuestionEmpty] = useState("hidden")
  const [newQuestion, setNewQuestion] = useState()
  const ref = useRef(null)
  const isEmpty = "text-xs font-bold text-red-600"

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
      answers: [],
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
      emptyField = true
      setIsQuestionEmpty(isEmpty)
    } else {
      setIsQuestionEmpty("hidden")
    }

    if (emptyField == false) {
      postQuestion()
      setQuestionStats(INITIAL_STATS)
    }
  }

  function closeModal() {
    setIsModalOpen(false)
    ref.current.close()
    document.body.style.overflowY = "scroll"
  }

  if (isModalOpen) {
    ref.current.showModal()
  }

  return {
    questionStats,
    isGenderEmpty,
    isQuestionEmpty,
    ref,
    newQuestion,
    addMovieGender,
    addScore,
    addQuestion,
    checkInputs,
    closeModal,
  }
}
