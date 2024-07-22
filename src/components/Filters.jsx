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

export default function Filters() {
  const [activeLi, setActiveLi] = useState(0)
  const movieGender = [
    { text: "Todos os gêneros", icon: faDice },
    { text: "Terror", icon: faGhost },
    { text: "Comédia", icon: faFaceLaughSquint },
    { text: "Romance", icon: faHeart },
    { text: "Sci-fi", icon: faFlask },
  ]

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
                handleActiveLi={() => setActiveLi(id)}
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
