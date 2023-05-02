import Bio from '@/components/guidedetailcomponents/Bio'
import Enquiry from '@/components/guidedetailcomponents/Enquiry'
import Nabin from '@/components/guidedetailcomponents/Nabin'
import Otherguide from '@/components/guidedetailcomponents/Otherguide'
import Photogallery from '@/components/guidedetailcomponents/Photogallery'
import Videogallery from '@/components/guidedetailcomponents/Videogallery'
import React from 'react'

function index() {
  return (
    <>
    <Nabin/>
    <Bio/>
    <Photogallery/>
    <Videogallery/>
    <Enquiry/>
    <Otherguide/>
    </>
  )
}

export default index