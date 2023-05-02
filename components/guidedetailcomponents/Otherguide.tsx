import React from 'react'

function Otherguide() {
    const guide=[
        {
        img:'/../assets/guidedetail/Devon.png',
        name:'Devon Lane'
    },
    {
        img:'/../assets/guidedetail/Robert.png',
        name:'Devon Lane'
    },
    {
        img:'/../assets/guidedetail/Savanath.png',
        name:'Devon Lane'
    },
    {
        img:'/../assets/guidedetail/jacob.png',
        name:'Devon Lane'
    },
    {
        img:'/../assets/guidedetail/Bell.png',
        name:'Devon Lane'
    },
    {
        img:'/../assets/guidedetail/Henry.png',
        name:'Devon Lane'
    },
]

  return (
    <>
    <div className="bg-[#F5F5F5]">
    <div className="container mx-auto">
     <div className="flex flex-col justify-center items-center"> 
     <img src="/../assets/guidedetail/Guides.png"alt="avatar" className="w-[87px] h-[53px]"/>
     <h2 className="font-montserrat font-bold text-[40px] leading-[48.76px] text-[#2C2C2C]">Our Other Guides</h2>
    </div> 
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-[71px] mt-[45px]">
       {
        guide.map((a:any, index:number)=>(
            <div key={index} className="flex flex-col justify-center items-center">
            <img src={a.img} alt="avatar" className="cursor-pointer"/>
            <p className="font-roboto font-normal text-xl leading-[24px] pb-[65.2px] pt-[21px] text-[#5B5B6D]">{a.name}</p>
            
            </div>
        ))
       }
        </div>                                                                  
    </div>
    </div>
    </>
  )
}

export default Otherguide