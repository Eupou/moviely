"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.code == "Enter" || event.key == "Enter" || event.keyCode === 13) {
      event.preventDefault()
      makeQuestion()
      inputRef.current!.blur()
    }
  }

  function makeQuestion() {
    const inputValue = inputRef.current!.value.trim()
    if (inputValue != "") {
      const message = encodeURIComponent(inputRef.current!.value)
      router.push(`/ask/${message}`)
    }
  }

  return (
    <div className="flex group items-center bg-slate-100 p-1 w-[58%] md:w-[55%] rounded-full hover:bg-slate-200 transition">
      <input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        className="bg-slate-100 w-full pl-2 focus:outline-none group-hover:bg-slate-200 transition"
        type="search"
        placeholder="Pesquisar..."
      />
      <div className=" flex justify-center items-center h-[25px] w-[30px]">
        <FontAwesomeIcon
          className="h-3"
          icon={faMagnifyingGlass}
          onClick={makeQuestion}
        />
      </div>
    </div>
  )
}
