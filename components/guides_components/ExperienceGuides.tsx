import React from 'react'
import Trackingguide from './Trackingguide'
import Link from 'next/link'
const ExperienceGuides = () => {
    let ex = [
        {
            img: "/../assets/guides/ex1.png"
        },
        {
            img: "/../assets/guides/ex2.png"
        },
        {
            img: "/../assets/guides/ex3.png"
        },
        {
            img: "/../assets/guides/ex4.png"
        },
        {
            img: "/../assets/guides/ex5.png"
        },
        {
            img: "/../assets/guides/ex6.png"
        },
        {
            img: "/../assets/guides/ex7.png"
        },
        {
            img: "/../assets/guides/ex8.png"
        },
    ]
    return (
        <div className='container mx-auto pb-[40px]'>
            <h1 className='text-[#5B5B6D] text-[16px] leading-[19.5px] font-semibold tracking-[0.12em] text-center font-montserrat'>OUR EXPERIENCED GUIDES</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 mt-[51px] gap-[20px] xl:gap-[26px] px-[5%] lg:px-[8%] xl:px-[12%]'>
                {
                    ex.map((item: any, index: number) => (
                        <div className='h-[362.67px] w-full gap-[26px] cursor-pointer rounded-[5px] relative group' key={index}>
                           <Link href="/guides/guidedetail"><img src={item.img} className='h-[100%] w-full object-cover rounded-[5px] absolute' alt="" /></Link> 
                            <div className="absolute bottom-[20px] left-[24px] mr-[30px] hidden group-hover:block">
                            <Trackingguide/>
                            </div>
                        </div>
                    ))
                }

            </div>


        </div>
    )
}

export default ExperienceGuides