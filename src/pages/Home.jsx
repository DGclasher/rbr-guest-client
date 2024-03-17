import React from "react";
import Service_section from "../Components/Service_section";
import Marquee from "react-fast-marquee";
import { Link, NavLink } from "react-router-dom";
import teamData from "../data/Team";
import { MdArrowOutward } from "react-icons/md";
import TeamCard from "../Components/TeamCard";
import CountUp from "react-countup";
import Toolslist from "../Components/Toolslist";
import ScrollToTop from "../utils/ScrollToTop";
const Home = () => {
  return (
    <div className="font-main flex flex-col px-4 mt-20  w-full  items-center overflow-x-hidden  justify-center ">
      <div className="flex bg-neutral-100  w-screen min-h-screen justify-center flex-col md:flex-row-reverse px-4 md:px-8 lg:px-32">
        <div className="lg:w-1/2 w-full md:flex justify-center items-center ">
          <img
            className="w-[300px] md:w-80 lg:w-[450px] rounded-xl"
            src="/hero.webp"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 py-8 w-full flex justify-center items-start flex-col">
          <h1 className="text-2xl lg:text-4xl border-l-4 border-blue-800 px-4 font-bold mb-4 text-black">
            Elevate Your Business with{" "}
            <span className="font-extrabold text-blue-800">
              Tailor-Made Tech Brilliance!
            </span>
          </h1>
          <p className="lg:text-xl font-medium py-8">
            Scaling Engineering Teams and Delivering Unparalleled Development
            Services in AI, ML, Data Science, Web and Mobile Applications
          </p>
          <NavLink
            to="/careers"
            className="bg-blue-800 hover:bg-blue-900 shadow-xl shadow-blue-300  px-4 py-4  rounded font-semibold text-xl text-white flex items-center gap-2"
          >
            Join us now <MdArrowOutward />
          </NavLink>
        </div>
      </div>
      <Service_section />
      {/* More than developers */}
      <div className="flex flex-col justify-center  items-center w-full ">
        <div className="w-auto">
          <h3 className="text-3xl font-bold">More than just Developers !</h3>
          <div className="bg-blue-600 z-0  w-40 h-1 rounded-full my-1"></div>
        </div>

        <div className="flex flex-col border-b z-10 md:px-16 py-16 lg:flex-row justify-center items-center">
          <div className="w-full lg:w-1/2 grid grid_cols-1 gap-8 md:grid-cols-2 justify-center items-start">
            <div className="">
              <h1 className="text-xl font-bold text-blue-900">
                Engineering Mindset
              </h1>
              <p className="py-8">
                Every developer at Primathon works with an Engineering mindset.
                This allows us to work on creative solutions and build our own
                libraries uniquely.
              </p>
            </div>
            <div className="">
              <h1 className="text-xl font-bold text-blue-900">
                Process Driven
              </h1>
              <p className="py-8">
                From start to end, we follow agile methodology on our projects.
                We execute the process for continuous improvement discovering
                solutions for you.
              </p>
            </div>
            <div className="">
              <h1 className="text-xl font-bold text-blue-900">
                On Time Delivery
              </h1>
              <p className="py-8">
                You don’t have to think about dealing with any delays. Our
                expert team is confident to design, develop, and deliver on time
                for a seamless experience.
              </p>
            </div>
            <div className="">
              <h1 className="text-xl font-bold text-blue-900">User Driven</h1>
              <p className="py-8">
                How end users interact with the product becomes extremely
                important in this journey. We understand and value this in our
                software building process.
              </p>
            </div>
          </div>
          <div className="w flex justify-center items-center">
            <img
              className="w-[350px] md:w-[450px] "
              src="/more_than_dev.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Tools */}
      <div className="py-16 flex flex-col items-center justify-center w-screen">
        <h1 className="text-3xl font-bold ">Tools We Use</h1>
        <Toolslist />
      </div>
      {/* Global CLients */}
      <div className="py-16">
        <h1 className="text-3xl font-bold ">Clients from all over the world</h1>
      </div>
      <div className="w-screen py-16 px-8 flex flex-col lg:flex-row text-white world justify-around items-center">
        <img className="w-full lg:w-1/3" src="/map.webp" alt="" />
        <div className=" w-full md:w-1/2 lg:w1/3">
          <p className="text-lg md:text-xl font-medium py-8">
            We have worked with clients from all over the world. Our team is
            well equipped to handle the diverse needs of our clients.
          </p>
          <div className="flex items-center">
            <div>
              <CountUp
                end={8}
                duration={5}
                enableScrollSpy
                scrollSpyOnc
                className="text-4xl font-bold text-blue-500 "
              >
                0
              </CountUp>
              <span className="text-4xl font-semibold px-1 text-blue-500 ">
                +
              </span>
              <p className="text-lg md:text-xl">Years of business</p>
            </div>
            <div className="h-16 w-1 bg-blue-500 mx-8"></div>
            <div className="text-white">
              <CountUp
                end={50}
                duration={5}
                enableScrollSpy
                scrollSpyOnc
                className="text-4xl text-blue-500 font-bold "
              >
                0
              </CountUp>
              <span className="text-4xl text-blue-500  font-semibold px-1">
                +
              </span>
              <p className="text-xl">Clients</p>
            </div>
          </div>
        </div>
      </div>
      {/* Team Section */}
      <div className="py-12 flex flex-col items-center justify-center">
        <h3 className="text-3xl font-bold">Meet Our Team</h3>
        <p className="text-xl font-medium py-4">
          We have a dedicated team commited to supporting you and your business
        </p>
        <div className="flex flex-wrap py-12 justify-center items-center gap-4">
          {teamData.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              desc={member.desc}
              image={member.image}
            />
          ))}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Home;
