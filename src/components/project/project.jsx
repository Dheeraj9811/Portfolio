import React from 'react'
import Title from '../home/Title'
import projectbg1 from '../../assets/project-bg-1.jpg'
import projectbg2 from '../../assets/project-bg-2.jpg'
import projectbg3 from '../../assets/project-bg-3.jpg'
import { PropTypes } from 'prop-types';
import ProjectData from './projectdata'; 
import { motion } from "framer-motion"



const ProjectCard = ({ number, title = "project", image = projectbg2, link = "NA", description = "NA" }) => {
  const show = () => {
    const titleElement = document.getElementById(number+"title");
    const descriptionElement = document.getElementById(number+"dis");
    if (titleElement && descriptionElement) {
      titleElement.classList.add("hidden");
      descriptionElement.classList.remove("hidden");
    }
  };

  const hide = () => {
    const titleElement = document.getElementById(number+"title");
    const descriptionElement = document.getElementById(number+"dis");
    if (titleElement && descriptionElement) {
      titleElement.classList.remove("hidden");
      descriptionElement.classList.add("hidden");
    }
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="py-6 md:flex md:flex-col gap-2 items-center justify-center border-b-[1px] border-b-zinc-800 group" onMouseEnter={show} onMouseLeave={hide}>
        <div className="w-full h-full mb-2  relative cursor-pointer">
          <img
            className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 cursor-pointer"
            src={image}
            alt="blogImgOne"
          />
          <div className="absolute   bg-black bg-opacity-50 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 cursor-pointer overflow-auto "></div>
          <div className="  absolute  border inset-5 flex flex-col items-center justify-center">
            <span className="text-lg  p-10 text-teal-950 font-semibold overflow-auto  group-hover:hidden " id={number+"title"}>
              {title}
            </span>
            <span className="text-lg  p-10 text-teal-950 font-semibold overflow-auto hidden" id={number+"dis"}>
              {description}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};


ProjectCard.propTypes ={
    title: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
};

const project = () => {    
    return (
      (<motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{duration:0.5}} >
      <div>
        <Title title="My" subTitle="Project" />
        <div className=' w-full   md:grid grid-cols-2 gap-10 '>
        {ProjectData.map((item) => {
              return (
                <div className='   px-6 'key={item.id}>
                <ProjectCard
                  number={item.id}
                  title={item.title}
                  image={projectbg2}
                  link={item.link}
                  description={item.discribtion}
                />
                </div>
              );
            })}
            
        </div>
        
      </div></motion.div> )
    );
  };

export default project