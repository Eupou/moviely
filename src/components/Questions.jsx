"use client"
import QuestionCard from "./QuestionCard"
import Select from "./Select"
import questions from "../questions.json"
import { useState } from "react"

export default function Questions({ questionGender, setQuestionGender }) {
  const [questionStats, setQuestionStats] = useState("all-questions")

  function selectChange(e) {
    setQuestionGender(e.target.value)
  }

  function answerFilter(e) {
    setQuestionStats(e.target.value)
  }

  const questionByGender = questions.filter(
    (question) => questionGender == "todos" || question.gender == questionGender
  )

  const selectedQuestions = questionByGender.filter(
    (question) =>
      questionStats == "all-questions" ||
      (question.answerCount == 0 && questionStats == "no-aswer") ||
      (question.answerCount > 0 && questionStats == "answered")
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
        {selectedQuestions &&
          selectedQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              isFirstQuestion={question.isFirstQuestion}
              movieGender={question.gender}
              text={question.question}
              score={question.score}
            />
          ))}
        <div className="bg-white md:bg-transparent text-center py-5 text-xs">
          <button className="font-bold">MOSTRAR MAIS</button>
        </div>
      </div>
    </>
  )
}
