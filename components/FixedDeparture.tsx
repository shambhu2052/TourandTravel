import React from 'react'

const FixedDeparture = () => {
    return (
        <div>
            <div className='container mx-auto pb-[60px]'>
                <div className='flex items-center justify-center flex-col'>
                    <img src="/../assets/hotel.svg" alt="" />
                    <h1 className='font-montserrat text-[#2C2C2C] text-[40px]  text-center font-bold leading-[48.76px]'>Fixed Departures</h1>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 w-full gap-[26px] mt-[50px] px-[15px] md:px-0'>
                    <div className='w-full'>
                        <div>
                            <img src="/../assets/departure1.png" className='cursor-pointer w-full' alt="" />
                        </div>
                        <h2 className='text-[#2C2C2C] text-[20px] leading-[24.38px] font-medium font-montserrat mt-[18px]'>Annapurna Base Camp - EBC</h2>
                        <p className='text-[15px] text-[#505056] leading-[18.29px] font-normal mt-[10px]'>Bali, Earth</p>
                        <p className='text-[#5B5B6D] text-[15px] leading-[23.44px] font-light'>Starting From <span className='text-[#484F9B] text-[32px] '>$20</span> Per Person</p>
                    </div>
                    <div className='w-full'>
                        <div>
                            <img src="/../assets/departure2.png" className='cursor-pointer w-full' alt="" />
                        </div>
                        <h2 className='text-[#2C2C2C] text-[20px] leading-[24.38px] font-medium font-montserrat mt-[18px]'>Annapurna Base Camp - EBC</h2>
                        <p className='text-[15px] text-[#505056] leading-[18.29px] font-normal mt-[10px]'>Bali, Earth</p>
                        <p className='text-[#5B5B6D] text-[15px] leading-[23.44px] font-light'>Starting From <span className='text-[#484F9B] text-[32px] '>$20</span> Per Person</p>
                    </div>
                    <div className='w-full'>
                        <div>
                            <img src="/../assets/departure2.png" className='cursor-pointer w-full' alt="" />
                        </div>
                        <h2 className='text-[#2C2C2C] text-[20px] leading-[24.38px] font-medium font-montserrat mt-[18px]'>Annapurna Base Camp - EBC</h2>
                        <p className='text-[15px] text-[#505056] leading-[18.29px] font-normal mt-[10px]'>Bali, Earth</p>
                        <p className='text-[#5B5B6D] text-[15px] leading-[23.44px] font-light'>Starting From <span className='text-[#484F9B] text-[32px] '>$20</span> Per Person</p>
                    </div >
                    <div className='w-full'>
                        <div>
                            <img src="/../assets/departure3.png" className='cursor-pointer w-full' alt="" />
                        </div>
                        <h2 className='text-[#2C2C2C] text-[20px] leading-[24.38px] font-medium font-montserrat mt-[18px]'>Annapurna Base Camp - EBC</h2>
                        <p className='text-[15px] text-[#505056] leading-[18.29px] font-normal mt-[10px]'>Bali, Earth</p>
                        <p className='text-[#5B5B6D] text-[15px] leading-[23.44px] font-light'>Starting From <span className='text-[#484F9B] text-[32px] '>$20</span> Per Person</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FixedDeparture