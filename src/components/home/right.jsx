import React, { useEffect } from 'react';
import About from '../about/about'
import Resume from '../resume/resume'
import {Routes, Route} from 'react-router-dom'
import { motion } from "framer-motion"


const right = ({activeComponent }) => {
  return (
    <div className=" w-8/12 h-[95%] bg-bodyColor overflow-y-auto " id="rightside">
      <Routes>
        {/* <Route path='/resume' element={<Resume/>}></Route> */}
        <Route path='/' element={<motion.div initial={{ opacity:0 }}
          animate={{ opacity:1 }} transition={{duration:0.5}} ><About/></motion.div>  }></Route>
        <Route path='/resume' element={<motion.div initial={{ opacity:0 }}
          animate={{ opacity:1 }} transition={{duration:0.5}} ><Resume/></motion.div>  }></Route>

      </Routes>
    </div>
  )
}

export default right