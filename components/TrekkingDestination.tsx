import React from 'react'
import Slider from "react-slick";
import { HiArrowSmRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrekkingDestination = () => {

    var settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 900,
        arrow: true,

        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className='tracking overflow-hidden'>
            <div className='container mx-auto pt-[20px] pb-[74px]'>
                <div className='flex items-center justify-center flex-col'>
                    <img src="/../assets/hotel.svg" alt="" />
                    <h1 className='font-montserrat text-[#2C2C2C] text-[40px] text-center font-bold leading-[48.76px]'>Trekking Destinations</h1>
                </div>

                <div className='mt-[74px] px-[15px] md:px-0'>
                    <Slider {...settings} className="">
                        <div className='h-[493px] rounded-[10px]'>
                            <div className='h-[493px] md:w-[96%] cursor-pointer rounded-[10px] relative overflow-hidden'>
                                <img src="/../assets/pokhara.png" alt="" className='h-[100%] w-full object-cover rounded-[10px] hover:scale-[108%] transform transition-all duration-300 ease-out' />
                                <h2 className='text-white text-[30px] leading-[36.57px] font-bold absolute left-[50%] transform translate-x-[-50%] bottom-[35px]  font-montserrat'>Pokhara</h2>
                            </div>

                        </div>
                        <div className='h-[493px] rounded-[10px]'>
                            <div className='h-[493px] md:w-[96%] cursor-pointer rounded-[10px] relative overflow-hidden'>
                                <img src="/../assets/everest.png" alt="" className='h-[100%] w-full object-cover rounded-[10px] hover:scale-[108%] transform transition-all duration-300 ease-out' />
                                <h2 className='text-white text-[30px] leading-[36.57px] font-bold absolute left-[50%] transform translate-x-[-50%] bottom-[35px]  font-montserrat'>Everest Base Camp</h2>

                            </div>
                        </div>
                        <div className='h-[493px] rounded-[10px]'>
                            <div className='h-[493px] md:w-[96%] cursor-pointer rounded-[10px] relative overflow-hidden'>
                                <img src="/../assets/ghorepani.png" alt="" className='h-[100%] w-full object-cover rounded-[10px] hover:scale-[108%] transform transition-all duration-300 ease-out' />
                                <h2 className='text-white text-[30px] leading-[36.57px] font-bold absolute left-[50%] transform translate-x-[-50%] bottom-[35px]  font-montserrat'>Ghorepani</h2>

                            </div>
                        </div>
                        <div className='h-[493px] rounded-[10px]'>
                            <div className='h-[493px] md:w-[96%] cursor-pointer rounded-[10px] relative overflow-hidden'>
                                <img src="/../assets/annapurna.png" alt="" className='h-[100%] w-full object-cover rounded-[10px] hover:scale-[108%] transform transition-all duration-300 ease-out' />
                                <h2 className='text-white text-[30px] leading-[36.57px] font-bold absolute left-[50%] transform translate-x-[-50%] bottom-[35px]  font-montserrat'>Annapurna Base Camp</h2>

                            </div>
                        </div>
                        <div className='h-[493px] rounded-[10px]'>

                            <div className='h-[493px] md:w-[96%] cursor-pointer rounded-[10px] relative overflow-hidden'>
                                <img src="/../assets/everest.png" alt="" className='h-[100%] w-full object-cover rounded-[10px] hover:scale-[108%] transform transition-all duration-300 ease-out' />
                                <h2 className='text-white text-[30px] leading-[36.57px] font-bold absolute left-[50%] transform translate-x-[-50%] bottom-[35px]  font-montserrat'>Everest Base Camp</h2>

                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default TrekkingDestination