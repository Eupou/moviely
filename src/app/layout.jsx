import "./globals.css"
import Header from "@/components/Header"
import { ModalContextProvider } from "@/context/ModalContext"

export const metadata = {
  title: "Moviely",
  description: "Questões e respostas sobre os filmes mais legais",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ModalContextProvider>
          <Header />
          {children}
        </ModalContextProvider>
      </body>
    </html>
  )
}
