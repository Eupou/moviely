"use client"
import AddQuestion from "@/components/AddQuestion"
import Filters from "@/components/Filters"
import Questions from "@/components/Questions"
import Stats from "@/components/Stats"
import QuestionModal from "@/components/QuestionModal"
import { useState } from "react"

type NewQuestion = {
  id: number
  isFirstQuestion: boolean
  gender: string
  question: string
  score: number
}

export default function Home() {
  const [questionGender, setQuestionGender] = useState("todos")
  const [newQuestion, setNewQuestion] = useState<NewQuestion | null>(null)

  function filterQuestions(gender: string) {
    setQuestionGender(gender)
    if (newQuestion != null) {
      setNewQuestion(null)
    }
  }

  return (
    <>
      <main className="lg:flex bg-slate-200 md:bg-white">
        <Filters filterByGender={filterQuestions} />
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
