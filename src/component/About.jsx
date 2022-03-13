import React from 'react';
import me from "../component/assets/me2.jpg";
import { FaAward, FaUserFriends } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';




function About() {
  return (
    <section className='w-100 justify-center h-100 flex flex-col text-center lg:mt-20 items-center mt-20' id="about">
      <div className='mt-0 lg:mt-10'>
        <h4 className='text-xs'>Get To Know</h4>
        <span className='text-2xl font-bold'>About Me</span>
      </div>


      {/* ************************About Left********************** */}

      <div className=' flex justify-center lg:justify-between px-0 lg:px-32 mt-16 flex-col lg:flex-row w-full'>
        <div className='lg:w-2/4 w-1/1 flex justify-center self-center'>
          <div className=' absolute w-60 h-60 rounded-xl bg-yellow-600'>
          </div>
          <div className=''>
            <img src={me} alt="my-image" className='h-60 w-60  rounded-xl relative transition-all rotate-12 hover:rotate-0 hover:duration-100' />
          </div>
        </div>

        {/* ************************About Right********************** */}

        <div className='lg:flex lg:flex-col space-y-4 lg:space-y-4 lg:w-3/4 flex mt-10 lg:mt-0 flex-col px-5'>
          <div className='inline-flex flex-row w-full justify-between lg:justify-center space-x-4'>
            <div className='inline-flex justify-center cursor-pointer space-y-3 text-center items-center flex-col w-40 h-40 bg-slate-900 rounded-xl'>
              <span><FaAward /></span>
              <div>
                <h5 className='text-md font-bold'>Experiance</h5>
                <span className='text-xs font-bold'>1 Years Plus Working</span>
              </div>

            </div>
            <div className='inline-flex justify-center cursor-pointer space-y-3 text-center items-center flex-col w-40 h-40 bg-slate-900 rounded-xl'>
              <span><FaUserFriends /></span>
              <div>
                <h5 className='text-md font-bold'>Clients</h5>
                <span className='text-xs font-bold'>Not Yet But Surely Gain</span>
              </div>

            </div>
            <div className='inline-flex justify-center cursor-pointer space-y-3 text-center items-center flex-col w-40 h-40 bg-slate-900 rounded-xl'>
              <span><MdWork /></span>
              <div className='leading-1'>
                <h5 className='text-md font-bold'>Projects</h5>
                <span className='text-xs font-bold'>40 Pojects And More</span>
              </div>
            </div>
          </div>

          <div className='flex justify-center text-justify xl:px-20 px-2 text-sm lg:text-lg'>
            <span>
              I'm a dedicated hard working team player with experience and excellent knowledge on cutting edge up-to-date web development technologies React/next Js Frontend Developer role in your company..
              I'm willing to utilize my 1 years + of experience as Mern Stack developer and excellent creative skills for your company its achieve goals..
            </span>
          </div>
          <div className=' justify-start flex xl:px-20'>
            <a href="#contact" className='text-xs border px-7 py-2 lg:px-10 lg:py-3 rounded-lg bg-slate-600 hover:bg-transparent'>Lets Talk</a>
          </div>




        </div>


      </div>

    </section>
  )
}

export default About