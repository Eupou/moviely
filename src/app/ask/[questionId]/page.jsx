import QuestionModal from "@/components/QuestionModal"

export default function contect({ params }) {
  const rawText = decodeURIComponent(params.questionId)

  return (
    <>
      <h1>{rawText}</h1>
      <QuestionModal />
    </>
  )
}
