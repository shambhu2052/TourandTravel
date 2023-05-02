import React from 'react'

const Book = () => {
    let data =
        [
            {
                img: "/../assets/guide1.png",
                name: "Nabin Magar" 
            },
            {
                img: "/../assets/guide2.png",
                name: "Robert Fox"
            },
            {
                img: "/../assets/guide3.png",
                name: "Savannah Nguyen"
            },
            {
                img: "/../assets/guide4.png",
                name: "Jacob Jones"
            },
            {
                img: "/../assets/guide5.png",
                name: "Jerome Bell"
            },
            {
                img: "/../assets/guide6.png",
                name: "Courtney Henry"
            },
            {
                img: "/../assets/guide5.png",
                name: "Jerome Bell"
            },
            {
                img: "/../assets/guide6.png",
                name: "Courtney Henry"
            },
        ]
    return (
        <div>
            <div className='container mx-auto pb-[65px]'>
                <div className='flex items-center justify-center flex-col'>
                    <img src="/../assets/Book.svg" alt="" />
                    <h1 className='font-montserrat text-[#2C2C2C] text-[37px] md:text-[40px] font-bold leading-[48.76px]'>Book a Tour Guide</h1>
                </div>
                <div className='lg:flex mt-[30px]  px-[15px] md:px-0 '>
                    <div className='md:basis-[40%] basis-[100%] flex items-center justify-center bg-[#484F9B]'>
                        <form action="" className='bg-[#484F9B] pt-[35px] pb-[31px] w-full px-[48px]'>
                            <div>
                                <p className='text-[#F9F9F9] text-[18px] leading-[28.8px] font-normal'>Fullname</p>
                                <input type="text" className='w-full h-[54px] outline-none mt-[15px] pl-[14px]' />
                            </div>
                            <div className='mt-[20px]'>
                                <p className='text-[#F9F9F9] text-[18px] leading-[28.8px] font-normal'>Your Number</p>
                                <input type="text" className='w-full h-[54px] outline-none mt-[15px] pl-[14px]' />
                            </div>
                            <div className='mt-[20px]'>
                                <p className='text-[#F9F9F9] text-[18px] leading-[28.8px] font-normal'>Message</p>
                                <textarea className='w-full h-[119px] outline-none mt-[15px] pl-[14px] pt-[14px]' />
                            </div>
                            <button className='w-full bg-[#0A0F4B] h-[67px] flex items-center mt-[42px] justify-center text-[#F9F9F9] text-[18px] leading-[28.8px] font-bold'>Check Availability</button>
                        </form>
                    </div>
                    <div className='md:basis-[60%] mt-[30px]  lg:mt-0 basis-[100%] grid md:grid-cols-4 grid-cols-2 md:gap-y-[10px] lg:gap-y-[0px] gap-x-[70px] guide lg:pl-[99px]'>
                        {
                            data.map((item: any, index: number) => (
                                <div key={index} className='flex items-center justify-center flex-col gap-[21px]'>
                                    <img src={item.img} className='cursor-pointer h-[150px] w-[150px]' alt="" />
                                    <h2 className='text-[#5B5B6D] text-[20px] leading-[23.44px] font-normal '>{item.name}</h2>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Book