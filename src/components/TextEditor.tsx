"use client"
import dynamic from "next/dynamic"
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })
import "react-quill/dist/quill.snow.css"
import { ClassNameValue, twMerge } from "tailwind-merge"

type TextEditor = {
  placeholderText?: string
  editorText: string
  handleTextChange: (arg0: string) => void
  className?: ClassNameValue
}

export default function TextEditor({
  placeholderText,
  editorText,
  handleTextChange,
  className,
}: TextEditor) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic"],
      ["image"],
      ["clean"],
    ],
  }

  const formats = ["header", "bold", "italic"]

  return (
    <ReactQuill
      className={twMerge("h-[50vh] pb-14 mt-1", className)}
      theme="snow"
      placeholder={placeholderText}
      value={editorText}
      onChange={(text) => handleTextChange(text)}
      modules={modules}
      formats={formats}
    />
  )
}
