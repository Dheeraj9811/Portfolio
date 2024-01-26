import React from 'react'
import Title from '../home/Title'
import AboutMe from './aboutMe'
import Services from './services'

const about = () => {
  return (
   <section id="about" className="  md:w-full">
        <Title title="About" subTitle="Me" />
        <AboutMe />
        <Title title="My" subTitle="Services" />
        <Services />

   </section>
  )
};

export default about