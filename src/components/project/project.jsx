import React from 'react'
import Title from '../home/Title'
import projectbg1 from '../../assets/project-bg-1.jpg'
import projectbg2 from '../../assets/project-bg-2.jpg'
import projectbg3 from '../../assets/project-bg-3.jpg'
import { PropTypes } from 'prop-types';
import ProjectData from './projectdata'; 


const ProjectCard = ({title ="project", image = projectbg2, link="NA"} ) => {
    //  we 
    console.log({title, image, link});
    
    return(
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="py-6 md:flex md:flex-col gap-2 items-center justify-center border-b-[1px] border-b-zinc-800 group">
        <div className="w-full h-full mb-2  relative cursor-pointer">
          <img
            className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 cursor-pointer"
            src={image}
            alt="blogImgOne"
          />
            <div className="absolute   bg-black bg-opacity-50 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 cursor-pointer overflow-auto "></div>
          <div className="  absolute  border inset-5 flex flex-col items-center justify-center">
            <span className="text-lg  p-10 text-teal-950 font-semibold overflow-auto ">
              {title}
            </span>
          </div>
        </div>
        
      </div>
    </a>
    )
};

ProjectCard.propTypes ={
    title: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
};

const project = () => {    
    return (
      <div>
        <Title title="My" subTitle="Project" />
        <div className=' w-full   md:grid grid-cols-2 gap-10 '>
        {ProjectData.map((item) => {
              return (
                <div className='   px-6 '>
                <ProjectCard
                  key={item.id}
                  title={item.title}
                  image={projectbg2}
                  link={item.link}
                />
                </div>
              );
            })}
            
        </div>
        
      </div>
    );
  };

export default project