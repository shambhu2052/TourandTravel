import Link from 'next/link'
import React from 'react'
import Drawers from './Drawers'

const Navbar = () => {
    return (
        <div>
            <div className='container mx-auto flex items-center justify-between px-[15px] md:px-0 py-[10px] md:py-0'>
                <Link href="/">
                    <img src="/../assets/logo.png" alt="" className='md:ml-[-19px] ml-[-10px] w-[80%] cursor-pointer' />
                </Link>
                <nav>
                    <ul className='md:flex items-center gap-[50px] hidden '>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'><Link href="/">Home</Link></li>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'>Travel</li>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'><Link href="/guides">Guides</Link></li>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'>Tours</li>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'>Hotels</li>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'>News</li>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'><Link href="/about">About</Link></li>
                    </ul>
                </nav>
                <Drawers/>
            </div>
        </div>

    )
}

export default Navbar