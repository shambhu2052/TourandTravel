import React from 'react'
import Service from './Service'

const TopPicks = () => {
    return (
        <div>
            <div className='container mx-auto pb-[62px]'>
                <div className='flex items-center justify-center flex-col'>
                    <img src="/../assets/toppicks.svg" alt="" />
                    <h1 className='font-montserrat text-[#2C2C2C] text-[40px] font-bold leading-[48.76px]'>Destination Tailored For You</h1>
                </div>
                <div className='grid grid-cols-3 gap-x-[78px] gap-y-[61px] mt-[50px]'>
                    <div className='flex  items-center border border-[#D9D9D9] rounded-[8px]'>
                        <div>
                            <img src="/../assets/dest1.png" alt="" />
                        </div>
                        <div className='pl-[22px]'>
                            <h2 className='text-[#2C2C2C] text-[24px] leading-[29.26px] font-medium'>Pokhara Trails</h2>
                            <p className='text-[#5B5B6D] text-[18px] leading-[21.09px] font-normal mt-[16px]'>Starts at <span className='text-[#484F9B]'>Rs 2500.00</span></p>
                        </div>
                    </div>
                    <div className='flex  items-center border border-[#D9D9D9] rounded-[8px]'>
                        <div>
                            <img src="/../assets/dest2.png" alt="" />
                        </div>
                        <div className='pl-[22px]'>
                            <h2 className='text-[#2C2C2C] text-[24px] leading-[29.26px] font-medium'>Pokhara Trails</h2>
                            <p className='text-[#5B5B6D] text-[18px] leading-[21.09px] font-normal mt-[16px]'>Starts at <span className='text-[#484F9B]'>Rs 2500.00</span></p>
                        </div>
                    </div>
                    <div className='flex  items-center border border-[#D9D9D9] rounded-[8px]'>
                        <div>
                            <img src="/../assets/dest3.png" alt="" />
                        </div>
                        <div className='pl-[22px]'>
                            <h2 className='text-[#2C2C2C] text-[24px] leading-[29.26px] font-medium'>Pokhara Trails</h2>
                            <p className='text-[#5B5B6D] text-[18px] leading-[21.09px] font-normal mt-[16px]'>Starts at <span className='text-[#484F9B]'>Rs 2500.00</span></p>
                        </div>
                    </div>   <div className='flex  items-center border border-[#D9D9D9] rounded-[8px]'>
                        <div>
                            <img src="/../assets/dest4.png" alt="" />
                        </div>
                        <div className='pl-[22px]'>
                            <h2 className='text-[#2C2C2C] text-[24px] leading-[29.26px] font-medium'>Pokhara Trails</h2>
                            <p className='text-[#5B5B6D] text-[18px] leading-[21.09px] font-normal mt-[16px]'>Starts at <span className='text-[#484F9B]'>Rs 2500.00</span></p>
                        </div>
                    </div>   <div className='flex  items-center border border-[#D9D9D9] rounded-[8px]'>
                        <div>
                            <img src="/../assets/dest5.png" alt="" />
                        </div>
                        <div className='pl-[22px]'>
                            <h2 className='text-[#2C2C2C] text-[24px] leading-[29.26px] font-medium'>Pokhara Trails</h2>
                            <p className='text-[#5B5B6D] text-[18px] leading-[21.09px] font-normal mt-[16px]'>Starts at <span className='text-[#484F9B]'>Rs 2500.00</span></p>
                        </div>
                    </div>   <div className='flex  items-center border border-[#D9D9D9] rounded-[8px]'>
                        <div>
                            <img src="/../assets/dest6.png" alt="" />
                        </div>
                        <div className='pl-[22px]'>
                            <h2 className='text-[#2C2C2C] text-[24px] leading-[29.26px] font-medium'>Pokhara Trails</h2>
                            <p className='text-[#5B5B6D] text-[18px] leading-[21.09px] font-normal mt-[16px]'>Starts at <span className='text-[#484F9B]'>Rs 2500.00</span></p>
                        </div>
                    </div>

                </div>
                <div className='flex mt-[60px] h-[506px] gap-[27px]'>
                    <div className='basis-[75%] cursor-pointer relative'>
                        <img src="/../assets/left.png" className='h-[100%]' alt="" />
                        <div className='absolute right-[50px] bottom-[33px]'>
                            <h2 className='text-[26px] leading-[39px] font-normal text-white'>Enjoy This Summer</h2>
                            <h1 className='text-[40px] font-bold leading-[60px] font-montserrat text-white'>Up to 40% Discounts</h1>
                            <button className='h-[73px] w-[185px] bg-white flex items-center justify-center text-[#484F9B] text-[18px] leading-[27px] font-bold'>Learn More</button>
                        </div>
                    </div>
                    <div className='basis-[25%] cursor-pointer relative'>
                        <img src="/../assets/right.png" alt="" className='h-[100%]' />
                        <div className='absolute left-[22px] bottom-[22px]'>
                            <h1 className='text-white text-[30px] font-bold leading-[45px] font-montserrat max-w-[359px]'>Things to know before going Hiking</h1>
                            <p className='mt-[5px] text-[16px] leading-[24px] font-normal text-white'>
                                magna aliquyam erat, sed diam voluptua. At vero eos et.
                            </p>
                        </div>

                    </div>
                </div>
                <Service />
            </div>
        </div>
    )
}

export default TopPicks