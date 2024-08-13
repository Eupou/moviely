"use client"
import DOMPurify from "dompurify"
import Link from "next/link"

type QuestionResultProps = {
  question: string
  path: string
}

export default function QuestionResult({
  question,
  path,
}: QuestionResultProps) {
  let cleanText
  if (question) {
    const tempElement = document.createElement("div")
    tempElement.innerHTML = DOMPurify.sanitize(question)
    cleanText = tempElement.innerHTML.slice(0, 146).concat("...")
  }

  return (
    <div className="py-8 border-b-4 md:border-b-2 border-b-slate-200">
      <div className="w-[90%] m-auto">
        <Link
          className="hover:underline"
          href={path}
          dangerouslySetInnerHTML={{ __html: cleanText! }}
        ></Link>
      </div>
    </div>
  )
}
