import React from 'react'
import Slider from "react-slick";
import { HiArrowSmRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeatureExpeditons = () => {

    var settings = {
        dots: false,
        autoplay: false,
        infinite: true,
        speed: 900,
        arrow: true,

        slidesToShow: 3,
        slidesToScroll: 3,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
    };
    return (
        <div>
            <div className='container  mx-auto pt-[31px] pb-[62px]'>
                <div className='flex items-center justify-center flex-col'>
                    <img src="/../assets/hotel.svg" alt="" />
                    <h1 className='font-montserrat text-[#2C2C2C] text-[40px] font-bold leading-[48.76px]'>Featured Expeditions</h1>
                </div>
                <div className='mt-[74px]'>
                    <Slider {...settings} className="">
                        <div className='h-[710px] rounded-[10px] '>
                            <div className='h-[710px] w-[96%]  cursor-pointer rounded-[10px] relative overflow-hidden'>
                                <p className='h-[52px] w-[136px] absolute z-40 top-[0px] left-[50%] transform translate-x-[-50%] bg-[#53974A] flex items-center justify-center text-white text-[20px] leading-[24.8px] font-bold font-montserrat'>50% OFF</p>
                                <img src="/../assets/pokhara2.png" alt="" className='h-[100%] w-full object-cover rounded-[10px] hover:scale-[108%] transform transition-all duration-300 ease-out' />
                                <div className='absolute left-[50%] transform translate-x-[-50%] bottom-[20px] w-full pl-[14px]'>
                                    <div className='flex items-center gap-[14px]'>
                                        <img src="/../assets/location.svg" alt="" />
                                        <p className='text-[20px] leading-[24.38px] font-bold font-montserrat text-white'>Ghandruk - Ghorepani Trek, 5 Days</p>
                                    </div>
                                    <h2 className='text-white text-[36px] leading-[42.19px] font-normal pt-[23px] pl-[47px]   '>Rs. 4500 <span className='text-[18px] leading-[21.09px]'>/Person</span></h2>
                                    <p className='text-white/[0.7] text-[18px] leading-[21.09px] font-normal text-end mt-[11px] pr-[41px]'>Details &gt;&gt;</p>
                                </div>
                            </div>

                        </div>
                        <div className='h-[710px] rounded-[10px]'>
                            <div className='h-[710px] w-[96%] cursor-pointer rounded-[10px] relative overflow-hidden'>
                                <img src="/../assets/pokhara2.png" alt="" className='h-[100%] w-full object-cover rounded-[10px] hover:scale-[108%] transform transition-all duration-300 ease-out' />
                                <div className='absolute left-[50%] transform translate-x-[-50%] bottom-[20px] w-full pl-[14px]'>
                                    <div className='flex items-center gap-[14px]'>
                                        <img src="/../assets/location.svg" alt="" />
                                        <p className='text-[20px] leading-[24.38px] font-bold font-montserrat text-white'>Ghandruk - Ghorepani Trek, 5 Days</p>
                                    </div>
                                    <h2 className='text-white text-[36px] leading-[42.19px] font-normal pt-[23px] pl-[47px]   '>Rs. 4500 <span className='text-[18px] leading-[21.09px]'>/Person</span></h2>
                                    <p className='text-white/[0.7] text-[18px] leading-[21.09px] font-normal text-end mt-[11px] pr-[41px]'>Details &gt;&gt;</p>
                                </div>

                            </div>
                        </div>
                        <div className='h-[710px] rounded-[10px]'>
                            <div className='h-[710px] w-[96%] cursor-pointer rounded-[10px] relative overflow-hidden'>
                            <p className='h-[52px] w-[136px] absolute z-40 top-[0px] left-[50%] transform translate-x-[-50%] bg-[#53974A] flex items-center justify-center text-white text-[20px] leading-[24.8px] font-bold font-montserrat'>50% OFF</p>

                                <img src="/../assets/pokhara2.png" alt="" className='h-[100%] w-full object-cover rounded-[10px] hover:scale-[108%] transform transition-all duration-300 ease-out' />
                                <div className='absolute left-[50%] transform translate-x-[-50%] bottom-[20px] w-full pl-[14px]'>
                                    <div className='flex items-center gap-[14px]'>
                                        <img src="/../assets/location.svg" alt="" />
                                        <p className='text-[20px] leading-[24.38px] font-bold font-montserrat text-white'>Ghandruk - Ghorepani Trek, 5 Days</p>
                                    </div>
                                    <h2 className='text-white text-[36px] leading-[42.19px] font-normal pt-[23px] pl-[47px]   '>Rs. 4500 <span className='text-[18px] leading-[21.09px]'>/Person</span></h2>
                                    <p className='text-white/[0.7] text-[18px] leading-[21.09px] font-normal text-end mt-[11px] pr-[41px]'>Details &gt;&gt;</p>
                                </div>

                            </div>
                        </div>
                        <div className='h-[710px] rounded-[10px]'>
                            <div className='h-[710px] w-[96%] cursor-pointer rounded-[10px] relative overflow-hidden'>
                                <img src="/../assets/pokhara2.png" alt="" className='h-[100%] w-full object-cover rounded-[10px] hover:scale-[108%] transform transition-all duration-300 ease-out' />
                                <div className='absolute left-[50%] transform translate-x-[-50%] bottom-[20px] w-full pl-[14px]'>
                                    <div className='flex items-center gap-[14px]'>
                                        <img src="/../assets/location.svg" alt="" />
                                        <p className='text-[20px] leading-[24.38px] font-bold font-montserrat text-white'>Ghandruk - Ghorepani Trek, 5 Days</p>
                                    </div>
                                    <h2 className='text-white text-[36px] leading-[42.19px] font-normal pt-[23px] pl-[47px]   '>Rs. 4500 <span className='text-[18px] leading-[21.09px]'>/Person</span></h2>
                                    <p className='text-white/[0.7] text-[18px] leading-[21.09px] font-normal text-end mt-[11px] pr-[41px]'>Details &gt;&gt;</p>
                                </div>

                            </div>
                        </div>


                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default FeatureExpeditons