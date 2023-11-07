import Container from "@/components/Common/Container";
import { PiCubeTransparentDuotone, PiTimerDuotone } from "react-icons/pi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import Testimonial from "@/components/Testimonial";
import Link from "next/link";
export default function Home() {
  return (
    <Container>
      <div>
         <div className=" h-[500px] sm:h-[450px]  ">
        <div className="imgset  h-full w-full flex items-center justify-center ">
          <div className="text-white text-center w-full sm:w-5/6 mx-auto m-2 md:m-0">
            <img
              src="/assets/Sat Associates 5051.png"
              className="bg-white rounded-full mx-auto my-4 p-1"
            />

            <p className=" text-3xl sm:text-4xl md:text-5xl my-2 break-all">
                Experience Reputation Result
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
               <div className="bh-white px-3  py-8">
          <p className="w-full mx-auto sm:w-5/6 md:max-w-screen-md ">
           At Sat Assocation, our team of seasoned professionals is dedicated to providing top-notch services. With a proven track record of helping thousands of clients in Texas, we understand that this can be a challenging time for you and your family. Rest assured, we are here to assist you.
          </p>
        </div>
      </div>

      <div className="bg-[#dedede3b] px-4 py-14">
        <h1 className="text-4xl font-medium mb-8 text-[#153563] text-center ">
          Who We Are ?
        </h1>
        <div className="flex gap-4 lg:flex-row  flex-col">
          <img
            src="/assets/bg.jpg"
            alt="img"
            className="w-full sm:w-[80%] md:w-[60%] mx-auto"
          />
          <div className="lg:pr-20 ">
            <p>
              Sat Associates was established in the year 2015. It is a leading
              consulting and licensing rendering comprehensive professional
              services which include export import consulting, industrial
              licensing, digital signature certificate provision, tax
              consultancy, accounting services, FSSAI certificate etc.
            </p>
            <p className="my-4">
              Sat Associates is a professionally managed firm. The firm
              represents a combination of specialized skills, which are geared
              to offers sound consulting advice and personalized proactive
              services. Those associated with the firm have regular interaction
              with industry and other professionals which enables the firm to
              keep pace with contemporary developments and to meet the needs of
              its clients.
            </p>
            <div className="my-2">
              <h6 className="text-lg text-[#153563]  font-semibold ">
                Weare committed to:
              </h6>
              <ul className="list-disc  ">
                <div className="pl-5">
                  <li>Place the Interest of Clients before ours</li>
                  <li>Uphold High Standards of Honesty and Integrity</li>
                  <li>Endeavour to Improve the Quality of Services</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20 px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-medium text-[#153563] mb-2 ">
            WHY CHOOSE US ?
          </h1>
          <p className="px-2 md:px-20 lg:px-48 xl:px-72">
            Quality and trust is what is important for you as a client and for
            us as service providers to assist for better business requirements.
          </p>
        </div>
        <div className="my-8">
          <div className="flex   justify-center items-center  xl:justify-start  flex-wrap  ">
            <div className=" basis-[100%] sm:basis-[48%] md:basis-[45%]  xl:basis-1/4 flex items-center justify-between  p-2  ">
              <div className="w-full min-h-[200px]  rounded-sm border-x-2 hover:border-x-4 border-[#153563] shadow-lg  min-h-36 px-2 py-4	">
                <div className="text-md font-medium flex items-center gap-2 text-xl pb-2 ">
                  <MdSupportAgent className="text-4xl text-[#153563] " />
                  Professional Assistance
                </div>
                <p className="pl-11">
                  Our experts, including CA, CS, Advocates, and staff, will
                  assist, suggest, and assure quality for all services.
                </p>
              </div>
            </div>
            <div className=" basis-[100%] sm:basis-[48%] md:basis-[45%]  xl:basis-1/4 flex items-center justify-between  p-2 ">
              <div className=" w-full min-h-[200px] p-5 rounded-sm border-x-2 hover:border-x-4 border-[#153563] shadow-lg  px-2 py-4	">
                <div className="text-md font-medium flex items-center gap-2 text-xl pb-2">
                  <PiTimerDuotone className="text-4xl text-[#153563] " />
                  Support at Anytime
                </div>
                <p className="pl-11">
                  We have a dedicated professional support team committed to
                  assisting you at every stage of your business.
                </p>
              </div>
            </div>

            <div className="basis-[100%] sm:basis-[48%] md:basis-[45%]  xl:basis-1/4 flex items-center justify-between  p-2 ">
              <div className=" w-full min-h-[200px] p-5 rounded-sm border-x-2 hover:border-x-4 border-[#153563] shadow-lg  px-2 py-4	">
                <div className="text-md font-medium flex items-center gap-2 text-xl pb-2 ">
                  <PiCubeTransparentDuotone className="text-4xl text-[#153563] " />
                  Transparency
                </div>
                <p className="pl-11">
                  We keep our prices transparent, no hidden cost is included so
                  you pay for your requirements for the business.
                </p>
              </div>
            </div>
            <div className=" basis-[100%] sm:basis-[48%] md:basis-[45%]  xl:basis-1/4 flex items-center justify-between  p-2 ">
              <div className=" w-full min-h-[200px] p-5 rounded-sm border-x-2 hover:border-x-4 border-[#153563] shadow-lg  px-2 py-4		">
                <div className="text-md font-medium flex items-center gap-2 text-xl  pb-2">
                  <MdOutlinePrivacyTip className="text-4xl text-[#153563] " />
                  Confidential & Privacy
                </div>
                <p className="pl-11">
                  We understand business information is valuable and assure all
                  your private information is safe with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
    </Container>
  );
}
