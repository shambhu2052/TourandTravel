import React from 'react'

const ComfortablePlace = () => {
    return (
        <div>
            <div className='container mx-auto pb-[80px]'>
                <div className='flex items-center justify-center flex-col'>
                    <img src="/../assets/hotel.svg" alt="" />
                    <h1 className='font-montserrat text-[#2C2C2C] text-[40px] font-bold leading-[48.76px]'>Comfortable Places to Stay</h1>
                </div>
                <div className='grid grid-cols-4 gap-[26px] mt-[50px]'>
                    <div className='w-full'>
                        <div className='relative'>
                            <img src="/../assets/place1.png" className='cursor-pointer w-full' alt="" />
                            <p className='h-[20.02px] absolute top-[13px] left-[17px]  w-[81px] bg-[#E16C00] flex items-center justify-center rounded-[10px] text-white text-[12px] leading-[14px] font-normal'>FEATURED</p>
                        </div>
                        <h2 className='text-[#2C2C2C] text-[20px] leading-[24.38px] font-medium font-montserrat mt-[18px]'>Bali Riverside Hotel and Spa</h2>
                        <p className='text-[15px] text-[#505056] leading-[18.29px] font-normal mt-[10px]'>Bali, Earth</p>
                        <div className='flex items-center justify-between'>
                            <p className='text-[#5B5B6D] text-[15px] leading-[23.44px] font-light'>Starting From <span className='text-[#484F9B] text-[32px] '>$20</span> Per Person</p>
                            <p className='w-[42px] h-[36.04px] bg-[#484F9B] flex items-center justify-center rounded-[5px] text-white text-[20px] font-normal leading-[23.44px]' >4.5</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div>
                            <img src="/../assets/place2.png" className='cursor-pointer w-full' alt="" />
                        </div>
                        <h2 className='text-[#2C2C2C] text-[20px] leading-[24.38px] font-medium font-montserrat mt-[18px]'>Bali Riverside Hotel and Spa</h2>
                        <p className='text-[15px] text-[#505056] leading-[18.29px] font-normal mt-[10px]'>Bali, Earth</p>
                        <div className='flex items-center justify-between'>
                            <p className='text-[#5B5B6D] text-[15px] leading-[23.44px] font-light'>Starting From <span className='text-[#484F9B] text-[32px] '>$20</span> Per Person</p>
                            <p className='w-[42px] h-[36.04px] bg-[#484F9B] flex items-center justify-center rounded-[5px] text-white text-[20px] font-normal leading-[23.44px]' >4.5</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div>
                            <img src="/../assets/place3.png" className='cursor-pointer w-full' alt="" />
                        </div>
                        <h2 className='text-[#2C2C2C] text-[20px] leading-[24.38px] font-medium font-montserrat mt-[18px]'>Bali Riverside Hotel and Spa</h2>
                        <p className='text-[15px] text-[#505056] leading-[18.29px] font-normal mt-[10px]'>Bali, Earth</p>
                        <div className='flex items-center justify-between'>
                            <p className='text-[#5B5B6D] text-[15px] leading-[23.44px] font-light'>Starting From <span className='text-[#484F9B] text-[32px] '>$20</span> Per Person</p>
                            <p className='w-[42px] h-[36.04px] bg-[#484F9B] flex items-center justify-center rounded-[5px] text-white text-[20px] font-normal leading-[23.44px]' >4.5</p>
                        </div>
                    </div >
                    <div className='w-full'>
                        <div>
                            <img src="/../assets/place4.png" className='cursor-pointer w-full' alt="" />
                        </div>
                        <h2 className='text-[#2C2C2C] text-[20px] leading-[24.38px] font-medium font-montserrat mt-[18px]'>Bali Riverside Hotel and Spa</h2>
                        <p className='text-[15px] text-[#505056] leading-[18.29px] font-normal mt-[10px]'>Bali, Earth</p>
                        <div className='flex items-center justify-between'>
                            <p className='text-[#5B5B6D] text-[15px] leading-[23.44px] font-light'>Starting From <span className='text-[#484F9B] text-[32px] '>$20</span> Per Person</p>
                            <p className='w-[42px] h-[36.04px] bg-[#484F9B] flex items-center justify-center rounded-[5px] text-white text-[20px] font-normal leading-[23.44px]' >4.5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComfortablePlace