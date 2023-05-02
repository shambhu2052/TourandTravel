import React from 'react'

function Bio() {
  return (
    <div className="bg-[#F5F5F5] pb-[45px]">
        <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
    <h2 className="font-semibold font-montserrat text-base leading-[20px] tracking-[0.12em] text-[#5B5B6D] pt-[30px] text-center md:text-left">BIO</h2>
    <div className="  md:w-[551px]  bg-[#FFFFFF] mt-[55px] pb-[29.64px] mx-[28px] md:mx-[28px] quote">
        <h2 className="font-montserrat font-semibold text-base leading-[20px] tracking-[0.12em] text-[#5B5B6D] pl-[19px] pt-[18px]">QUOTE FROM GUIDE</h2>
        <img src="/../assets/guidedetail/comma1.svg"alt="avatar" className="w-[55.18px] h-[35.82px] mt-[16.64px] ml-[3.36px] "/>
        <p className="font-normal text-xl font-roboto text-[#505056] leading-[32px] tracking-[0.01em] pl-[19px] pt-[5.62px] pr-[40px] md:pr-[70px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit </p>
        <img src="/../assets/guidedetail/comma2.svg" alt="avatar" className="w-[55.18px] h-[35.82px] ml-[214.44px] md:ml-[425.44px]  "/>
    </div>
   </div>
        </div>
   
    </div>
  )
}

export default Bio