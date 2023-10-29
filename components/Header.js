"use client";

import Link from "next/link";
import React, { useState } from "react";

import { IoCloseSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import Container from "./Common/Container";
import { PagesLinkData } from "@/Data/Link";
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isHeader, setisHeader] = useState(true);
    const pathname = usePathname();


  return (
    <div className="sticky z-50 top-0 ">
      <nav className="  bg-[#153563] border-b-2 border-white ">
        <Container>
          <div className="relative">
            <div className=" flex items-center justify-between  px-2   ">
              <Link href="/">
                <img src="/assets/Sat Associates 505.png" className="h-20 " />
              </Link>
              <div className="hidden md:flex gap-2 bg-[#153563]">
                {PagesLinkData?.map((val, index) => {
                  return (
                    <div key={index + val} className="relative">
                      <Link
                        href={val.path}
                        className={` text-white py-2 font-medium rounded-sm px-4 hover:text-blue-900 hover:bg-white
                       ${val.path == "/" && "dropdown"}    ${pathname == val.path && pathname !== "/" ? "bg-white text-blue-900 " : ""}
                      `}
                      >
                        {val.lable}
                      </Link>
                      {val.path == "/" && (
                        <div
                          className={`  hidden   list absolute top-[28px] left-0 py-1 w-44`}
                        >
                          <ul className="bg-white  border-2 border-gray">
                            {val?.importantLinks.map((data, index) => {
                              return (
                                <Link
                                  key={index}
                                  href={data.path}
                                  className="transition-all font-medium delay-100 block w-full py-2 px-4 border-b-2 border-gray hover:bg-[#153563] hover:text-white "
                                >
                                  {data.lable}
                                </Link>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="md:hidden bg-[#153563]">
                <button
                  onClick={() => {
                    setisHeader(!isHeader);
                  }}
                >
                  {isHeader ? (
                    <FiMenu className="text-4xl text-white font-extrabold" />
                  ) : (
                    <IoCloseSharp className="text-4xl text-white font-extrabold" />
                  )}
                </button>
              </div>
            </div>

            <div
              className={`  md:hidden absolute  z-50 w-72 h-screen p-4  bg-[#153563]  transform  flex flex-col gap-2 transition-all duration-500 ${
                isHeader ? " translate-x-[-100%] " : " translate-x-[0%]"
              }`}
            >
              {PagesLinkData?.map((val, index) => {
                return (
                  <div key={index + val} className="relative">
                    <Link
                      href={val.path}
                      className={`block w-full text-white py-1 rounded-sm px-4 hover:text-blue-900 hover:bg-white  ${
                        val.path == "/" && "dropdown"
                      }    ${
                       ( pathname == val.path && pathname !== "/")
                          ? "bg-white text-blue-900 font-medium"
                          : ""
                      }
                      `}
                    >
                      {val.lable}
                    </Link>
                    {val.path == "/" && (
                      <div
                        className={` hidden  z-50 list absolute top-8 left-0 py-2 w-44 `}
                      >
                        <ul className="bg-white p-1 border border-[#153563]">
                          {val?.importantLinks.map((data, index) => {
                            return (
                              <Link
                                key={index}
                                href={data.path}
                                className="block w-full py-1 px-4  hover:bg-[#153563] hover:text-white"
                              >
                                {data.lable}
                              </Link>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Header;
