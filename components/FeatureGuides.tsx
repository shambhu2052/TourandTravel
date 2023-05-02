import React from 'react'

const FeatureGuides = () => {
    let data =
        [
            {
                img: "/../assets/guide1.png",
                name: "Nabin Magar"
            },
            {
                img: "/../assets/guide2.png",
                name: "Robert Fox"
            },
            {
                img: "/../assets/guide3.png",
                name: "Savannah Nguyen"
            },
            {
                img: "/../assets/guide4.png",
                name: "Jacob Jones"
            },
            {
                img: "/../assets/guide5.png",
                name: "Jerome Bell"
            },
            {
                img: "/../assets/guide6.png",
                name: "Courtney Henry"
            },
        ]
    return (
        <div className='overflow-hidden'>
            <div className='container mx-auto pt-[59px] pb-[64px] relative'>
                <img src="/../assets/design1.png" alt="" className='absolute left-[-237px] bottom-[65px]'/>
                <img src="/../assets/design2.png" alt="" className='absolute right-[-240px] bottom-[65px]' />
                <div className='flex items-center justify-center flex-col'>
                    <img src="/../assets/guidetext.svg" alt="" />
                    <h1 className='font-montserrat text-[#2C2C2C] text-[40px] font-bold leading-[48.76px]'>Featured Guides</h1>
                </div>
                <div className='grid md:grid-cols-6 grid-cols-2 gap-[71px] mt-[50px] px-[20px] md:px-0 '>

                    {
                        data.map((item: any, index: number) => (
                            <div key={index} className='flex items-center justify-center flex-col gap-[21px]'>
                                <img src={item.img} className='cursor-pointer' alt="" />
                                <h2 className='text-[#5B5B6D] text-[20px] leading-[23.44px] font-normal '>{item.name}</h2>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default FeatureGuides