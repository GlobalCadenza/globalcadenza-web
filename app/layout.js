// app/layout.js
import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','700'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Global Cadenza | Consultora Musical',
  description:
    'Ayudamos a jóvenes músicos a estudiar en conservatorios y escuelas de Europa: admisión, permisos, residencia y acompañamiento completo.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-brand-bg text-brand-text`}>
        {children}
      </body>
    </html>
  )
}
