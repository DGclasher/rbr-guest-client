import React from 'react'
import { SiGoogleclassroom } from "react-icons/si";
import Service_card from './Service_card';
import { FaYoutube } from "react-icons/fa";
import { LuSendToBack } from "react-icons/lu";

const Service_section = () => {
  return (
    <section className='flex py-24 justify-center flex-col w-screen items-center px-4'>
          <h2 className='text-3xl py-4  font-bold '>Services</h2>
          <p className='text-xl font-medium pb-8'>Where can we take your business? Well, everywhere! This is how we do it.</p>
          <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 py-4'>
          <Service_card src='/web-development.png' heading='Web Development' desc='Creating seamless online experiences'/>
          <Service_card src='/app-development.png' heading='App Development' desc='Specializing in innovative app development solutions.'/>
          <Service_card src='/seo.png' heading='SEO Management' desc='Enhancing online visibility and search engine rankings'/>
          </div>
      </section>
  )
}

export default Service_section