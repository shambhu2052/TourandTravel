import React from 'react'
import{AiOutlinePlus} from 'react-icons/ai'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import Link from 'next/link'
const Personaldetail = () => {
  return (
    <>
    <div className=" flex justify-center items-center">
    <div className="  h-[957px] mx-auto border-[1px] border-solid border-[#EDEDED] bg-[#FFFFFF] rounded-[10px] mb-[170px] person">
      <h2 className="font-montserrat font-bold text-xl leading-[24.38px] text-[#2C2C2C] mt-[32px] ml-[35px] ">TRAVELER INFORMATIONS</h2>
      <div className="w-[74px] border-[4px] border-solid border-[#484F9B] ml-[35px] mt-[13px] bg-[#484F9B]"></div>
      <h5 className="font-roboto font-normal text-[20px] leading-[24px] text-[#5B5B6D] pt-[35px] pl-[35px]">Traveler 1</h5>
      <div className="grid grid-cols-2 gap-[26px] mt-[26px] mr-[26px] ml-[35px]">
        <div className="form">
          <form>
            <label className="font-roboto font-normal text-lg leading-[28.8px] text-[#505056]  pl-[35px]">Fullname</label><br/>
            <input type="text" className="w-[526px] h-[60px] bg-[#F9F9F9] rounded-[2px]  mt-[15px] outline-none" />
          </form>
        </div>
        <div className="form">
          <form>
            <label className="font-roboto font-normal text-lg leading-[28.8px] text-[#505056] pt-[26px] pl-[35px]">Contact</label><br/>
            <input type="text" className="w-[526px] h-[60px] bg-[#F9F9F9] rounded-[2px] mt-[15px] outline-none"/>
          </form>
        </div>
        </div>  
        <form>
          <label className="font-roboto font-normal text-lg leading-[28.8px] text-[#505056] pl-[35px] pt-[26px]">Any Special Health Considerations</label><br/>
          <input type="text" className="w-[526px] h-[121px] bg-[#F9F9F9] rounded-[2px] mt-[15px] ml-[35px] outline-none"/>
        </form>
        <div className="flex flex-row justify-center items-center bg-[#53974A] w-[156px] h-[58px] mt-[30px] ml-[35px] ">
         <a href="" className=" flex flex-row justify-center items-center gap-[12.56px] font-roboto font-normal text-[15px] laeding-[24px] text-[#FFFFFF] pl-[5.56px] pr-[10px]"><AiOutlinePlus className="plusicon"/>Add Traveler</a>
        </div>
        <h3 className="font-montserrat font-bold leading-[24px] text-xl text-[#2C2C2C] pt-[69px] pl-[35px]">TRAVEL DETAILS</h3>
        <div className="w-[74px] border-[4px] border-solid border-[#484F9B] mt-[13px] ml-[35px]"></div>
        <div className="flex flex-row mt-[35px] mx-[35px] gap-[26px]">
          <div className="tour">
          <form>
            <label className="font-roboto font-normal text-lg leading-[29px] text-[#505056] pb-[15px]">Tour Date</label><br/>
            <input type="date" className="w-[526px] h-[60px] bg-[#F9F9F9] rounded-[2px] pl-[19px] pr-[20px] outline-none"/>
          </form>
            </div>
            <div className="place">
              <label className="font-roboto font-normal text-lg leading-[29px] pb-[15px] text-[#505056]">Pickup Place</label><br/>
              <input type="text" className="w-[526px] h-[60px] bg-[#F9F9F9] rounded-[2px] outline-none"/>
            </div>
            </div>
            <div className="w-[172px] h-[58px] bg-[#484F9B] rounded-[5px] flex flex-row justify-center items-center mt-[94px] ml-[941px]">
              <Link href="/booking/Bookinginfo" className="font-roboto font-normal text-base leading-[25px] text-[#FFFFFF] pl-[42px] flex flex-row gap-[12px] items-center">Continue <BsFillArrowRightCircleFill color="#FFFFFF" className="mr-[42px]"/></Link>
            </div>
    </div>
    </div>
    </>
  )
}
export default Personaldetail