import React from "react";
import Container from "./Common/Container";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import { PagesLinkData } from "@/Data/Link";



const Footer = () => {
  return (
    <div className="bg-[#153563]">
      <Container>
        <div className="py-16 p-4 flex text-white   sm:justify-between flex-wrap gap-4">
          <div className="basis-full sm:basis-[45%] lg:basis-[19%]">
            <h1 className=" text-2xl mb-3 font-medium"> Sat Associates</h1>
            <div className="text-md leading-6">
              <div className="flex items-start gap-2 ">
                <IoLocation className="text-xl"></IoLocation>
                <div>
                  <div> Sat Associates, Near Balaji hall,</div>
                  <div> 150 FT Ring Road, Rajkot - 360004,</div>
                  <div>Gujarat</div>
                </div>
              </div>

              <div className="flex items-center gap-3 my-2">
                <FaPhoneAlt className="text-sm"></FaPhoneAlt>
                <div>+91 7878050553</div>
              </div>

              <div className="flex items-center gap-3 my-2">
                <MdAttachEmail className="text-sm"></MdAttachEmail>
                <div> info@Satgroup.co.in</div>
              </div>
            </div>
          </div>
          <div className="basis-full sm:basis-[45%] lg:basis-[19%]">
            <h1 className="  text-2xl mb-2 font-medium">Quick Links</h1>
            <div className=" text-md leading-6 flex flex-col pl-1">
              {PagesLinkData?.map((val, index) => {
                return (
                  <Link
                    className="hover:font-semibold"
                    key={index + val.path}
                    href={val.path}
                  >
                    {val.lable}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="max-basis-full sm:basis-[45%] lg:basis-[19%]">
            <h1 className="  text-2xl mb-2 font-medium">Important Links</h1>
            <div className=" text-md leading-6 flex flex-col pl-1">
              {PagesLinkData[2]?.importantLinks?.map((val, index) => {
                return (
                  <Link className="hover:font-semibold" key={index + val.path} href={val.path}>
                    {val.lable}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="basis-full sm:basis-[45%] lg:basis-[19%] ">
            <div>
              <h1 className=" text-xl md:text-xl mb-3 font-medium">
                Newsletter
              </h1>
              <form className="flex bg-white w-64 p-[2px] mb-4 ">
                <input
                  type="email"
                  className=" inputbox"
                  placeholder="Enter your Email"
                  required
                />
                <button className="bg-[#153563] text-white rounded-sm py-1 px-4">
                  Send
                </button>
              </form>
            </div>
            <div className="w-80">
              <h1 className=" text-xl md:text-xl mb-3 font-medium">
                Follow Us
              </h1>
              <div className=" text-xs leading-5 flex gap-4 ">
                <Link href="/services">
                  <button className="p-1 rounded-md bg-white text-xl  text-[#153563] hover:text-white hover:bg-[#153563] ">
                    <FaFacebookF />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="p-1 rounded-md bg-white text-xl  text-[#153563] hover:text-white hover:bg-[#153563] ">
                    <FaGoogle />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="p-1 rounded-md bg-white text-xl  text-[#153563] hover:text-white hover:bg-[#153563] ">
                    <FaTwitter />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="p-1 rounded-md bg-white text-xl  text-[#153563] hover:text-white hover:bg-[#153563] ">
                    <FaWhatsapp />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="p-1 rounded-md bg-white text-xl  text-[#153563] hover:text-white hover:bg-[#153563] ">
                    <FaLinkedinIn />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
