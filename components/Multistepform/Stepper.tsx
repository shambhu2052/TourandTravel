import React from 'react'

function Stepper() {
  return (
    <>
    <div className="flex flex-row justify-center items-center mt-[58px]">
      <div className="w-[319px] h-[64px] flex justify-center items-center">
        <h5 className="font-montserrat font-medium text-[18.14px] leading-[22px] text-white px-[85px]">Personal Details</h5>
        </div>  
        <div className="w-[319px] h-[64px] flex justify-center items-center">
        <h5 className="font-montserrat font-medium text-[18.14px] leading-[22px] text-white px-[85px]">Booking</h5>
        </div>
        <div className="w-[319px] h-[64px] flex justify-center items-center">
        <h5 className="font-montserrat font-medium text-[18.14px] leading-[22px] text-white px-[85px]">Payment</h5>
        </div>
    </div>
    </>
  )
}

export default Stepper