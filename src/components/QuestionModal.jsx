"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import Select from "./Select"
import TextEditor from "./TextEditor"
import useQuestionModal from "@/hooks/useQuestionModal"

export default function QuestionModal({ setNewQuestion }) {
  const {
    ref,
    questionStats,
    isQuestionEmpty,
    isGenderEmpty,
    closeModal,
    addQuestion,
    addMovieGender,
    addScore,
    checkInputs,
  } = useQuestionModal(setNewQuestion)

  return (
    <dialog
      onClose={closeModal}
      ref={ref}
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
            <TextEditor
              placeholderText="Escreva sua bela pergunta"
              handleTextChange={addQuestion}
              editorText={questionStats.QUESTION}
            />
          </div>
          <div className={isQuestionEmpty}>
            Você realmente tem uma pergunta?
          </div>
          <menu>
            <div>
              <Select handleChange={addMovieGender}>
                <option value="">Escolha o gênero</option>
                <option value="Terror">Terror</option>
                <option value="Comédia">Comédia</option>
                <option value="Romance">Romance</option>
                <option value="Sci-fi">Sci-fi</option>
              </Select>
              <div className={isGenderEmpty}>Selecione um gênero</div>
            </div>
            <div className="flex justify-between">
              <Select className="w-20" handleChange={addScore}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </Select>
              <button
                className="mt-3 py-2 px-4 bg-black text-white font-bold text-sm rounded-full"
                onClick={checkInputs}
              >
                Faça sua pergunta
              </button>
            </div>
          </menu>
        </div>
      </form>
    </dialog>
  )
}
