import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
function Nabin() {
  return (
    <>
      <div className="bg-[#F5F5F5] border-b-[1px] border-solid border-[#EDEDED] ">
        <div className="container mx-auto pt-[24px] md:pt-[85px] pb-[30px] ">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-[20px] md:gap-0">
            <div className="flex flex-row items-center">
              <div className="w-[100px] h-[100px]">
                <img
                  src="/../assets/guidedetail/Nabin.svg"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-[34px]">
                <div className="flex flex-row">
                  <h1 className="font-semibold text-lg leading-[22px] text-[#2C2C2C]">
                    Nabin Magar
                  </h1>
                  <div className="bg-[#484F9B] rounded-[33px] w-[75px] h-[20px] flex flex-row justify-center items-center ml-[7px] py-[3px] px-[8px] gap-[2px]">
                    <img
                      src="/../assets/guidedetail/star.svg"
                      alt="avatar"
                      className="w-[9px] h-[8px]"
                    />
                    <h4 className="font-normal text-xs leading-[15px] text-[#FFFFFF]">
                      Featured
                    </h4>
                  </div>
                </div>
                <div className="flex flex-row gap-[14.4px] mt-[7px]">
                  <BsFacebook className="iconfa" />
                  <BsInstagram className="iconins" />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[11px]">
                <div className="w-[173px] h-[46px] border-[1px] border-solid border-[#53974A] flex flex-row items-center">
                    <a href="" className="font-montserrat font-semibold text-lg leading-[22px] text-[#53974A] px-[14px] ">Feeling Curious</a>
                </div>
                <div className="w-[154px] h-[46px] bg-[#484F9B] flex flex-row items-center">
                    <a href="" className="font-montserrat font-semibold text-lg leading-[22px] px-[22px] text-[#FFFFFF]">Book Guide</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nabin;
