import React from 'react'
import { useState } from 'react';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import Personal from './Formcomponents/Personal';
import Book from './Formcomponents/Book';
import Pay from './Formcomponents/Pay';
function Main() {
    const formlist=["First Form","Second Form","Third Form"];
    const [page,setPage]=useState(0);
    const formLength = formlist.length;
    const handlePrev=()=>{
        setPage(page === 0 ? formLength - 1 : page - 1);
        console.log(setPage)
    };
    const handleNext = () =>{
        setPage(page === formLength - 1 ? 0 : page + 1);
        console.log(setPage)
    };
    console.log(page);
    const handleForm=()=>{
        switch(page){
            case 0: {
                return <Personal/>;
            }
            case 1: {
                return <Book/>;
            }
            case 2: {
                return <Pay/>;
            }
            default:
                 return null;
        }
    }
  return (
    <>
    <div className="flex flex-col md:flex-row justify-center items-center mt-[58px] mb-[55px]" >
        <div className={page === 0 ? "w-[172px] lg:w-[319px] h-[64px] personaldetail" : "bg-white text-black py-[10px] md:py-[0px]"}>
            <h5 className="font-montserrat font-medium text-[18.14px] leading-[22.11px] px-[8px] lg:px-[85px]">Personal Details</h5>
        </div>
       <div className={page=== 1 ? "w-[172px] lg:w-[319px] h-[64px] booking" : "text-black bg-[white] py-[10px] md:py-[0px] "}>
            <h5 className="font-montserrat font-medium text-[18.14px] leading-[22.11px] px-[46px] lg:px-[116px]" >Bookings</h5>
       </div>
         <div className={page=== 2 ? "w-[172px] lg:w-[319px] h-[64px] payment" : "text-black bg-[white] py-[10px] md:py-[0px]"}>
            <h5 className="font-montserrat font-medium text-[18.14px] leading-[22.11px] px-[62px] lg:px-[116px]">Payment</h5>
         </div>
    </div>
    <div className="relative">{handleForm()}
      <div className="absolute top-[69%] md:top-[77%] left-[20%]">
        <div className={page=== 0 ? "hidden" : "block"}>
            <div className="w-[172px] h-[58px] bg-[#5B5B6D1A]/[10%] ml-[32px] cursor-pointer" onClick={handlePrev}>
                <p className="flex flex-row justify-center items-center gap-[12px] font-roboto font-normal text-base leading-[25.6px] text-[#505056] pt-[16px] px-[56px] "><BsFillArrowLeftCircleFill/>Back</p>
            </div>
        </div>
      </div>
      <div className="absolute  top-[77%] right-[13%] md:right-[20%]">
        <div className="w-[172px] h-[58px] bg-[#484F9B] rounded-[5px] cursor-pointer mr-[38px]" onClick={handleNext}>
        <p  className="font-roboto font-normal text-base leading-[25.6px] text-[#FFFFFF] pl-[42px] pr-[23px] flex justify-center items-center gap-[12px] pt-[16px]">Continue<BsFillArrowRightCircleFill/></p>
        </div>
      </div>
   </div>
    </>
  )
}

export default Main