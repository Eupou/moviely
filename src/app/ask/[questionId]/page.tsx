import QuestionModal from "@/components/QuestionModal"
import QuestionResultContainer from "@/components/QuestionResultContainer"
import Stats from "@/components/Stats"
import questions from "@/questions.json"
import dynamic from "next/dynamic"
const QuestionResult = dynamic(() => import("@/components/QuestionResult"), {
  ssr: false,
})

type ContentProps = {
  params: {
    questionId: string
  }
}

export default function Content({ params }: ContentProps) {
  const query = decodeURIComponent(params.questionId)

  function filterAndSortResults(query: string) {
    const queryWords = query.toLowerCase().split(" ")
    return questions
      .map((item) => {
        const questionWords = item.question.toLowerCase().split(" ")
        const matches = queryWords.filter((word) =>
          questionWords.includes(word)
        ).length
        return { ...item, matches }
      })
      .filter((item) => item.matches > 0)
      .sort((a, b) => b.matches - a.matches)
  }

  const sortedQuestions = filterAndSortResults(query)

  return (
    <>
      <QuestionModal />
      <div className="flex justify-center">
        <QuestionResultContainer>
          {sortedQuestions.map((question, id) => (
            <QuestionResult
              key={id}
              path={`/question/${question.id}`}
              question={question.question}
            />
          ))}
        </QuestionResultContainer>
        <Stats />
      </div>
    </>
  )
}
