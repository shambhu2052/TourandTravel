import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#1D2023] px-[15px] md:px-0'>
            <div className='container mx-auto flex lg:flex-row flex-col py-[80px] lg:gap-[49px] xl:gap-[120px] gap-[30px]'>
                <div className='basis-[30%]'>
                    <img src="/../assets/footerlogo.png" alt="" />
                    <p className='text-[#DBE3F1]/[0.9] text-[18px] leading-[28.8px] font-normal max-w-[387px] mt-[24px]'>Lorem Ipsum is simply dummy text of free available in market the printing and typesetting industry has been.</p>

                </div>
                <div className='basis-[70%] grid md:grid-cols-3 grid-cols-2 gap-[30px] lg:gap-0 mt-[30px] lg:mt-[0px]'>
                    <div>
                        <h2 className='text-[20px] text-white leading-[32px] font-bold font-montserrat mb-[22px]'>Quick Links</h2>
                        <div className='space-y-[25px] opacity-[0.8]'>
                            <p className='text-[18px] text-white leading-[28.8px] font-normal cursor-pointer'>About</p>
                            <p className='text-[18px] text-white leading-[28.8px] font-normal cursor-pointer'>Tours</p>
                            <p className='text-[18px] text-white leading-[28.8px] font-normal cursor-pointer'>Travels</p>
                            <p className='text-[18px] text-white leading-[28.8px] font-normal cursor-pointer'>Lorem ips</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-[20px] text-white leading-[32px] font-bold font-montserrat mb-[22px]'>Vacations</h2>
                        <div className='space-y-[25px] opacity-[0.8]'>
                            <p className='text-[18px] text-white leading-[28.8px] font-normal cursor-pointer'>About</p>
                            <p className='text-[18px] text-white leading-[28.8px] font-normal cursor-pointer'>Tours</p>
                            <p className='text-[18px] text-white leading-[28.8px] font-normal cursor-pointer'>Travels</p>
                            <p className='text-[18px] text-white leading-[28.8px] font-normal cursor-pointer'>Lorem ips</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-[20px] text-white leading-[32px] font-bold font-montserrat mb-[22px]'>Contact</h2>
                        <div className='space-y-[25px] opacity-[0.8]'>
                            <p className='text-[28px] text-white leading-[28.8px] font-normal cursor-pointer'>+977-98000-00000</p>
                            <p className='text-[18px] text-white leading-[28.8px] font-normal cursor-pointer'>contact@bookingown.com.np</p>
                            <p className='text-[18px] text-white leading-[28.8px] font-normal cursor-pointer'> 4517 Washington Ave. Manchester, Kentucky 39495</p>

                        </div>
                    </div>

                </div>

            </div>
            <div className='bg-black'>
                <p className='text-[#F5F5F5]/[0.8] text-[14px] font-normal leading-[22.4px] text-center py-[23px] cursor-pointer'>copyright @2023bookingown</p>

            </div>
        </div>
    )
}

export default Footer