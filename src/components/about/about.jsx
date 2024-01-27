import React from 'react'
import Title from '../home/Title'
import AboutMe from './aboutMe'
import Services from './services'
import { motion } from "framer-motion"

const about = () => {
  return (
    // <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{duration:0.5}} ><About/></motion.div>  }>
    (<motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{duration:0.5}} >
   <section id="about" className="  md:w-full">
        <Title title="About" subTitle="Me" />
        <AboutMe />
        <Title title="My" subTitle="Services" />
        <Services />

   </section></motion.div>)
  )
};

export default about