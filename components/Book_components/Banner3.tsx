import React from 'react'

function Banner3({ title, slug }: any) {
  return (
    <>
     <div className='h-[193px] w-full relative'>
            <img src="/../assets/banner2.png" className='h-[100%] w-full object-cover' alt="" />
            <div className='flex items-center justify-center flex-col absolute  cursor-pointer z-20 left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
                <h1 className='text-[40px] font-montserrat font-medium leading-[48.76px]'>{title}</h1>
                <p className='text-[#000000]/[0.5]  text-[16px] font-normal leading-[18.75px] mt-[9px]'>Home . Tours<span className='text-[#53974A]'>. {slug}</span></p>
            </div>
        </div>
    </>
  )
}

export default Banner3