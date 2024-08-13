export default function QuestionResultContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="md:border-2 border-slate-200 w-full rounded-lg m-auto md:w-[90%] lg:w-[50%] mt-5 lg:ml-0 lg:mr-11 md:mb-10">
      {children}
      <menu className="text-center py-4">
        <button className="font-bold text-xs uppercase">mostrar mais</button>
      </menu>
    </div>
  )
}
