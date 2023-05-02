import React from 'react'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
function Bookinginfo() {
  return (
    <>
    <div className="flex justify-center items-center">
        <div className="h-[975px] bg-[#FFFFFF] border-[1px] border-solid border-[#EDEDED] rounded-[10px] mb-[170px] bookinginfo">
        <h2 className="font-montserrat font-bold text-xl leading-[24px] text-[#2C2C2C] pt-[35px] pl-[28px]">BOOKING INFORMATIONS</h2>
        <div className="w-[74px] border-[4px] border-solid border-[#484F9B] ml-[31px] mt-[13px]"></div>
        <div className="flex flex-row gap-[30px] mt-[75px] ml-[28px] mr-[38px] ">
            <div className="contact">
           <form>
            <label className="font-roboto font-normal text-lg leading-[29px] text-[#505056] pb-[15px]">Contact</label><br/>
            <input type="text" className="w-[526px] h-[60px] bg-[#F9F9F9] rounded-[2px] outline-none"/>
           </form>
            </div>
            <div className="contact">
           <form>
            <label className="font-roboto font-normal text-lg leading-[29px] text-[#505056] pb-[15px]">Contact</label><br/>
            <input type="text" className="w-[526px] h-[60px] bg-[#F9F9F9] rounded-[2px] outline-none"/>
           </form>
            </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-[617px]">
            <div className="w-[172px] h-[58px] bg-[#5B5B6D1A]/[10%] ml-[32px] cursor-pointer ">
                <a href="booking/Personaldetail" className="flex flex-row justify-center items-center gap-[12px] font-roboto font-normal text-base leading-[25.6px] text-[#505056] pt-[16px] px-[56px]"><BsFillArrowLeftCircleFill/>Back</a>
            </div>
            <div className="w-[172px] h-[58px] bg-[#484F9B] rounded-[5px] cursor-pointer mr-[38px]">
                <a href="booking/Payment" className="font-roboto font-normal text-base leading-[25.6px] text-[#FFFFFF] pl-[42px] pr-[23px] flex justify-center items-center gap-[12px] pt-[16px]">Continue<BsFillArrowRightCircleFill/></a>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Bookinginfo