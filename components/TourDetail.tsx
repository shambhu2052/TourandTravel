import React from 'react'

const TourDetail = () => {
    let gallery_images = [
        {
            img: "/../assets/tours/gallery_pic1.png"
        },
        {
            img: "/../assets/tours/gallery_pic2.png"
        },
        {
            img: "/../assets/tours/gallery_pic3.png"
        },
        {
            img: "/../assets/tours/gallery_pic4.png"
        },
        {
            img: "/../assets/tours/gallery_pic5.png"
        },
    ]
    let tracking=[
        {
        img:'/../assets/Trackingguide/video.svg'
    },
    {
        img:'/../assets/Trackingguide/facebook.svg'
    },
    {
        img:'/../assets/Trackingguide/insta.svg'
    },
    {
        img:'/../assets/Trackingguide/linkdin.svg'
    },]
    return (
        <div className='container mx-auto mt-[31px]'>
            <h1 className='text-[#2C2C2C] text-[27px] md:text-[30px] font-semibold leading-[48px] font-montserrat text-center md:text-left '>Annapurna Base Camp - EBC</h1>
            <div className='flex flex-col md:flex-row  gap-[22px] mt-[33px]'>
                <div className='basis-[70%] mx-[10px] md:mx-[0px]'>
                    <div className='h-[250px] md:h-[542px] w-full'>               
                        <img src="/../assets/tours/detail.png" alt="" />
                    </div>
                    <p className='text-[#505056] text-[16px] font-normal leading-[25.6px] max-w-[1043px] mt-[-34px] md:mt-[-133px] xl:mt-[-50px] 2xl:mt-[17px]'>
                        In an ideal world, most of us would love to stand on the top of the world, 8,848m high on Mt Everest.
                        Realistically, most of us will not be able to achieve this! But if you have good fitness and strong determination, you can make it to Everest Base Camp!
                        And between you and me, the views of Everest from Kalapatthar are the most spectacular you can get without having to spend weeks trudging up to the summit!
                        Hopefully, you have gone through our sections about the Everest Base Camp Trek and have gathered all the information you need to help you decide when you would like to do this trek, what to bring with you on the EBC trek, and some of the highlights of the trek itself. We believe this is one of the best routes in the world!
                    </p>
                    <h2 className='text-[#2C2C2C] text-[26px] leading-[31.69px] font-bold font-montserrat mt-[30px] mb-[16px]'>Highlights</h2>
                    <p className='text-[#505056] text-[16px] leading-[25.6px] font-normal max-w-[1043px]'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
                    <h2 className='text-[#2C2C2C] text-[26px] leading-[31.69px] font-bold font-montserrat mt-[30px] mb-[16px]'>Gallery</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-[19px] mb-[30px]'>
                        {
                            gallery_images.map((item: any, index: number) => (
                                <div className='h-[195px] w-full cursor-pointer' key={index}>
                                    <img src={item.img} className='h-[100%] w-full object-cover' alt="" />
                                </div>

                            ))
                        }

                    </div>
                </div>
                <div className='basis-[30%] mx-[10px] md:mx-0'>
                    <div className='border border-[#D9D9D9] rounded-[10px] pt-[34px] pl-[28px] pr-[22px] pb-[31px] mb-[10px] md:mb-0'>
                        <p className='text-[#5B5B6D] text-[18px] leading-[21.09px] font-normal mb-[9.98px]'>Price Per Person</p>
                        <h1 className='text-[#484F9B] text-[50px] md:text-[42px] lg:text-[50px] font-bold leading-[60.95px] font-montserrat mb-[24.3px]'>Rs. 5500</h1>
                        <div className='space-y-[20px]'>
                            <div className='flex items-center gap-[10px]'>
                                <img src="/../assets/tours/experience_guide.svg" alt="" />
                                <p className='text-[#505056] text-[16px] font-normal leading-[25.6px]'>Experienced Guide</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <img src="/../assets/tours/sanitary_equipment.svg" alt="" />
                                <p className='text-[#505056] text-[16px] font-normal leading-[25.6px]'>Experienced Guide</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <img src="/../assets/tours/security.svg" alt="" />
                                <p className='text-[#505056] text-[16px] font-normal leading-[25.6px]'>Experienced Guide</p>
                            </div>
                        </div>
                        <button className='h-[55px] w-full bg-[#484F9B] mt-[28px] flex items-center justify-center text-white font-bold text-[16px] leading-[19.5px]'>Book Now</button>
                    </div>
                    <div className="flex flex-row mt-[54px]">
                    <div className="w-[138px] h-[149px]">
                        <img src="/../assets/nabin.png"alt="avatar" className="w-full h-full object-cover"/>
                    </div>
                    <div className="ml-[14px]">
                        <h3 className="font-montserrat font-semibold text-lg leading-[22px] text-[#2C2C2C]">Nabin Magar</h3>
                        <h5 className="font-roboto font-semibold text-[13px] leading-[15px] text-[#53974A] pt-[15px] pb-[9px] ">Trekking Guide</h5>
                        <p className="font-roboto font-normal text-sm leading-[22.4px] text-[#5B5B6D]">“ Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit.”</p>
                        <div className="flex flex-row mt-[12px] gap-[10px] cursor-pointer">
                        {
                tracking.map((a:any, index:number)=>(
                    <div className="w-[30px] h-[30px] cursor-pointer" key={index}>
                        <a href=""><img src={a.img} alt="avatar" className="w-full h-full object-cover"/></a>
                    </div>
                )
                )
            }
                        </div>
                    </div>
                    </div>
                    <div className="mt-[54px] mb-[10px] md:mb-[0px]">
                        <h2 className="font-montserrat text-xl font-bold leading-[24px] text-[#2C2C2C]">Available Dates</h2>
                        <div className="grid grid-cols-4 gap-[14px] mt-[23px] cursor-pointer">
                            <div className="w-full h-[109px] bg-[#F9F9F9] border border-solid border-[#D9D9D9] rounded-[5px] flex flex-col justify-center items-center">
                              <h3 className="font-roboto font-normal text-xl leading-[32px] text-[#5B5B6D]">April</h3>
                              <p className="font-roboto font-normal text-base leading-[25.5px] text-[#5B5B6D]">2023</p>
                            </div>
                            <div className="w-full h-[109px] bg-[#F9F9F9] border border-solid border-[#D9D9D9] rounded-[5px] flex flex-col justify-center items-center">
                              <h3 className="font-roboto font-normal text-xl leading-[32px] text-[#5B5B6D]">April</h3>
                              <p className="font-roboto font-normal text-base leading-[25.5px] text-[#5B5B6D]">2023</p>
                            </div>
                            <div className="w-full h-[109px] bg-[#F9F9F9] border border-solid border-[#D9D9D9] rounded-[5px] flex flex-col justify-center items-center">
                              <h3 className="font-roboto font-normal text-xl leading-[32px] text-[#5B5B6D]">April</h3>
                              <p className="font-roboto font-normal text-base leading-[25.5px] text-[#5B5B6D]">2023</p>
                            </div>
                            <div className="w-full h-[109px] bg-[#F9F9F9] border border-solid border-[#D9D9D9] rounded-[5px] flex flex-col justify-center items-center">
                              <h3 className="font-roboto font-normal text-xl leading-[32px] text-[#5B5B6D]">April</h3>
                              <p className="font-roboto font-normal text-base leading-[25.5px] text-[#5B5B6D]">2023</p>
                            </div>
                            <div className="w-full h-[109px] bg-[#F9F9F9] border border-solid border-[#D9D9D9] rounded-[5px] flex flex-col justify-center items-center">
                              <h3 className="font-roboto font-normal text-xl leading-[32px] text-[#5B5B6D]">April</h3>
                              <p className="font-roboto font-normal text-base leading-[25.5px] text-[#5B5B6D]">2023</p>
                            </div>
                            <div className="w-full h-[109px] bg-[#F9F9F9] border border-solid border-[#D9D9D9] rounded-[5px] flex flex-col justify-center items-center">
                              <h3 className="font-roboto font-normal text-xl leading-[32px] text-[#5B5B6D]">April</h3>
                              <p className="font-roboto font-normal text-base leading-[25.5px] text-[#5B5B6D]">2023</p>
                            </div>
                        </div>
                    </div>
                </div>

              
            </div>
        </div>

    )
}

export default TourDetail