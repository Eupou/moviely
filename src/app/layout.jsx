import "./globals.css"

export const metadata = {
  title: "Moviely",
  description: "Questões e respostas sobre os filmes mais legais",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
