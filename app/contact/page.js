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
        <div className="relative">
          <div className="bg-[#dedede3b] py-16 ">
            <div className=" w-[full] sm:w-[80%] md:w-[70%] lg:[w-50%] mx-auto mb-10 ">
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
            <div className=" flex flex-wrap flex-col sm:flex-row justify-center gap-10 mb-10 ">
              <div className="min-w-[320px] mx-auto  bg-white">
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

              <div className="min-w-[320px]  mx-auto  bg-white">
                <h1 className="flex gap-2  items-center text-2xl font-medium text-[#153563]">
                  <BiTimeFive></BiTimeFive>
                  Timming
                </h1>
                <div className="ml-8">
                  <div> MONDAY - FRIDAY: 9 AM to 7 PM </div>
                  <div> SATURDAY : 9 AM to 5 PM </div>
                </div>
              </div>

              <div className="min-w-[320px] mx-auto   bg-white">
                <h1 className="flex gap-2  items-center  text-2xl font-medium text-[#153563]">
                  <BiTimeFive></BiTimeFive>
                  Contact
                </h1>
                <div className="ml-8">
                  <div> +91 7878050553 </div>
                  <div> info@Satgroup.co.in</div>
                </div>
              </div>
            </div>
          </div>
        <div className="my-10">
          <div className="">
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
      </div>
    </Container>
  );



};

export default Contantus;