import React from 'react'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
function Steppercontrol() {
  return (
    <>
     <div className="flex flex-row justify-between items-center mt-[617px]">
            <div className="w-[172px] h-[58px] bg-[#5B5B6D1A]/[10%] ml-[32px] cursor-pointer ">
                <a href="booking/Personaldetail" className="flex flex-row justify-center items-center gap-[12px] font-roboto font-normal text-base leading-[25.6px] text-[#505056] pt-[16px] px-[56px]"><BsFillArrowLeftCircleFill/>Back</a>
            </div>
            <div className="w-[172px] h-[58px] bg-[#484F9B] rounded-[5px] cursor-pointer mr-[38px]">
                <a href="booking/Payment" className="font-roboto font-normal text-base leading-[25.6px] text-[#FFFFFF] pl-[42px] pr-[23px] flex justify-center items-center gap-[12px] pt-[16px]">Continue<BsFillArrowRightCircleFill/></a>
            </div>
        </div>
    </>
  )
}

export default Steppercontrol