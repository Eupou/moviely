import QuestionCard from "./QuestionCard"
import Select from "./Select"

export default function Questions() {
  return (
    <>
      <div className="md:w-[85%] lg:w-[45%] m-auto md:mt-5 md:border-2 border-slate-200 rounded-lg">
        <div className="bg-white md:bg-transparent w-[100%] py-3 md:border-b-2 border-b-slate-200">
          <div className="w-[90%] m-auto flex flex-col">
            <div className="hidden md:block font-bold text-5xl my-2">
              Questões e repostas sobre todos os filmes
            </div>
            <div className="flex flex-col md:flex-row md:justify-between">
              <Select className={"lg:hidden"}>
                <option value="todos">Qualquer tipo de filme</option>
                <option value="terror">terror</option>
              </Select>
              <Select>
                <option value="todas">Todas</option>
                <option value="sem respostas">Sem respostas</option>
                <option value="respondidas">Respondidas</option>
              </Select>
            </div>
          </div>
        </div>
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <div className="bg-white md:bg-transparent text-center py-5 text-xs">
          <button className="font-bold">MOSTRAR MAIS</button>
        </div>
      </div>
    </>
  )
}
