import './globals.css'

export const metadata = {
  title: 'Global Cadenza | Consultora Musical',
  description:
    'Ayudamos a jóvenes músicos a estudiar en conservatorios y escuelas de Europa: admisión, permisos, residencia y acompañamiento completo.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
