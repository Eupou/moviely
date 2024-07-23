export default function AddQuestion({ handleClick }) {
  return (
    <div className="sticky bottom-4 z-40 mt-5 flex justify-end items-center w-full">
      <div className="mr-2 p-2 rounded-lg bg-blue-950 text-white font-bold text-xs">
        Faça sua pergunta
      </div>
      <button
        onClick={() => handleClick()}
        className="mr-4 flex items-center justify-center bg-black text-4xl text-white w-14 h-14 rounded-full"
      >
        +
      </button>
    </div>
  )
}
