import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Topbar from '@/components/Topbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Topbar />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>


  )
}
