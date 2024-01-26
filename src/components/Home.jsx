import React, { useState ,useEffect } from 'react';
import Left from './home/left'
import Right from './home/right'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// import {About} from './about/about'
import { BsFillPersonFill } from "react-icons/bs";
import { SiMicrosoftacademic } from "react-icons/si";
import { AiOutlineSolution } from "react-icons/ai";



// hook useState is used to change the active component in the right part of the page here we have 3 components about , resume and project
// useState take retur 2 parameter one initial value and the second is a function to change the value of the first parameter
//  we have given varable string name  activeComponent to the first parameter and setActiveComponent to the second parameter 
//  useeffect is used to change the active component when the path changes [] is only when first time render , [value] when value changes , [value1,value2] when value1 or value2 changes , no value when any thing changes
const Home = () => {
  const [activeComponent, setActiveComponent] = useState('about');
  const navigate = useNavigate();
  

  // Function to handle navigation item clicks
  const handleNavItemClicked = (path,newlocation) => {
    // Use the navigate function to programmatically navigate to the specified path
    navigate(path);
    setActiveComponent(newlocation);
    
  };
  //  using useEffect hook to change the active component when the path changes
  useEffect(() => {
    // when activeComponent changes, the useEffect hook will be called to make scroll to the top of the page
    document.getElementById('rightside').scrollTo(0, 0);
  }, [activeComponent]);

  
  // const handleNavItemClicked1 = (newlocation) => {
  //   setActiveComponent(newlocation);
  // };
  return (
    <div className=" border w-[75%] h-[80%] bg-transparent text-white rounded-lg z-50 md:flex flex-row relative ">
      {/* nav bar */}
      <div className=" navbar  md:rotate-0 md:w-16 md:h-96 bg-transparent rounded-lg md:flex md:flex-col gap-3 px-1 -ml-2 mr-1 ">
        {/* home Icons */}
        <div className=" rotate-90 hidden md:visible md:rotate-0 w-full h-20 bg-bodyColor rounded-3xl overflow-hidden flex justify-center items-center cursor-pointer " >  
          
          <div className="   flex flex-col gap-1.5 justify-center items-center group overflow-hidden ">
            <span className=" w-8 h-[2px] bg-titleColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor "></span>
            <span className=" w-8 h-[2px] bg-titleColor inline-block group-hover:bg-designColor  "></span>
            <span className=" w-8 h-[2px] bg-titleColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor  "></span>
          </div>

        </div>
        {/* other Icons */}
        <div className="  w-full h-80 bg-bodyColor rounded-3xl py-5 flex flex-col justify-between items-center ">
          <span className=" flex hover:text-designColor duration-300 cursor-pointer relative group" onClick={() => handleNavItemClicked('/' , 'about')} ><BsFillPersonFill  className=' text-2xl rounded-lg '/> <span className=' w-auto  absolute text-black font-medium text-xs uppercase bg-designColor  p-0.5 py-1 rounded-lg left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 ' >About</span> </span>
          <span className=" flex hover:text-designColor duration-300 cursor-pointer relative group"  onClick={() => handleNavItemClicked('/resume' , 'resume')} ><AiOutlineSolution   className=' text-2xl rounded-lg '/> <span className=' w-auto   absolute text-black font-medium text-xs uppercase bg-designColor  p-0.5 py-1 rounded-lg left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 ' >CV</span> </span>
          <span className=" flex hover:text-designColor duration-300 cursor-pointer relative group" onClick={() => handleNavItemClicked('/project','project')} ><SiMicrosoftacademic  className=' text-2xl rounded-lg '/> <span className='   w-auto absolute text-black font-medium text-xs uppercase bg-designColor  p-0.5 py-1 rounded-lg left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 ' >Project</span> </span>
          
        </div>
        
      </div>
      <div className=' md:w-11/12 md:h-full  bg-transparent md:flex items-center'>  {/* main body wich contains left and right parts */}
        {/* left part */}
        <Left></Left>
        {/* right part */}
        <Right activeComponent={activeComponent} />
          
      </div>
        

    </div>
  )
}

export default Home 