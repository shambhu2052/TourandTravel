import React from "react";

const Enquiry = () => {
  return (
    <div className="bg-[#F5F5F5] h-[920px] lg:h-[700px]">
      <div className="relative">
        <div className="flex flex-col lg:flex-row gap-[97px] xl:gap-[144px]">
          <div className="box1">
            <div className="ml-[25px] md:ml-[146px] 2xl:ml-[395px] mt-[13px] lg:mt-[65px]">
              <img src="/../assets/guidedetail/enq.png" alt="avatar" className="w-[80x] h-[40px]"/>
              <h1 className="font-bold font-montserrat text-[40px] leading-[49px] text-[#2C2C2C] pt-[1px]">
                How can i help you ?
              </h1>
              <p className="font-roboto font-normal text-base leading-[26px] text-[#505056] pt-[12.63px] max-w-[414px]">
                Rest your curiotisty and Lorem ipsum dolor sit amet, consectetur
                adipiscing dolor sit.
              </p>
            </div>
            <img
              src="/../assets/guidedetail/image 5.svg"
              alt="avatar"
              className="absolute top-[87px] w-[195px] lg:w-[332px] "
            />
            <img
              src="/../assets/guidedetail/image6.svg"
              alt="avatar"
              className="w-[122px] lg:w-[179px] h-[148px] absolute top-[150px] lg:top-[227px] left-[156px] lg:left-[274px]"
            />
          </div>
          <div className="box2 mt-[40px] lg:mt-[108px] md:mr-[88px] mx-[15px] xl:mr-[20px] md:ml-[88px] lg:ml-[0px]">
          <form>
            <label className="font-roboto font-normal text-lg leading-[28.8px] text-[#505056] pb-[15px]">
              Fullname
            </label>
            <br />
            <input type="text" className="w-full h-[60px] bg-[#F9F9F9] field outline-none" /><br/>
            <label className="font-roboto font-normal text-lg leading-[29px] text-[#505056] pt-[20px] pb-[15px]">
              Contact Number
            </label>
            <br />
            <input type="text" className="w-full h-[60px] bg-[#F9F9F9] field" />
            <label className="font-roboto font-normal text-lg leading-[29px] text-[#505056] pt-[20px] pb-[15px]">Enquiry</label><br/>
            <input type="text" className="w-full h-[150px] bg-[#F9F9F9] field"/>
            <div className="w-[125px] md:w-[200px] h-[53px] md:h-[67px] bg-[#484F9B] flex flex-row items-center mt-[33px] rounded-[2px] ml-[132px] md:ml-[445px] lg:ml-[313px]">
                <a href="" className="font-roboto font-bold text-lg leading-[29px] text-[#FFFFFF] px-[30px] md:px-[71px]">Submit</a>
            </div>
          </form>
        </div>

        </div>
      


      </div>
    </div>
  );
};

export default Enquiry;
