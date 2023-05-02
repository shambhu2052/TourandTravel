import React from 'react'

function Book() {
  return (
    <>
    <div className="flex xl:justify-center xl:items-center mx-[10px] xl:mx-0">
        <div className="h-[975px] bg-[#FFFFFF] border-[1px] border-solid border-[#EDEDED] rounded-[10px] mb-[170px] bookinginfo">
        <h2 className="font-montserrat font-bold text-xl leading-[24px] text-[#2C2C2C] pt-[35px] pl-[28px]">BOOKING INFORMATIONS</h2>
        <div className="w-[74px] border-[4px] border-solid border-[#484F9B] ml-[31px] mt-[13px]"></div>
        <div className="flex flex-col md:flex-row gap-[30px] mt-[75px] ml-[28px] mr-[38px] ">
            <div className="contact">
           <form>
            <label className="font-roboto font-normal text-lg leading-[29px] text-[#505056] pb-[15px]">Contact</label><br/>
            <input type="text" className="w-[270px] md:w-[332px] lg:w-[452px] xl:w-[526px] h-[60px] bg-[#F9F9F9] rounded-[2px] outline-none"/>
           </form>
            </div>
            <div className="contact">
           <form>
            <label className="font-roboto font-normal text-lg leading-[29px] text-[#505056] pb-[15px]">Contact</label><br/>
            <input type="text" className="w-[270px] md:w-[332px] lg:w-[452px] xl:w-[526px] h-[60px] bg-[#F9F9F9] rounded-[2px] outline-none"/>
           </form>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Book