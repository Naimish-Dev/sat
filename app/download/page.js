import Container from '@/components/Common/Container';
import Link from 'next/link';
import React from 'react'
import { LuDownload } from "react-icons/lu";
const page = () => {
  return (
    <Container>
      <div className=" h-[500px] sm:h-[450px]  ">
        <div className="imgset  h-full w-full flex items-center justify-center ">
          <div className="text-white text-center w-full sm:w-5/6 mx-auto m-2 md:m-0">
            <img
              src="/assets/Sat Associates 5051.png"
              className="bg-white rounded-full mx-auto my-4 p-1"
            />

            <p className=" text-3xl sm:text-4xl md:text-5xl my-2 break-all">
              Our resourcess for your business
            </p>

            <p className=" text-lg md:text-xl mt-4 mb-2">
              " The Smart choice for Personal business and Beyond "
            </p>
            <Link href={"/contact"}>
              <button className=" pointer py-2 px-2 hover:bg-white  border-2 border-white rounded-md  text-white  hover:text-black font-medium borde my-4">
                Get Consultation
              </button>
            </Link>

            <p className="text-sm">
              Offices in Rajkot. Call Us : (+91) 7878050553
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap  gap-4 md:gap-2 justify-between items-center my-12">
          <div className=" border-1  shadow-lg basis-full sm:basis-[48%] md:basis-[32%] lg:basis-[24%] border-gray px-2 py-4 flex flex-col gap-2 items-center justify-between">
            <div className="img">
              <img src="/assets/bg.jpg" className="w-[300px] sm:w-full h-32" />
            </div>
            <div className="Contain">
              <h6 className="text-xl font-medium text-center">
                doenaload infromation
              </h6>
              <p className="text-gray-500 text-sm">
                download Description of whatever downaload cursor-pointer
                text-[#153563] font-extrabold bg-white hover:bg-[#153563]
                hover:text-white p-1 rounded-full
              </p>
            </div>
            <a
              href="application/Java_Runtime_Environment_(64bit)_v8_Update_301.exe"
              download={true}
              className="block w-full "
            >
              <div className="py-1 flex  items-center  bg-[#15356308] justify-center w-full cursor-pointer text-[#153563] border-2 border-[#153563]  gap-2 hover:bg-[#153563] hover:text-white ">
                <LuDownload className="text-3xl " />
                Download
              </div>
            </a>
          </div>
          <div className=" border-1  shadow-lg basis-full sm:basis-[48%] md:basis-[32%] lg:basis-[24%]  border-gray px-2 py-4 flex flex-col gap-2 items-center justify-between">
            <div className="img">
              <img src="/assets/bg.jpg" className="w-24 h-24" />
            </div>
            <div className="Contain">
              <h6 className="text-xl font-medium text-center">
                doenaload infromation
              </h6>
              <p className="text-gray-500 text-sm">
                download Description of whatever downaload cursor-pointer
                text-[#153563] font-extrabold bg-white hover:bg-[#153563]
                hover:text-white p-1 rounded-full
              </p>
            </div>
            <a
              href="application/Java_Runtime_Environment_(64bit)_v8_Update_301.exe"
              download={true}
              className="block w-full "
            >
              <div className="py-1 flex  items-center  bg-[#15356308] justify-center w-full cursor-pointer text-[#153563] border-2 border-[#153563]  gap-2 hover:bg-[#153563] hover:text-white ">
                <LuDownload className="text-3xl " />
                Download
              </div>
            </a>
          </div>
          <div className=" border-1  shadow-lg basis-full sm:basis-[48%] md:basis-[32%] lg:basis-[24%]  border-gray px-2 py-4 flex flex-col gap-2 items-center justify-between">
            <div className="img">
              <img src="/assets/bg.jpg" className="w-24 h-24" />
            </div>
            <div className="Contain">
              <h6 className="text-xl font-medium text-center">
                doenaload infromation
              </h6>
              <p className="text-gray-500 text-sm">
                download Description of whatever downaload cursor-pointer
                text-[#153563] font-extrabold bg-white hover:bg-[#153563]
                hover:text-white p-1 rounded-full
              </p>
            </div>
            <a
              href="application/Java_Runtime_Environment_(64bit)_v8_Update_301.exe"
              download={true}
              className="block w-full "
            >
              <div className="py-1 flex  items-center  bg-[#15356308] justify-center w-full cursor-pointer text-[#153563] border-2 border-[#153563]  gap-2 hover:bg-[#153563] hover:text-white ">
                <LuDownload className="text-3xl " />
                Download
              </div>
            </a>
          </div>
          <div className=" border-1  shadow-lg basis-full sm:basis-[48%] md:basis-[32%] lg:basis-[24%]  border-gray px-2 py-4 flex flex-col gap-2 items-center justify-between">
            <div className="img">
              <img src="/assets/bg.jpg" className="w-24 h-24" />
            </div>
            <div className="Contain">
              <h6 className="text-xl font-medium text-center">
                doenaload infromation
              </h6>
              <p className="text-gray-500 text-sm">
                download Description of whatever downaload cursor-pointer
                text-[#153563] font-extrabold bg-white hover:bg-[#153563]
                hover:text-white p-1 rounded-full
              </p>
            </div>
            <a
              href="application/Java_Runtime_Environment_(64bit)_v8_Update_301.exe"
              download={true}
              className="block w-full "
            >
              <div className="py-1 flex  items-center  bg-[#15356308] justify-center w-full cursor-pointer text-[#153563] border-2 border-[#153563]  gap-2 hover:bg-[#153563] hover:text-white ">
                <LuDownload className="text-3xl " />
                Download
              </div>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default page