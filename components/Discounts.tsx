import React from 'react'

const Discounts = () => {
    return (
        <div>  <div className='lg:flex  mt-[60px] h-[506px] gap-[27px]'>
            <div className='lg:basis-[75%] basis-[100%] h-[100%] cursor-pointer relative'>
                <img src="/../assets/left.png" className='h-[100%]' alt="" />
                <div className='absolute md:right-[50px] ml-[10px] md:ml-0 bottom-[33px]'>
                    <h2 className='text-[26px] leading-[39px] font-normal text-white'>Enjoy This Summer</h2>
                    <h1 className='text-[40px] font-bold leading-[60px] font-montserrat text-white'>Up to 40% Discounts</h1>
                    <button className='h-[73px] w-[185px] bg-white flex items-center justify-center text-[#484F9B] text-[18px] leading-[27px] font-bold'>Learn More</button>
                </div>
            </div>
            <div className='lg:basis-[25%] basis-[100%] h-[100%] cursor-pointer relative mt-[15px] lg:mt-0'>
                <div className="w-full h-full">
                <img src="/../assets/right.png" alt="" className=' w-full h-full object-cover' />
                </div>
               
                <div className='absolute left-[22px] bottom-[22px]'>
                    <h1 className='text-white text-[30px] font-bold leading-[45px] font-montserrat max-w-[359px]'>Things to know before going Hiking</h1>
                    <p className='mt-[5px] text-[16px] leading-[24px] font-normal text-white'>
                        magna aliquyam erat, sed diam voluptua. At vero eos et.
                    </p>
                </div>

            </div>
        </div></div>
    )
}

export default Discounts