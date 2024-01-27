import React, { useEffect } from 'react';
import About from '../about/about'
import Resume from '../resume/resume'
import {Routes, Route} from 'react-router-dom'
import Project from '../project/project';


const right = ({activeComponent }) => {
  return (
    <div className=" rounded-xl md:rounded-none md:w-8/12 md:h-[95%] bg-bodyColor overflow-y-auto " id="rightside">
      <Routes>
        {/* <Route path='/resume' element={<Resume/>}></Route> */}
        <Route path='/' element= {<About/>} ></Route>
        <Route path='/resume' element={<Resume/>}>
        </Route>
        <Route path='/project' element={<Project/>  }>
        </Route>

      </Routes>
    </div>
  )
}

export default right