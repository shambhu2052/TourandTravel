import React from 'react'
const photo=[
    {
        image:'/../assets/guidedetail/img1.png'
    },
    {
        image:'/../assets/guidedetail/img2.png'
    },
    {
        image:'/../assets/guidedetail/img3.png'
    },
    {
        image:'/../assets/guidedetail/img4.png'
    },
    {
        image:'/../assets/guidedetail/img5.png'
    },
    {
        image:'/../assets/guidedetail/img6.png'
    },
    {
        image:'/../assets/guidedetail/img7.png'
    },
    {
        image:'/../assets/guidedetail/img8.png'
    },
    {
        image:'/../assets/guidedetail/img9.png'
    },
]

function Photogallery() {
  return (
    <>
    <div className="bg-[#F9F9F9] ">
    <div className="container mx-auto bg-[#FFFFFF] rounded-[10px] ">
    <div className="flex flex-row justify-between items-center ">
    <h3 className="font-semibold font-montserrat text-base leading-[20px] tracking-[0.12px] text-[#5B5B6D] pt-[32px] pl-[28px]">PHOTOS Gallery</h3>
    <h4 className="font-roboto font-normal text-base leading-[19px] text-[#484F9B] pt-[32px] pr-[38px]">View All</h4>
    </div>
    <div className="flex flex-col lg:flex-row lg:gap-[54px]">
        <div className="lg:basis-[55%]  mt-[39px]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[26px] gap-y-[18px] ml-[28px] mb-[43px] mr-[28px] lg:mr-[0px]">
         {
            photo.map((a:any, index:number)=>(
            <div key={index} className="w-full h-[162px] cursor-pointer overflow-hidden rounded-[10px]">
            <img src={a.image} alt="avatar" className="w-full h-full object-cover  hover:scale-110"/>
            </div>
            )
            )
         }
        </div>
        </div>
       <div className="lg:basis-[45%] mt-[10px] lg:mt-[39px]">
        <div className=" lg:w-full h-[371px] cursor-pointer overflow-hidden rounded-[10px] mx-[28px] lg:mx-[0px]">
        <img src="/../assets/guidedetail/img10.png" alt="avatar" className="w-full h-full object-cover  hover:scale-110"/> 
        </div>
        <div className=" flex flex-row justify-between ">
                <h2 className="font-montserrat font-bold text-xl leading-[25px] text-[#53974A] pt-[23px] pl-[28px] lg:pl-[0px]  ">Trek to Muktinath</h2>
                <h4 className="font-roboto font-normal text-base leading-[19px] text-[#505056] pt-[23px] pr-[65px]">2078 / 01 / 02</h4>
            </div>
            <p className="font-montserrat font-bold text-sm leading-[17px] text-[#505056] pt-[12px] pl-[28px] lg:pl-[0px]">6 Days</p>
       </div>
    </div>
    </div>
    </div>
    </>
  )
}
export default Photogallery