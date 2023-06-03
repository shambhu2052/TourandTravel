import React from 'react'

function Tourism() {
  return (
    <>
    <div className="bg-[#F5F5F5] pb-[110px]">
        <div className="container mx-auto">
            <div className=" flex flex-col lg:flex-row lg:gap-[130px]">
                <div className="mt-[10px] md:mt-[102px] ml-[10px] mr-[10px] md:mr-[10px] md:ml-[70px] basis-[50%]">
                    <h2 className="font-roboto font-bold text-2xl leading-[44px] text-[#2C2C2C] ">We have been in the tourism industry for<br/> more than 20 years</h2>
                    <p className="font-roboto font-normal text-lg leading-[33.39px] text-[#505056] pt-[21px]">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
                    <div className="flex flex-row gap-[25px] mt-[25px]">
                        <div className="w-[73px] h-[73px] bg-[#ECECEC]"></div>
                        <div className="flex flex-col gap-[17px]">
                            <div className="w-[100px] md:w-[199px] h-[34px] bg-[#ECECEC]"></div>
                            <div className="w-[183px] md:w-[311px] h-[18px] bg-[#ECECEC]"></div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[25px] mt-[30px]">
                        <div className="w-[73px] h-[73px] bg-[#ECECEC]"></div>
                        <div className="flex flex-col gap-[17px]">
                            <div className="w-[100px] md:w-[199px] h-[34px] bg-[#ECECEC]"></div>
                            <div className="w-[183px] md:w-[311px] h-[18px] bg-[#ECECEC]"></div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[25px] mt-[30px]">
                        <div className="w-[73px] h-[73px] bg-[#ECECEC]"></div>
                        <div className="flex flex-col gap-[17px]">
                            <div className="w-[100px] md:w-[199px] h-[34px] bg-[#ECECEC]"></div>
                            <div className="w-[183px] md:w-[311px] h-[18px] bg-[#ECECEC]"></div>
                        </div>
                    </div>
                </div>
               <div className="basis-[50%]  mt-[93px] mr-[40px] ml-[40px] lg:ml-[0px]">
                <div className="w-full h-[408px] relative rounded-[10px]">
                <img src="/../assets/about2/img1.png" alt="avatar" className="  object-cover rounded-[10px] cursor-pointer h-[293px] md:h-full"/>
                <img src="/../assets/about2/img2.png" alt="avatar" className="absolute w-[150px] md:w-[262px] lg:w-[178px] xl:w-[209px] top-[191px] md:top-[207px] left-[-31px] md:left-[-70px] rounded-[10px] cursor-pointer"/>
                <img src="/../assets/about2/img3.png" alt="avatar" className="absolute w-[180px] md:w-[340px] lg:w-[286px] xl::w-[311px] top-[205px] md:top-[207px] right-[-25px] md:right-[16px] lg:right-[-71px] rounded-[10px] cursor-pointer"/>
                </div>
               </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Tourism