import Banner2 from '@/components/about_components/Banner2'
import React, { useState } from 'react'
import { Rate } from 'antd';
import ComfortablePlace from '@/components/ComfortablePlace';
import Book from '@/components/Book';
import Partners from '@/components/Partners';
import Link from 'next/link';

// const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const index = () => {
    const [value, setValue] = useState(4);

    let tour = [
        {
            img: "/../assets/tours/tour1.png"
        },                                                                                  
        {
            img: "/../assets/tours/tour2.png"
        },
        {
            img: "/../assets/tours/tour3.png"
        },
        {
            img: "/../assets/tours/tour4.png"
        },
        {
            img: "/../assets/tours/tour5.png"
        },
        {
            img: "/../assets/tours/tour6.png"
        },
        {
            img: "/../assets/tours/tour7.png"
        },
        {
            img: "/../assets/tours/tour8.png"
        },
    ]
    return (
        <div>
            <Banner2 title="Tours" slug="Tours" />
            <div className='container mx-auto pb-[141px]'>
                <div className='flex flex-col lg:flex-row  gap-[43px] mx-[10px] md:mx-0'>
                    <div className='basis-[66%] grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[59px]'>
                        {
                            tour.map((item: any, index: number) => (
                                <div className='flex border border-[#EDEDED]' key={index}>
                                    <div className='basis-[45%] h-[333px] 2xl:h-[294px] relative cursor-pointer'>
                                       <Link href="/tours/details"> <img src={item.img} alt="" className='h-[100%] w-full object-cover' /></Link>
                                        <div className='h-[40px] bg-[#484F9B] w-full flex items-center justify-center absolute left-0 bottom-0'>
                                            <p className='text-[15px] font-normal leading-[17.58px] text-center text-white'><span className='text-[20px] font-bold mr-[8px]'>$20</span>/Per Person</p>
                                        </div>
                                    </div>
                                    <div className='basis-[55%] pl-[26px] pt-[20px]'>
                                        <Link href="/tours/details">
                                        <h1>Annapurna Base Camp - EBC</h1>
                                        <p>Bali, Earth</p></Link>
                                        <span>
                                            <Rate onChange={setValue} value={value}/>
                                            {/* {value ? <span className="ant-rate-text"></span> : ''} */}
                                        </span>
                                        <div className='flex flex-col 2xl:flex-row 2xl:items-center gap-[10px] mt-[28px]'>
                                            <div className='flex items-center gap-[4px]'>
                                                <img src="/../assets/tours/time.svg" alt=""/>
                                                <p className='text-[#505056] text-[13px] leading-[15.23px] font-normal tracking-[0.01em]'>4D/5N</p>
                                            </div>
                                            <div className='flex items-center gap-[4px]'>
                                                <img src="/../assets/tours/location.svg" alt="" />
                                                <p className='text-[#505056] text-[13px] leading-[15.23px] font-normal tracking-[0.01em]'>Pokhara</p>
                                            </div>
                                            <div className='flex items-center gap-[4px]'>
                                                <img src="/../assets/tours/people.svg" alt="" />
                                                <p className='text-[#505056] text-[13px] leading-[15.23px] font-normal tracking-[0.01em]'>5 People</p>
                                            </div>
                                        </div>
                                        <Link href="/booking">
                                        <div className='flex items-center gap-[6px] mt-[80.5px] mr-[16px] cursor-pointer float-right bg-[#F9F9F9] h-[37px] w-[103px] justify-center'>
                                            <h2 className='text-[#484F9B] text-[13px] leading-[15.23px] font-normal tracking-[0.01em]'>Book Now</h2>
                                            <img src="/../assets/tours/arrow.svg" alt="" />
                                        </div>
                                          </Link>  
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div className='basis-[34%] mt-[59px]'>
                        <form action="" className='bg-[#484F9B] pt-[50px] pb-[31px] w-full px-[51px] relative'>
                            <img src="/../assets/tours/search.png" alt="" className='absolute left-[50%] transform translate-x-[-50%] top-[15px]' />
                            <h1 className='text-white font-bold font-montserrat leading-[31.69px] text-[26px]'>Find Adventure That Suits You</h1>
                            <div>
                                {/* <p className='text-[#F9F9F9] text-[18px] leading-[28.8px] font-normal'>Fullname</p> */}
                                <input type="text" className='w-full h-[54px] outline-none mt-[15px] pl-[14px]' />
                            </div>
                            <div className='mt-[20px]'>
                                {/* <p className='text-[#F9F9F9] text-[18px] leading-[28.8px] font-normal'>Your Number</p> */}
                                <input type="text" className='w-full h-[54px] outline-none mt-[15px] pl-[14px]' />
                            </div>
                            <div className='mt-[20px]'>
                                {/* <p className='text-[#F9F9F9] text-[18px] leading-[28.8px] font-normal'>Message</p> */}
                                <textarea className='w-full h-[119px] outline-none mt-[15px] pl-[14px] pt-[14px]' />
                            </div>
                            <button className='w-full bg-[#0A0F4B] h-[67px] flex items-center mt-[42px] justify-center text-[#F9F9F9] text-[18px] leading-[28.8px] font-bold'>SEARCH</button>
                        </form>
                        <div className='mt-[48px] h-[389px] w-full rounded-[10px] relative cursor-pointer'>
                            <img src="/../assets/tours/off.png" className='h-[100%] w-full object-cover rounded-[10px]' alt="" />
                            <div className='absolute left-[50px] top-[52px]'>
                                <h2 className='text-white text-[30px] font-bold leading-[45px] font-montserrat max-w-[223px]'>THIS SUMMER
                                    ON TRAVEL</h2>
                                <h1 className='text-[white] text-[67px] font-bold font-montserrat leading-[73.5px] xl:leading-[100.5px] max-w-[306px]'>45% OFF</h1>
                            </div>
                            <h3 className='text-white text-[30px] leading-[45px] font-bold font-montserrat absolute left-[50%] transform translate-x-[-50%] bottom-[10px]'>Ad Graphics</h3>
                        </div>
                    </div>

                </div>
            </div>
            <ComfortablePlace />
            <Book />
            <Partners />
        </div>
    )
}

export default index