import React from 'react'
import Title from '../home/Title'
import Education from './Education'
import Skills from './skills'
import { motion } from "framer-motion"



const resume = () => {
  return (
    (<motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{duration:0.5}} >
    <div>
      <section id='resume' className=''>
        <Title title="My" subTitle="Resume "  />
        
        <Skills />
        <Education />    
    </section>

    <section id='resume' >
      
    </section>

    
    </div></motion.div>
    
    )
  );
};

export default resume;