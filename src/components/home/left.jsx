import React from 'react'
import ProfilePic from '../../assets/profile_dp.jpeg'
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiLinkedin } from "react-icons/si";
import { TypeAnimation } from 'react-type-animation';
import { BiSolidFilePdf } from "react-icons/bi";
import { MdContacts } from "react-icons/md";






const texts = ["I am a developer", "Passionate about coding", "Building awesome websites"];
const left = () => {
  return (
    <div className=" w-5/12 h-full ">
        <div className=" w-full h-3/5 place-items-center bg-bodyColor overflow-hidden rounded-3xl">
            <img src={ProfilePic} alt="profile pic" className="w-full h-full scale-125   rounded-3xl shadow-lg border-2 border-gray-700"></img>
        </div>
        <div className=" overflow-hidden relative w-full h-2/5 bg-bodyColor rounded-3xl">
            {/* contians intro */}
            <div className="    w-full h-4/5 flex flex-col items-center gap-2 py-6 ">
                <div className=" items-start ">
                    <h1 className=" text-2xl  font-semibold  ">Hi there, I am Dheeraj 👋</h1>
                    <div className="py-4 text-base text-wrap text-designColor  ">
                    <TypeAnimation
                        sequence={['⚡AI Model Developer | Web Enthusiast', 300, '🌟Making things happen!', 500, '🎓Final Year Student at IIITD', 500]}
                        // style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
                    </div>
                </div>
                <div className="  text-xl flex justify-center gap-7 mt-2 ">
                    
                    <a href="https://github.com/Dheeraj9811/" target="_blank" className="hover:text-designColor duration-300 cursor-pointer text-2xl rounded-lg " rel="noreferrer">
                    <span >
                    <FaGithub />
                    </span></a>

                    <a className="hover:text-designColor duration-300 cursor-pointer text-2xl rounded-lg " href="mailto:dheeraj20194@iiitd.ac.in" target="_blank" rel="noreferrer" > <span className="hover:bg-designColor rounded-lg ">
                    <BiLogoGmail />
                    </span></a>

                    <a className="hover:text-designColor duration-300 cursor-pointer text-2xl rounded-lg " href="https://www.linkedin.com/in/dheeraj-deshwal/" target="_blank" rel="noreferrer" > <span className="hover:bg-designColor rounded-lg ">
                    <SiLinkedin />

                    </span></a>

                </div>
            </div>
            {/* button like download cv , socal account links */}
            
            <div className="   flex  justify-center w-full  h-14 border-t-[1px] border-zinc-800 ">
                <a href="https://drive.google.com/drive/u/1/folders/1H2GZ5-eh-z_d22BVcLNcKa7wHLjkpYQv" rel="noreferrer" target="_blank" className=" w-1/2 flex flex-row justify-center justify-items-center hover:text-designColor duration-300 border-r-[1px] border-zinc-800 " ><button className="   "> <div className=" flex h-full pt-3 " >Download CV<BiSolidFilePdf  className=" mt-1 ml-1"></BiSolidFilePdf ></div>  </button></a>
                <a href="" rel="noreferrer" target="_blank"  className="w-1/2 flex flex-row justify-center justify-items-center hover:text-designColor duration-300 "><button className="    "> <div className=" flex h-full pt-3 " >CONTACT ME<MdContacts className=" mt-1 ml-1 " /> </div>  </button></a>
                
                

                
            </div>
        </div>
        
    </div>
    
  );
}

export default left