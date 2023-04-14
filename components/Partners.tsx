import React from 'react'

const Partners = () => {

    let data =
        [
            {
                img: "/../assets/company1.png",
                name: "Nabin Magar"
            },
            {
                img: "/../assets/company2.png",
                name: "Robert Fox"
            },
            {
                img: "/../assets/company3.png",
                name: "Savannah Nguyen"
            },
            {
                img: "/../assets/company4.png",
                name: "Jacob Jones"
            },
            {
                img: "/../assets/company5.png",
                name: "Jerome Bell"
            },
            {
                img: "/../assets/company6.png",
                name: "Courtney Henry"
            },
            {
                img: "/../assets/company7.png",
                name: "Jerome Bell"
            },
            {
                img: "/../assets/company8.png",
                name: "Courtney Henry"
            },
        ]
    return (
        <div>
            <div className='container mx-auto pb-[60px]'>
                <div className='flex items-center justify-center flex-col'>
                    <img src="/../assets/company.svg" alt="" />
                    <h1 className='font-montserrat text-[#2C2C2C] text-[40px] font-bold leading-[48.76px]'>Our Partner Companies</h1>
                </div>
                <div className='grid grid-cols-8 mt-[50px]'>
                    {
                        data.map((item: any, index: number) => (
                            <div key={index} className='flex items-center justify-center flex-col gap-[21px]'>
                                <img src={item.img} className='cursor-pointer opacity-[0.6] h-[168px] w-[178px]' alt="" />
                                {/* <h2 className='text-[#5B5B6D] text-[20px] leading-[23.44px] font-normal '>{item.name}</h2> */}
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default Partners