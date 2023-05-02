import React from 'react'

function Videogallery() {
  const gallery=[
    {
    image:'/../assets/guidedetail/vedio1.png'
  },
  {
    image:'/../assets/guidedetail/vedio2.png'
  },
  {
    image:'/../assets/guidedetail/vedio3.png'
  },
  {
    image:'/../assets/guidedetail/vedio4.png'
  },
  {
    image:'/../assets/guidedetail/vedio5.png'
  },
  {
    image:'/../assets/guidedetail/vedio6.png'
  },
  {
    image:'/../assets/guidedetail/vedio7.png'
  },
  {
    image:'/../assets/guidedetail/vedio8.png'
  },
  {
    image:'/../assets/guidedetail/vedio9.png'
  }
]
  return (
    <>
    <div className="bg-[#F9F9F9] pb-[68px] pt-[30px]">
    <div className="container mx-auto bg-[#FFFFFF] rounded-[10px] ">
        <div className="flex flex-row justify-between">
            <p className="font-montserrat font-semibold text-base leading-[20px] tracking-[0.12em] text-[#5B5B6D] pt-[32px] pl-[28px]">Videos Gallery</p>
            <a href="" className="font-roboto font-normal text-base leading-[19px] text-[#484F9B] pr-[55px] pt-[32px] ">View All</a>
        </div>
        <div className="flex flex-col lg:flex-row gap-[10px] lg:gap-[54px]">
        <div className=" lg:basis-[55%] mt-[39px] ml-[28px] mb-[43px] mr-[28px] lg:mr-[0px]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[26px] gap-y-[18px]">
          {
            gallery.map((a:any, index:number)=>(
              <div key={index} className="w-full h-[162px] cursor-pointer overflow-hidden rounded-[10px]">
                <img src={a.image} alt="avatar" className="w-full h-full object-cover  transform hover:scale-110"/>
              </div>
            ))
          }
        </div>
        </div>
        <div className=" basis-[100%] lg:basis-[45%] lg:mt-[39px]">
       <div className="w-[320px] md:w-[710px] lg:w-[536px] xl:w-[685px] 2xl:w-[768px] h-[528px] ml-[28px]">
       <iframe className="w-full h-full" src="https://www.youtube.com/embed/IvOuIsF-qX0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
       </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Videogallery