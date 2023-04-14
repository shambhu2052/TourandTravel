import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'
import FeatureGuides from '@/components/FeatureGuides'
import TrekkingDestination from '@/components/TrekkingDestination'
import FeatureExpeditons from '@/components/FeatureExpeditons'
import FixedDeparture from '@/components/FixedDeparture'
import TopPicks from '@/components/TopPicks'
import ComfortablePlace from '@/components/ComfortablePlace'
import Book from '@/components/Book'
import Partners from '@/components/Partners'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>
      <Head>
        {/* <title>hello this is title</title> */}
      </Head>
      {/* COMPONENTS GOES DOWN  HERE */}
      <Topbar />
      <Navbar />
      <Carousel />
      <FeatureGuides />
      <TrekkingDestination />
      <FeatureExpeditons />
      <FixedDeparture />
      <TopPicks />
      <ComfortablePlace />
      <Book />
      <Partners />
      <Footer/>
    </>
  )
}
