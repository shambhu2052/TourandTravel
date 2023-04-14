import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='container mx-auto flex items-center justify-between'>
                <Link href="/">
                    <img src="/../assets/logo.png" alt="" className='ml-[-19px] cursor-pointer' />
                </Link>
                <nav>
                    <ul className='flex items-center gap-[50px]'>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'>Home</li>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'>Travel</li>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'>Guides</li>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'>Tours</li>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'>Hotels</li>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'>News</li>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'>About</li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Navbar