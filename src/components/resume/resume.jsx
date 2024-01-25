import React from 'react'
import Title from '../home/Title'
import Education from './Education'
import Skills from './skills'


const resume = () => {
  return (
    <div>
      <section id='resume' className=''>
        <Title title="My" subTitle="Resume "  />
        
        <Skills />
        <Education />    
    </section>

    <section id='resume' >
      
    </section>

    
    </div>
    
    
    
    
  );
};

export default resume;