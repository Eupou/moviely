"use client"
import AddQuestion from "@/components/AddQuestion"
import Filters from "@/components/Filters"
import Header from "@/components/Header"
import Questions from "@/components/Questions"
import Stats from "@/components/Stats"
import QuestionModal from "@/components/QuestionModal"
import { useRef, useState } from "react"

export default function Home() {
  const buttonRef = useRef(null)

  function toggleQuestion() {
    document.body.style.overflow = "hidden"
    buttonRef.current.open()
  }

  return (
    <>
      <Header handleClick={toggleQuestion} />
      <main className="lg:flex bg-slate-200 md:bg-white">
        <Filters />
        <Questions />
        <Stats />
      </main>
      <AddQuestion handleClick={toggleQuestion} />
      <QuestionModal ref={buttonRef} />
    </>
  )
}
