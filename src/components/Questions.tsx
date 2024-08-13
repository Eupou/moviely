"use client"
import dynamic from "next/dynamic"
import Select from "./Select"
import questions from "../questions.json"
import { useState } from "react"
const QuestionCard = dynamic(() => import("./QuestionCard"), { ssr: false })

type QuestionProps = {
  questionGender: string
  setQuestionGender: (arg: string) => void
  newQuestion: {
    id: number
    isFirstQuestion: boolean
    gender: string
    question: string
    score: number
  } | null
  setNewQuestion: (arg: null) => void
}

export default function Questions({
  questionGender,
  setQuestionGender,
  newQuestion,
  setNewQuestion,
}: QuestionProps) {
  const [questionStats, setQuestionStats] = useState("all-questions")

  function selectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setQuestionGender(e.target.value)
    if (newQuestion != null) {
      setNewQuestion(null)
    }
  }

  function answerFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    setQuestionStats(e.target.value)
    if (newQuestion != null) {
      setNewQuestion(null)
    }
  }

  const questionByGender = questions.filter(
    (question) => questionGender == "todos" || question.gender == questionGender
  )

  const selectedQuestions = questionByGender.filter(
    (question) =>
      questionStats == "all-questions" ||
      (question.answers.length == 0 && questionStats == "no-aswer") ||
      (question.answers.length > 0 && questionStats == "answered")
  )

  return (
    <>
      <div className="md:w-[85%] lg:w-[45%] m-auto md:mt-5 md:border-2 border-slate-200 rounded-lg">
        <div className="bg-white md:bg-transparent w-[100%] py-3 md:border-b-2 border-b-slate-200">
          <div className="w-[90%] m-auto flex flex-col">
            <div className="hidden md:block font-bold text-5xl my-2">
              Questões e repostas sobre todos os filmes
            </div>
            <div className="flex flex-col md:flex-row md:justify-between">
              <Select className={"lg:hidden"} handleChange={selectChange}>
                <option value="todos">Qualquer tipo de filme</option>
                <option value="Terror">Terror</option>
                <option value="Comédia">Comédia</option>
                <option value="Romance">Romance</option>
                <option value="Sci-fi">Sci-fi</option>
              </Select>
              <Select handleChange={answerFilter}>
                <option value="all-questions">Todas</option>
                <option value="no-aswer">Sem respostas</option>
                <option value="answered">Respondidas</option>
              </Select>
            </div>
          </div>
        </div>
        {newQuestion && (
          <QuestionCard
            animation="borderAnimation"
            key={newQuestion.id}
            isFirstQuestion={newQuestion.isFirstQuestion}
            movieGender={newQuestion.gender}
            text={newQuestion.question}
            score={newQuestion.score}
            path={`/question/${newQuestion.id}`}
          />
        )}
        {selectedQuestions &&
          selectedQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              isFirstQuestion={question.isFirstQuestion}
              movieGender={question.gender}
              text={question.question}
              score={question.score}
              path={`/question/${question.id}`}
            />
          ))}
        <div className="bg-white md:bg-transparent text-center py-5 text-xs">
          <button className="font-bold">MOSTRAR MAIS</button>
        </div>
      </div>
    </>
  )
}
