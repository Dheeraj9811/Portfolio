import React, { useState ,useEffect } from 'react';
import Left from './home/left'
import Right from './home/right'
// import {About} from './about/about'
import { BsFillPersonFill } from "react-icons/bs";
import { SiMicrosoftacademic } from "react-icons/si";
import { AiOutlineSolution } from "react-icons/ai";




const Home = () => {
  const [activeComponent, setActiveComponent] = useState('about');
  
  const handleNavItemClicked = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className=" w-[75%] h-[80%] bg-transparent text-white rounded-lg z-50 flex ">
      {/* nav bar */}
      <div className="navbar  w-16 h-96 bg-transparent rounded-lg flex flex-col gap-3 px-1 -ml-2 mr-1 ">
        {/* home Icons */}
        <div className="  w-full h-20 bg-bodyColor rounded-3xl overflow-hidden flex justify-center items-center cursor-pointer " >  
          
          <div className="   flex flex-col gap-1.5 justify-center items-center group overflow-hidden ">
            <span className=" w-8 h-[2px] bg-titleColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor "></span>
            <span className=" w-8 h-[2px] bg-titleColor inline-block group-hover:bg-designColor  "></span>
            <span className=" w-8 h-[2px] bg-titleColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor  "></span>
          </div>

        </div>
        {/* other Icons */}
        <div className="  w-full h-80 bg-bodyColor rounded-3xl py-5 flex flex-col justify-between items-center ">
          <span className=" flex hover:text-designColor duration-300 cursor-pointer relative group" onClick={() => handleNavItemClicked('about')} ><BsFillPersonFill  className=' text-2xl rounded-lg '/> <span className=' w-auto  absolute text-black font-medium text-xs uppercase bg-designColor  p-0.5 py-1 rounded-lg left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 ' >About</span> </span>
          <span className=" flex hover:text-designColor duration-300 cursor-pointer relative group"  onClick={() => handleNavItemClicked('resume')} ><AiOutlineSolution   className=' text-2xl rounded-lg '/> <span className=' w-auto   absolute text-black font-medium text-xs uppercase bg-designColor  p-0.5 py-1 rounded-lg left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 ' >CV</span> </span>
          <span className=" flex hover:text-designColor duration-300 cursor-pointer relative group" onClick={() => handleNavItemClicked('project')} ><SiMicrosoftacademic  className=' text-2xl rounded-lg '/> <span className='   w-auto absolute text-black font-medium text-xs uppercase bg-designColor  p-0.5 py-1 rounded-lg left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 ' >Project</span> </span>
          
        </div>
        
      </div>
      <div className='  w-5/6 h-full  bg-transparent flex items-center'>  {/* main body wich contains left and right parts */}
        {/* left part */}
        <Left></Left>
        {/* right part */}
        <Right activeComponent={activeComponent} />
          
      </div>
        

    </div>
  )
}

export default Home