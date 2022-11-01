import '../styles/globals.css'
import { ReactNode } from 'react'

export default function RootLayout({ children }: {
  children: ReactNode
}) {
  return (
    <html>
      <head>
        <title>AAA</title>
      </head>
      <body>
        <main className='main'>
          {children}
        </main>
      </body>
    </html>
  )
}
