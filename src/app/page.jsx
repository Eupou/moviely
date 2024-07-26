"use client"
import AddQuestion from "@/components/AddQuestion"
import Filters from "@/components/Filters"
import Questions from "@/components/Questions"
import Stats from "@/components/Stats"
import QuestionModal from "@/components/QuestionModal"
import { useState } from "react"

export default function Home() {
  const [questionGender, setQuestionGender] = useState("todos")
  const [newQuestion, setNewQuestion] = useState()

  function filterQuestions(gender) {
    setQuestionGender(gender)
    if (newQuestion != "") {
      setNewQuestion("")
    }
  }

  return (
    <>
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
      <AddQuestion />
      <QuestionModal setNewQuestion={setNewQuestion} />
    </>
  )
}
