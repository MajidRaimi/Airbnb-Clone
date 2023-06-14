import './globals.css'
import { Nunito } from 'next/font/google'

import { NavBar } from './components'

const font = Nunito({
  subsets: ['latin']
})

export const metadata = {
  title: 'Airbnb',
  description: 'Simple Airbnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}
        </body>
    </html>
  )
}
