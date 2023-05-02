import React from 'react'

const Guides = () => {
    return (
        <div className='container mx-auto pt-[150px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='pl-[50px] xl:pl-[95px] 2xl:pl-[120px]'>
                    <img src="/../assets/about/guideText.svg" alt="" />
                    <h2 className='text-[#484F9B] text-[31px] xl:text-[36px] leadin-[46px] xl:leading-[57.6px] font-montserrat max-w-[664px] mt-[8px] xl:mt-[13px]'>Lorem Ipsum Dolor Sit Amet sea takimata sanctus est</h2>
                    <p className='text-black text-[15px] xl:text-[18px] leadin-[24.8px] xl:leading-[28.8px] font-normal max-w-[593px] mt-[2] xl:mt-[14px]'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                    <button className='h-[57px] w-[167px] bg-[#484F9B] flex items-center justify-center text-white text-[15px] leading-[24px] font-normal mt-[17px]'>Button Text</button>
                </div>
                <div>
                    <img src="/../assets/about/About_guide.png" alt="" className="lg:ml-[0px] ml-[3px] lg:mt-[0px] mt-[13px] " />
                </div>

            </div>
        </div>
    )
}

export default Guides