import React, { useState } from "react";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
function Collape() {
  const { Panel } = Collapse;
  const text =
    "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.";
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const [key, setKey] = useState("1");

  const HandleToggle = (value: any) => {
    
    setKey(value);
    
  };

  return (
    <>
      {/* <Collapse defaultActiveKey={['1']} onChange={onChange} accordion bordered={false} >
      <Panel onClick={()=>HandleToggle("1")} header="My discount code is not working, what do I do?" key='1' >
        <p>{text}</p>
      </Panel>
      <Panel header="My discount code is not working, what do I do?" key='2'>
        <p>{text}</p>
      </Panel>
      <Panel header="My discount code is not working, what do I do?" key='3'>
        <p>{text}</p>
      </Panel>
      <Panel header="My discount code is not working, what do I do?" key="4">
        <p>{text}</p>
      </Panel>
      <Panel header="My discount code is not working, what do I do?" key="5">
        <p>{text}</p>
      </Panel>
      <Panel header="My discount code is not working, what do I do?" key="6">
        <p>{text}</p>
      </Panel>
    </Collapse> */}
      <div>
        <div className="ml-[185px] rounded-[10px]  bg-[#FFFFFF] asked">
          <div className="flex flex-row justify-between " onClick={() => HandleToggle("1")}>
            <div className="font-semibold font-montserrat text-[20px] leading-[24.3px] text-[#2C2C2C] pt-[31px] pl-[40px]" >My discount code is not working, what do I do?</div>
            {key === "1" ?<MinusOutlined className="minus" />:<PlusOutlined  className="plus"/>}
          </div>
          {key === "1" ? <div className="font-roboto font-normal text-[18px] leading-[34px] text-[#505056] pl-[40px] pt-[36px] pb-[43px] pr-[154px]">{text}</div> : <></>}
        </div>

        <div className="ml-[185px ] rounded-[10px]  bg-[#FFFFFF] asked">
          <div className="flex flex-row justify-between" onClick={() => HandleToggle("2")}>
            <div className="font-semibold font-montserrat text-[20px] leading-[24.3px] text-[#2C2C2C] pt-[31px] pl-[40px]" >
            My discount code is not working, what do I do?
            </div>
            {key === "2"?<MinusOutlined className="minus"/>:<PlusOutlined className="plus"/>}
          </div>
          {key === "2" ? <div className="font-roboto font-normal text-[18px] leading-[34px] text-[#505056] pl-[40px] pt-[36px] pb-[43px] pr-[154px]">{text}</div> : <></>}
        </div>

        <div className="ml-[185px] rounded-[10px]  bg-[#FFFFFF] asked">
          <div className="flex flex-row justify-between" onClick={() => HandleToggle("3")}>
            <div className="font-semibold font-montserrat text-[20px] leading-[24.3px] text-[#2C2C2C] pt-[31px] pl-[40px]" >
            My discount code is not working, what do I do?
            </div>
            {key === "3"?<MinusOutlined className="minus" />:<PlusOutlined className="plus"/>}
          </div>
          {key === "3" ? <div className="font-roboto font-normal text-[18px] leading-[34px] text-[#505056] pl-[40px] pt-[36px] pb-[43px] pr-[154px]">{text}</div> : <></>}
        </div>

        <div className="ml-[185px]">
          <div className="flex flex-row justify-between" onClick={() => HandleToggle("4")}>
            <div >TIle is here</div>
            {key === "4" ?<MinusOutlined />:<PlusOutlined />}
          </div>
          {key === "4" ? <div>{text}</div> : <></>}
        </div>
      </div>
    </>
  );
}

export default Collape;
