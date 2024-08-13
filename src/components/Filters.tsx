"use client"
import FilterLi from "./FilterLi"
import {
  faFlask,
  faDice,
  faGhost,
  faFaceLaughSquint,
  faHeart,
} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

type FilterProps = {
  filterByGender: (gender: string) => void
}

export default function Filters({ filterByGender }: FilterProps) {
  const [activeLi, setActiveLi] = useState(0)
  const movieGender = [
    { text: "Todos os gêneros", gender: "todos", icon: faDice },
    { text: "Terror", gender: "Terror", icon: faGhost },
    { text: "Comédia", gender: "Comédia", icon: faFaceLaughSquint },
    { text: "Romance", gender: "Romance", icon: faHeart },
    { text: "Sci-fi", gender: "Sci-fi", icon: faFlask },
  ]

  function handleClick(id: number, movieGender: string) {
    setActiveLi(id)
    filterByGender(movieGender)
  }

  return (
    <aside className="hidden lg:block w-[20%] mt-5">
      <section className="w-[90%] m-auto">
        <h1 className="font-bold text-sm">Gêneros</h1>
        <hr className=" text-slate-200 bg-slate-200 my-2 h-[2px]" />
        <ul>
          {movieGender &&
            movieGender.map((gender, id) => (
              <FilterLi
                key={id}
                isActive={activeLi == id}
                handleActiveLi={() => handleClick(id, gender.gender)}
                icon={gender.icon}
              >
                {gender.text}
              </FilterLi>
            ))}
        </ul>
      </section>
    </aside>
  )
}
