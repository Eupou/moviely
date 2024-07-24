"use client"
import AddQuestion from "@/components/AddQuestion"
import Filters from "@/components/Filters"
import Header from "@/components/Header"
import Questions from "@/components/Questions"
import Stats from "@/components/Stats"
import QuestionModal from "@/components/QuestionModal"
import { useRef, useState } from "react"

export default function Home() {
  const buttonRef = useRef(null)
  const [questionGender, setQuestionGender] = useState("todos")
  const [newQuestion, setNewQuestion] = useState()

  function openQuestionModal() {
    document.body.style.overflow = "hidden"
    buttonRef.current.open()
  }

  function filterQuestions(gender) {
    setQuestionGender(gender)
    if (newQuestion != "") {
      setNewQuestion("")
    }
  }

  return (
    <>
      <Header handleClick={openQuestionModal} />
      <main className="lg:flex bg-slate-200 md:bg-white">
        <Filters
          filterByGender={filterQuestions}
          setNewQuestion={setNewQuestion}
        />
        <Questions
          newQuestion={newQuestion}
          setNewQuestion={setNewQuestion}
          questionGender={questionGender}
          setQuestionGender={setQuestionGender}
        />
        <Stats />
      </main>
      <AddQuestion handleClick={openQuestionModal} />
      <QuestionModal ref={buttonRef} setNewQuestion={setNewQuestion} />
    </>
  )
}
