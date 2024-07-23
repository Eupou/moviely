"use client"
import { useRef, forwardRef, useImperativeHandle, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import dynamic from "next/dynamic"
import Select from "./Select"
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })
import "react-quill/dist/quill.snow.css"

export default forwardRef(function QuestionModal({ props }, ref) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  }

  const formats = {
    formats: [
      "header",
      "bold",
      "italic",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
    ],
  }

  const [questionText, setQuestionText] = useState("")
  const dialogRef = useRef(null)

  function closeModal() {
    dialogRef.current.close()
    document.body.style.overflowY = "scroll"
  }

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal()
      },
    }
  })

  return (
    <dialog
      ref={dialogRef}
      className="z-50 w-full lg:max-w-[60vw] h-full absolute top-0 rounded-lg"
    >
      <form method="dialog">
        <div className="flex flex-col p-4">
          <div className="flex justify-between">
            <p>Faça sua pergunta</p>
            <button onClick={closeModal}>
              <FontAwesomeIcon className="h-7 text-slate-400" icon={faXmark} />
            </button>
          </div>

          <div className="h-[59vh] md:h-[50vh]">
            <ReactQuill
              className="h-[40vh] mt-1"
              theme="snow"
              placeholder="Escreva sua bela pergunta"
              value={questionText}
              onChange={setQuestionText}
              modules={modules}
              formats={formats}
            />
          </div>
          <menu>
            <Select>
              <option value="">Escolha o gênero</option>
              <option value="terro">Terror</option>
              <option value="comedia">Comédia</option>
              <option value="comedia">Sci-fi</option>
            </Select>
            <div className="flex justify-between">
              <Select className="w-20">
                <option value="0">0</option>
                <option value="0">0</option>
                <option value="0">0</option>
                <option value="0">0</option>
              </Select>
              <button className="mt-3 py-2 px-4 bg-black text-white font-bold text-sm rounded-full">
                Faça sua pergunta
              </button>
            </div>
          </menu>
        </div>
      </form>
    </dialog>
  )
})
