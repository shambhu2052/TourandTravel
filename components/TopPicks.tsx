import React from 'react'
import Service from './Service'
import Discounts from './Discounts'

const TopPicks = () => {
    return (
        <div>
            <div className='container mx-auto pb-[62px] px-[15px] md:px-0'>
                <div className='flex items-center justify-center flex-col'>
                    <img src="/../assets/toppicks.svg" alt="" />
                    <h1 className='font-montserrat text-[#2C2C2C] text-[40px] font-bold leading-[48.76px]'>Destination Tailored For You</h1>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-x-[78px] gap-y-[61px] mt-[50px]'>
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
              <Discounts/>
                <Service />
            </div>
        </div>
    )
}

export default TopPicks