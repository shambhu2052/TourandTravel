import React from 'react'

const FeatureGuide = () => {
    let guide = [
        {
            img: "/../assets/guides/guide1.png",
            name: "Nabin Magar"
        },
        {
            img: "/../assets/guides/guide2.png",
            name: "Anna Fitchl"
        },
        {
            img: "/../assets/guides/guide3.png",
            name: "Anna Fitchl"
        },
        {
            img: "/../assets/guides/guide4.png",
            name: "Anna Fitchl"
        },
        {
            img: "/../assets/guides/guide5.png",
            name: "Anna Fitchl"
        },
    ]
    return (
        <div className='container mx-auto pt-[54px]'>
            <h1 className='text-[#5B5B6D] text-[16px] leading-[19.5px] font-semibold tracking-[0.12em] text-center font-montserrat'>FEATURED GUIDES</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[21px] xl:gap-[44px] mt-[43px] pb-[92px]'>
                {
                    guide.map((item: any, index: number) => (
                        <div className='cursor-pointer px-[5%] md:px-[0%]'>
                            <div className=' h-[380px] w-full'>
                                <img src={item.img} className='h-[100%] w-full object-cover' alt="" />
                            </div>
                            <h2 className='mt-[15px] text-[#2C2C2C] text-[18px] leading-[21.94px] font-semibold font-montserrat '>{item.name}</h2>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default FeatureGuide