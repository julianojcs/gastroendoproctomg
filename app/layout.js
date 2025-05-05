import localFont from "next/font/local";
import "./globals.css";
import styles from './layout.module.css'
import Footer from './components/layout/Footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='robots' content='index, follow' />
        <meta name='author' content='Join Digital Solutions' />

        {/* Link canônico */}
        <link rel='canonical' href='https://www.gastroendoproctomg.com.br/'></link>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{maxWidth: '1300px', margin: 'auto', backgroundColor: '#929292'}}>
        <div className={styles.container}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
