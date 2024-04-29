import './globals.css'
import Script from 'next/script'


export const metadata = {
  title: 'Idir Yacine',
  description: 'Idir yacine portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script src="scripts/pt.min.js"/>
      <Script src="scripts/canvas.js"/>
      
      <body >
          {children}
      </body>
    </html>
  )
}
