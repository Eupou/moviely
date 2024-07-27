"use client"
import DOMPurify from "dompurify"
import Link from "next/link"

export default function QuestionResult({ question }) {
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
          href="/"
          dangerouslySetInnerHTML={{ __html: cleanText }}
        ></Link>
      </div>
    </div>
  )
}
