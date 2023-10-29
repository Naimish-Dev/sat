import React from 'react'
import { LuDownload } from "react-icons/lu";
const page = () => {
  return (
    <div>
      <div className="flex gap-2 items-center ">
        <div className=" border border-[#153563] px-2 py-4 flex gap-2 items-center justify-between">
          <div className="img">
            <img src="/assets/bg.jpg" className="w-16 h-16" />
          </div>
          <div className="Contain border-x px-8  border-[#153563]">
            <h6 className="text-xl font-medium"> doenaload infromation</h6>
            <p className="text-gray-500 text-sm">
              download Description of whatever downaload
            </p>
          </div>
          <div className="px-4">
            <a
              href="application/Java_Runtime_Environment_(64bit)_v8_Update_301.exe"
              download={true}
            >
              <LuDownload className="text-3xl cursor-pointer text-[#153563] font-extrabold bg-white hover:bg-[#153563] hover:text-white p-1 rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page