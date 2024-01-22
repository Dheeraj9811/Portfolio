import React, { useEffect } from 'react';
import About from '../about/about'
import Resume from '../resume/resume'


const right = ({activeComponent }) => {
  return (
    <div className=" w-8/12 h-[95%] bg-bodyColor overflow-y-auto ">
      {activeComponent === 'about' && <About />}
      {activeComponent === 'resume' && <Resume />}
    </div>
  )
}

export default right