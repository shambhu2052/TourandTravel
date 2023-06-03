import React from 'react'
import Banner2 from '@/components/about_components/Banner2'
import Tourism from '@/components/about2/Tourism'
import Teams from '@/components/about2/Teams'
import Asked from '@/components/about2/Asked'
function index() {
  return (
    <>
      <Banner2 title="About Us" slug="About us" />
      <Tourism/>
      <Teams/>
      <Asked/>
    </>
  )
}

export default index