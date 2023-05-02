import React from 'react'

const Topbar = () => {
    return (
        <div className='bg-[#484F9B] hidden md:block'>
            <div className='container mx-auto flex md:flex-row flex-col items-center justify-between'>
                <p className='text-[white] text-[16px] leading-[25.6px] font-normal py-[8px] '>4517 Washington Ave. Manchester, Kentucky 39495 | <a href="tel: +977-98000-00000"> +977-98000-00000</a></p>
                <div className='flex items-center gap-[14px]'>
                    <img src="/../assets/facebook.svg" alt="" />
                    <img src="/../assets/instagram.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Topbar