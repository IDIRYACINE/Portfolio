import './globals.css'


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
      <body >{children}</body>
    </html>
  )
}
