import Filters from "@/components/Filters"
import Header from "@/components/Header"
import Questions from "@/components/Questions"
import Stats from "@/components/Stats"

export default function Home() {
  return (
    <>
      <Header />
      <main className="lg:flex bg-slate-200 md:bg-white md:pb-14">
        <Filters />
        <Questions />
        <Stats />
      </main>
    </>
  )
}
