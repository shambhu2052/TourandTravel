import React from 'react'

function Teams() {
    const team=[
        {
            img:'/../assets/about2/devon.png',
            name:'DEVON LANE',
            title:'Designation Here'
        },
        {
            img:'/../assets/about2/robert.png',
            name:'ROBERT FOX',
            title:'Designation Here'
        },
        {
            img:'/../assets/about2/savana.png',
            name:'SAVANANA NGYUEN',
            title:'Designation Here'
        },
        {
            img:'/../assets/about2/jacob.png',
            name:'JACOB JONES',
            title:'Designation Here'
        },
    ]
  return (
    <div className="bg-[#F9F9F9]">
        <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center md:pt-[54px]">
            <div className=" h-[53px]">
                <img src="/../assets/about2/teams.png" alt="avatar" className="w-full h-full object-cover"/>
            </div>
            <h1 className="font-montserrat font-bold text-[40px] leading-[49px] text-[#2C2C2C]">Meet our Team</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-[26px] mt-[113px]">
                {
                    team.map((a:any, index:number)=>(
                        <div className="bg-[#FFFFFF] mb-[10px] md:mb-[111px] cursor-pointer mx-[10px] md:mx-[0px] team">
                            <div className="w-full h-[340px]">
                                <img src={a.img} alt="avatar" className="w-full"/>
                            </div>
                            <div className="flex flex-col justify-center items-center mt-[24px] gap-[16px]">
                                <h3 className="font-roboto font-bold text-lg leading-[21px] text-[#5B5B6D]">{a.name}</h3>
                                <p className="font-roboto font-normal text-lg leading-[21px] text-[#5B5B6D] pb-[21px]">{a.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Teams