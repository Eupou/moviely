"use client"
import dynamic from "next/dynamic"
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })
import "react-quill/dist/quill.snow.css"
import { twMerge } from "tailwind-merge"

export default function TextEditor({
  placeholderText,
  editorText,
  handleTextChange,
  className,
}) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic"],
      ["image"],
      ["clean"],
    ],
  }

  const formats = {
    formats: ["header", "bold", "italic"],
  }

  return (
    <ReactQuill
      className={twMerge("h-[40vh] mt-1", className)}
      theme="snow"
      placeholder={placeholderText}
      value={editorText}
      onChange={(text) => handleTextChange(text)}
      modules={modules}
      formats={formats}
    />
  )
}
