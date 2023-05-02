import React from 'react'
import { useState } from 'react';
import { Button, Drawer } from 'antd';
import Link from 'next/link';
function Drawers() {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
      };
    
      const onClose = () => {
        setOpen(false);
      };
  return (
    <>
        <div className='border border-[#EDEDED] rounded-[2px] h-[38px] w-[38px] flex items-center justify-center cursor-pointer md:hidden ' onClick={showDrawer}>
                    <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="27" height="3" rx="1.5" fill="#97A6B7" />
                        <rect y="9" width="27" height="3" rx="1.5" fill="#97A6B7" />
                        <rect y="18" width="27" height="3" rx="1.5" fill="#97A6B7" />
                    </svg>

                </div>
      <Drawer  placement="right" onClose={onClose} open={open}>
      <ul className='flex flex-col items-center gap-[40px]  '>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'><Link href="/">Home</Link></li>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'>Travel</li>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'><Link href="/guides">Guides</Link></li>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'>Tours</li>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'>Hotels</li>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'>News</li>
                        <li className='text-[#5B5B6D] text-[16px] leading-[18.75px] font-medium cursor-pointer hover:text-[#484F9B] transition-colors duration-150 ease-in-out'><Link href="/about">About</Link></li>
                    </ul>
      </Drawer>
    </>
  )
}

export default Drawers