import React from 'react'
import About from '../about/about'
import Resume from '../resume/resume'


const right = () => {
  return (
    <div className=" w-8/12 h-[95%] bg-bodyColor overflow-y-auto ">
      <About></About>
      <Resume  />
    </div>
  )
}

export default right