import React from 'react'
import Title from '../home/Title'
import AboutMe from './aboutMe'

const about = () => {
  return (
   <section id="about" className="  w-full">
        <Title title="About" subTitle="Me" />
        <AboutMe />
   </section>
  )
};

export default about