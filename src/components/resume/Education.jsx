import React from 'react'
import { PiBagSimpleFill } from "react-icons/pi";
import { MdSchool } from "react-icons/md";




const Education = () => {
  return (
    <div id='main' className="  w-[95%]  mx-2 pb-6 px-6 flex flex-col gap-6   ">
      {/* Experince */}
      <div id='experince heading' className=' w-full  pt-6 px-6 pb-6 border-b-[1px] border-zinc-800'>
        <h1 className='flex text-lg items-center  uppercase  '><span className='  '><PiBagSimpleFill className='text-designColor text-3xl pr-2 ' /></span>Experience </h1>
        
      </div>
      {/* Experince details*/}
      <div className='flex flex-col gap-3 pb-6 border-b-[1px]  border-zinc-800 group hover:text-designColor transition-all duration-500 ease-in-out  '>
        <h4 className=' w-[30%] border border-gray-500 px-4 py-[1px]  text-gray-500 text-sm  '>2023 Jul-2023 Dec</h4>
        <h4 className='uppercase text-lg flex flex-col gap-2' >AI product development and Research
          <h5 className=" text-gray-500 text-sm  ">Part-time at ASADEL TECHNOLOGIES</h5>
        </h4>
        
        <span className='  hidden transition-all duration-500  group-hover:shadow-2xl  group-hover:ease-in-out group-hover:duration-500  group-hover:block' >
        <ul className='list-disc text-gray-500 text-sm text-pretty  '>
            <li>Enhanced medical image analysis by developing a Python-based DICOM Image Viewer,
            ensuring streamlined and efficient image interpretation</li>
            <li>Improved content organization and analysis in video recordings by creating a Speech Diarization
              model with detailed timestamp data, boosting overall data comprehension.</li>
            <li>Significantly improved Alzheimer’s research outcomes by orchestrating voice feature extraction
              and implementing a robust sample collection strategy, optimizing data acquisition process</li>
          </ul>
        </span>
      </div>

      <div className='flex flex-col gap-3 pb-6 border-b-[1px]  border-zinc-800 group hover:text-designColor transition-all duration-300 ease-in-out   '>
        <h4 className=' w-[32%] border border-gray-500 px-4 py-[1px]  text-gray-500 text-sm '>2023 May-2023 Jul</h4>
        <h4 className='uppercase text-lg flex flex-col gap-2' >Summer Intern
          <h5 className=" text-gray-500 text-sm  "> ASADEL TECHNOLOGIES</h5>
        </h4>
        
        <span className='hidden transition-all duration-500  group-hover:shadow-2xl   group-hover:ease-in-out group-hover:duration-500  group-hover:block'>
        <ul className='list-disc text-gray-500 text-sm text-pretty '>
            <li>Assisted in the planning and coordination of the project to develop a system for Alzheimer’s detection</li>
            <li>Collaborated with cross-functional project team to establish clear project objectives, develop realistic timelines, and
              define measurable deliverables resulting in a 20% reduction in project timeline.</li>
            
          </ul>
        </span>
      </div>
      
      <div className='flex flex-col gap-3 pb-6 border-b-[1px]  border-zinc-800 group hover:text-designColor transition-all duration-300 ease-in-out   '>
        <h4 className=' w-[32%] border border-gray-500 px-4 py-[1px]  text-gray-500 text-sm '>2023 Jan-2023 Dec</h4>
        <h4 className='uppercase text-lg flex flex-col gap-2' >Application of AI For Arts
          <a href="https://cosylab.iiitd.edu.in/" rel="noreferrer" target="_blank" > <h5 className=" text-gray-500 text-sm  "> COMPLEX SYSTEMS LAB</h5></a>
          
        </h4>
        
        <span className='hidden transition-all duration-500  group-hover:shadow-2xl   group-hover:ease-in-out group-hover:duration-500  group-hover:block'>
        <ul className='list-disc text-gray-500 text-sm text-pretty '>
            <li>The project involves research and development of Image Generation Models.</li>
            <li>Models used: StyleGan- 1, 2, AdaBoost and Diffusion Models- Insgen, Projected-Gan, StyleGan-2.</li>
            
          </ul>
        </span>
      </div>
      {/* education  */}
      <div id='experince heading' className=' w-full  pt-2 px-6 pb-6 border-b-[1px] border-zinc-800'>
        <h1 className='flex text-lg items-center  uppercase  '><span className='  '><MdSchool className='text-designColor text-3xl pr-2 ' /></span>Education </h1>
        
      </div>
      {/* education details */}
      <div className='flex  flex-col gap-3 pb-6 border-b-[1px]  border-zinc-800 group hover:text-designColor transition-all duration-300 ease-in-out   '>
        <h4 className=' w-[32%] border border-designColor px-4 py-[1px]  text-designColor text-sm '>2020 -2024</h4>
        <h4 className='uppercase text-lg flex flex-col gap-2' >IIIT-D
          <a href="https://iiitd.ac.in/" rel="noreferrer" target="_blank"> <h5 className=" text-gray-500 text-sm  "> B.Tech, ECE</h5></a>
          
        </h4>
        
      </div>

      <div className='flex flex-col gap-3 pb-6 border-b-[1px]  border-zinc-800 group hover:text-designColor transition-all duration-300 ease-in-out   '>
        <h4 className=' w-[30%] border border-gray-500 px-4 py-[1px]  text-gray-500 text-sm  '>2018 -2019</h4>
        <h4 className='uppercase text-lg flex flex-col gap-2' >KIIT WORLD SCHOOL, Delhi
          <a href="https://www.kiitworld.in/" rel="noreferrer" target="_blank"  > <h5 className=" text-gray-500 text-sm  "> CBSE Standard (12th Grade), PCM + CS</h5></a>
          
        </h4>
        
      </div>

    </div>
  );
};

export default Education;