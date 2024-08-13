"use client"
import { createContext } from "react"
import { useState } from "react"

export const ModalContext = createContext({
  isModalOpen: false,
  setIsModalOpen: (p0) => {},
})

export function ModalContextProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const ctxValue = {
    isModalOpen: isModalOpen,
    setIsModalOpen: setIsModalOpen,
  }

  return (
    <ModalContext.Provider value={ctxValue}>{children}</ModalContext.Provider>
  )
}
