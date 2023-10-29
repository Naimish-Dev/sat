"use client"
import Container from '@/components/Common/Container';
import React from 'react'

import {  BiTimeFive } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
const Contantus = () => {
  
  const Formhendler = (e) => {
    e.prevendefault();
  };

  return (
    <Container>
      <div className="contact">
        <div className="">
          <div className="relative">
            <div className="absolute top-[10%] sm:left-[10%] lg:left-[25%] w-full sm:w-[80%] lg:w-[50%]  ">
              <h1 className="flex items-center justify-center gap-2  text-center  text-3xl font-medium text-[#153563] mb-2">
                <HiOutlineLocationMarker></HiOutlineLocationMarker>
                Let's have a talk
              </h1>
              <p className="text-lg text-center mx-2">
                We're here to assist you with just one click! If you're facing
                any issues, please take a moment to fill out the form below.
                Your satisfaction is our priority. Thank you for reaching out!
              </p>
            </div>
            <img
              src="/assets/9174514_6340.jpg"
              className="h-[550px] md:h-[500px] w-full object-cover"
            />
          </div>
          <div className="bg-[#dedede3b] py-16 flex flex-col sm:flex-row justify-center gap-10 mb-10">
            <div className="w-full  sm:w-[50%] md:w-[40%] ">
              <form
                className="  flex gap-2 lg:gap-4  flex-col "
                onSubmit={Formhendler}
              >
                <div className="flex gap-2 lg:gap-4  flex-col lg:flex-row">
                  <input
                    type="name"
                    className="border border-black p-2 w-full  "
                    placeholder="Enter Name"
                  />
                  <input
                    type="email"
                    className="border border-black p-2  w-full"
                    placeholder="Enter Email"
                  />
                </div>
                <textarea
                  rows={5}
                  className="border border-black  p-2"
                  placeholder="Enter You Message"
                ></textarea>
                <button
                  type="submit"
                  className="border py-2 rounded-sm ml-auto w-28 hover:bg-[#153563] hover:text-white border-[#153563] font-bold text-[#153563] p-1"
                >
                  Send
                </button>
              </form>
            </div>
            <div className=" flex gap-5  flex-col ">
              <div className="">
                <h1 className="flex gap-2  items-center text-2xl font-medium text-[#153563]">
                  <HiOutlineLocationMarker></HiOutlineLocationMarker>
                  Location
                </h1>
                <div className="ml-8">
                  <div> Sat Associates, Near Balaji hall,</div>
                  <div> 150 FT Ring Road, Rajkot - 360004,</div>
                  <div>Gujarat</div>
                </div>
              </div>

              <div className="">
                <h1 className="flex gap-2  items-center text-2xl font-medium text-[#153563]">
                  <BiTimeFive></BiTimeFive>
                  Timming
                </h1>
                <div className="ml-8">
                  <div> MONDAY - FRIDAY: 9 AM to 7 PM </div>
                  <div> SATURDAY : 9 AM to 5 PM </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10">
          <div className="w-[100%] md:w-[80%] md:mx-auto">
            <h1 className="underline underline-offset-8 flex gap-2 text-3xl font-medium justify-center  text-[#153563] my-8">
              <HiOutlineLocationMarker></HiOutlineLocationMarker>
              Find Our Location
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41929.25666185443!2d70.77687707210411!3d22.285028903663033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbde245fdd41%3A0xa12caf1ea68307b9!2sZUDIO%20-%20Rajkot%2C%20R%20K%20Prime!5e0!3m2!1sen!2sin!4v1697886819641!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );



};

export default Contantus;