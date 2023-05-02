import React from 'react'

function Trackingguide() {
    let tracking=[
        {
        img:'/../assets/Trackingguide/video.svg'
    },
    {
        img:'/../assets/Trackingguide/facebook.svg'
    },
    {
        img:'/../assets/Trackingguide/insta.svg'
    },
    {
        img:'/../assets/Trackingguide/linkdin.svg'
    },
]
  return (
    <div className="w-[230px] h-[190px] rounded-[5px] bg-[#FFFFFF]">
        <div className="">
            <h2 className="font-montserrat font-semibold text-[22px] leading-[27px] text-[#2C2C2C] text-center pt-[13px]">Lorem Ipsum</h2>
            <h5 className="font-roboto font-semibold text-[13px] leading-[15px] text-[#53974A] text-center pt-[10px]">Trekking Guide</h5>
            <p className="font-roboto font-normal text-[15px] leading-[22.5px] text-center pt-[10px]">“ Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit. ”</p>
            <div className="flex flex-row justify-center items-center mt-[19px] gap-[10px]">
            {
                tracking.map((a:any, index:number)=>(
                    <div className="w-[30px] h-[30px] cursor-pointer" key={index}>
                        <a href=""><img src={a.img} alt="avatar" className="w-full h-full object-cover"/></a>
                    </div>
                )
                )
            }
            </div>
        </div>
    </div>
  )
}

export default Trackingguide