import React from 'react'
import Title from '../home/Title'
import Education from './Education'

const resume = () => {
  return (
    <section id='resume' className=''>
        <Title title="My" subTitle="Resume "  />
        <Education />
    </section>
  );
};

export default resume;