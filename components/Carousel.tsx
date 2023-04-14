import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { HiArrowSmRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Navbar from "./Navbar";
// import { api } from "../../global/baserUrl";
// import { imageBaseUrl } from "../../global/baserUrl";
// import { motion } from "framer-motion"
// import axios from "axios"




function SampleNextArrow({ onClick }: any) {

    return (
        <div onClick={onClick} className="absolute top-[50%] 2xl:right-[5%] xl:right-[3%] carousel_btn flex  items-center justify-center cursor-pointer z-40 transform translate-y-[-50%] h-[45px] w-[45px] rounded-full border-[2px] border-[white]">
            <svg width="11.67" height="21.67" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.14279 21.8332C0.885348 21.8296 0.638509 21.7284 0.450732 21.5493C0.268338 21.3621 0.166016 21.1092 0.166016 20.8457C0.166016 20.5822 0.268338 20.3294 0.450732 20.1422L9.48393 10.9714L0.450732 1.80056C0.295844 1.6087 0.21669 1.36514 0.228666 1.11724C0.240642 0.869342 0.342893 0.634835 0.515529 0.459333C0.688165 0.283831 0.918842 0.179884 1.16269 0.167708C1.40654 0.155533 1.64613 0.236001 1.83485 0.393461L11.548 10.2678C11.7304 10.455 11.8327 10.7079 11.8327 10.9714C11.8327 11.2349 11.7304 11.4877 11.548 11.6749L1.83485 21.5493C1.64707 21.7284 1.40024 21.8296 1.14279 21.8332Z" fill="#fff" />
            </svg>
        </div>
    );
}

function SamplePrevArrow({ onClick }: any) {

    return (
        <div onClick={onClick} className="carousel_btn  flex items-center justify-center absolute z-20 top-[50%] 2xl:left-[5%] xl:left-[3%]  cursor-pointer transform translate-y-[-50%] h-[45px] w-[45px] rounded-full border-[2px] border-[white]">
            <svg width="11.67" height="21.67" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8572 21.8332C11.1147 21.8296 11.3615 21.7284 11.5493 21.5493C11.7317 21.3621 11.834 21.1092 11.834 20.8457C11.834 20.5822 11.7317 20.3294 11.5493 20.1422L2.51607 10.9714L11.5493 1.80056C11.7042 1.6087 11.7833 1.36514 11.7713 1.11724C11.7594 0.869342 11.6571 0.634835 11.4845 0.459333C11.3118 0.283831 11.0812 0.179884 10.8373 0.167708C10.5935 0.155533 10.3539 0.236001 10.1651 0.393461L0.452033 10.2678C0.269638 10.455 0.167317 10.7079 0.167317 10.9714C0.167317 11.2349 0.269638 11.4877 0.452033 11.6749L10.1651 21.5493C10.3529 21.7284 10.5998 21.8296 10.8572 21.8332Z" fill="#fff" />
            </svg>
            {/* <p className='bg-red-400'>hello</p> */}
        </div>
    );
}

const sliderData = [
    {
        img: "/../assets/slider.png",
        heading: "LOREM IPSUM THE BEST DIGITAL AGENCY",
        Button_Text: "Contact"
    },
    {
        img: "/../assets/slider.png",
        heading: "LOREM IPSUM THE BEST DIGITAL AGENCY",
        Button_Text: "Contact"
    },
    {
        img: "/../assets/slider.png",
        heading: "LOREM IPSUM THE BEST DIGITAL AGENCY",
        Button_Text: "Contact"
    },
];

const Carousel = () => {
    const [banner, setBanner] = useState<any>(null);
    //   const fetchbanner = async () => {
    //     const res = await api.get(`/banners`);
    //     setBanner(res.data);
    //   };

    //   useEffect(() => {
    //     fetchbanner();
    //   }, []);

    var settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 900,
        arrow: true,

        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    // console.log("hello");

    // useEffect(() => {
    //     let config = {
    //         method: 'get',
    //         maxBodyLength: Infinity,
    //         url: 'http://localhost:1337/api/banners?populate=*',
    //         headers: {}
    //     };


    //     axios.request(config)
    //         .then((response: any) => {
    //             // console.log(JSON.stringify(response.data,));
    //             setBanner(response.data)

    //         })
    //         .catch((error: any) => {
    //             console.log(error);
    //         });

    // }, [])

    // console.log(banner);



    return (
        <div className=" relative overflow-x-hidden ">
            <div className='bg-[#0F3B70]/[0.1] absolute left-0 top-0 w-full h-[100%] z-40 hidden '>
            </div>

            <Slider {...settings} className="">
                {sliderData?.map((data: any, i: any) => {
                    // console.log(data.Image.url, "dd");
                    return (
                        <div className=" w-full md:h-[457px] h-[324px]  relative cursor-pointer" key={i}>
                            <div className=" z-2 bg-overlay bg-[#0000004D]   absolute top-0 left-0 w-full h-full"></div>

                            <img
                                src={data?.img}
                                className=" w-full  h-[100%] object-cover"
                                alt=""
                            />

                            <div className="absolute left-[50%] top-[50%] transform  translate-x-[-50%] translate-y-[-50%] w-full flex items-center justify-center flex-col">
                                {/* <p className="font-madi text-[51.63px] font-normal text-center text-white leading-[68.15px]">Book your Adventure</p> */}
                                <img src="/../assets/heading.svg" alt="" />
                                <div className=" mt-[33px] flex items-center bg-white z-40 relative 2xl:max-w-[1283px] xl:w-[1000px] h-[105px] gap-[79px] rounded-[10px] shadow-md">
                                    <div className="basis-[80%] grid grid-cols-3">
                                        <div className="px-[88px]">
                                            <h2 className="text-[#505056] text-[14px] leading-[16.41px] font-medium">Location</h2>
                                            <p className="text-[#5B5B6D] whitespace-pre text-[15px] leading-[17.58px] font-normal mt-[13px] ">What's your Destination ? </p>
                                        </div>
                                        <div className="px-[88px]">
                                            <h2 className="text-[#505056] text-[14px] leading-[16.41px] font-medium">Location</h2>
                                            <p className="text-[#5B5B6D] whitespace-pre text-[15px] leading-[17.58px] font-normal mt-[13px] ">What's your Destination ? </p>
                                        </div>
                                        <div className="px-[88px]">
                                            <h2 className="text-[#505056] text-[14px] leading-[16.41px] font-medium">Location</h2>
                                            <p className="text-[#5B5B6D] whitespace-pre text-[15px] leading-[17.58px] font-normal  mt-[13px]">What's your Destination ? </p>
                                        </div>
                                    </div>
                                    <div className="basis-[20%] pr-[26px]">
                                        <button className="h-[75px] w-[243px] bg-[#484F9B] flex items-center justify-center text-[16px] leading-[18.75px] rounded-[2px] text-white font-extrabold">Search</button>
                                    </div>
                                </div>
                                <h2 className="text-[40px] font-montserrat font-semibold leading-[48.76px] text-center text-white mt-[33px]">
                                    Tour Guides and Packages for Every Traveller
                                </h2>


                            </div>




                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default Carousel;
