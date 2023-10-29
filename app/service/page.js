"use client";
import Container from "@/components/Common/Container";
import Link from "next/link";
import React from "react";
import {PiCertificateBold} from "react-icons/pi"
import { RiTrademarkLine } from "react-icons/ri";
import { TbLicense } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";
import { LiaFileSignatureSolid } from "react-icons/lia";
import { AiOutlineForm } from "react-icons/ai";
import { BsCalculator } from "react-icons/bs";
import { TbBusinessplan } from "react-icons/tb"; 
import { LiaUserCogSolid } from "react-icons/lia"; 

const ServicesData = [
  {
    Name: "DGFT",
    Icon: LiaUserCogSolid,
    SubServices: [
      {
        title: "IEC Certificate",
      },
      {
        title: "EPCG",
      },
      {
        title: "Advance License",
      },
      {
        title: "Star Export House",
      },
      {
        title: "MEIS",
      },
      {
        title: "SEIS",
      },
      {
        title: "RoSCTL",
      },
      {
        title: "RoDTEP",
      },
    ],
  },
  {
    Name: "FSSAI License",
    Icon: TbLicense,
    SubServices: [
      {
        title: "FSSAI Registration",
      },
      {
        title: "FSSAI State License",
      },
      {
        title: "FSSAI Central License",
      },
      {
        title: "Modification of License ",
      },
      {
        title: "Modification of License ",
      },
      {
        title: "Renewal FSSAI License ",
      },
    ],
  },

  {
    Name: "ISO Certificate",
    Icon: PiCertificateBold,
    SubServices: [
      {
        title: "ISO 9001",
      },
      {
        title: "ISO 22000",
      },
      {
        title: "ISO 14001",
      },
      {
        title: "ISO 45001",
      },
      {
        title: "HACCP",
      },
    ],
  },

  {
    Name: "Export Documentation",
    Icon: HiOutlineDocumentText,
    SubServices: [
      {
        title: "Pre-shipment Export Document",
      },
      {
        title: "Post Shipment Export Document",
      },
    ],
  },
  {
    Name: "Digital Signature",
    Icon: LiaFileSignatureSolid,
    SubServices: [
      {
        title: "Digital Signature Certificate",
      },
      {
        title: "Renewal Digital Signature",
      },
    ],
  },
  {
    Name: "GST",
    Icon: TbBusinessplan,
    SubServices: [
      {
        title: "GST Return",
      },
      {
        title: "GST Registration",
      },
    ],
  },
  {
    Name: "Accounting",
    Icon: BsCalculator,
    SubServices: [
      {
        title: "Book Keeping",
      },
      {
        title: "Income Tax Return",
      },
    ],
  },
  {
    Name: "LEI Services",
    Icon: LiaUserCogSolid,
    SubServices: [
      {
        title: "Apply LEI Certificate",
      },
    ],
  },

  {
    Name: "Trade Mark",
    Icon: RiTrademarkLine,
    SubServices: [
      {
        title: "Trademark Registration",
      },
    ],
  },

  {
    Name: "COO Application",
    Icon: AiOutlineForm,
  },

  {
    Name: "AEO Certificate",
    Icon: PiCertificateBold,
  },
];
const services = () => {
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
              Choose right services for your business
            </p>

            <p className=" text-lg md:text-xl mt-4 mb-2">
              " The Smart choice for Personal business and Beyond "
            </p>
            <Link href={"/contact"}>
              <button className="pointer py-2 px-2 hover:bg-white  border-2 border-white rounded-md  text-white  hover:text-black font-medium borde my-4">
                Get Consultation
              </button>
            </Link>

            <p className="text-sm">
              Offices in Rajkot. Call Us : (+91) 7878050553
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 2xl-p-0 my-10">
        <div className="  mb-10">
          <h1 className="text-3xl font-medium underline underline-offset-8 text-center  ">
            Our Services
          </h1>
        </div>
        <div className="">
          <div className="flex   flex-wrap  ">
            {ServicesData.map((val, index) => {
              return (
                <div
                  key={index}
                  className="card w-full sm:w-1/2 lg:w-1/3  my-2  flex  p-2 "
                >
                  <div className="transition-all delay-150 w-full  bg-white   rounded-sm shadow-lg cursor-pointer 	">
                    <div className="effect text-[#153563] flex gap-3 border-b-4 bg-[#15356308] px-3 py-2 border-[#153563]">
                      <span className="text-3xl ">{<val.Icon />}</span>
                      <div className="text-xl font-medium">{val.Name} </div>
                    </div>
                    {val?.SubServices && (
                      <ul className="h-fit ml-8 my-4 list-disc">
                        {val?.SubServices?.map((SubVal, index) => {
                          return (
                            <li
                              className="leading-6  hover:font-semibold hover:list-inside"
                              key={index}
                            >
                              {SubVal.title}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default services;
