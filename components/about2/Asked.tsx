import React from 'react'
import Collape from './Collape'

function Asked() {
  return (
    <>
    <div className="flex flex-col justify-center items-center mt-[20px] md:mt-[117px]">
        <img src="/../assets/about2/faq.svg" alt="avatar" className=" h-[53px] object-cover"/>
        <h2 className="font-montserrat font-bold text-[24px] md:text-[40px] leading-[48.76px] text-[#2C2C2C]">Frequently Asked Questions</h2>
    </div>
    <div className="flex flex-col lg:flex-row gap-[50px] 2xl:gap-[87px] mt-[50px] md:mt-[113px] pb-[10px] md:pb-[218px]">
        <div className="basis-[50%] ml-[30px] 2xl:ml-[185px] mr-[30px] lg:mr-[0px]">
         <div className=""><Collape/></div>   
        </div>
        <div className="basis-[50%] h-[668px] cursor-pointer">
            <img src="/../assets/about2/ask.png" alt="avatar" className="w-full h-full object-cover"/>
        </div>
    </div>
    </>
  )
}

export default Asked