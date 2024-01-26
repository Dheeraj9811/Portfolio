import React from 'react'

const aboutMe = () => {
  return (
    <div className="   md:flex pb-6 ">
        <div className="  md:w-1/2  text-wrap text-zinc-400 px-6 border-r-[1px] border-zinc-800 ">
            <div className="py-6">
              <h2 className=" font-semibold mb-1 text-lg">Hello! I'm Dheeraj</h2>
              <p className=" text-balance leading-6 text-base">I'm an engineering enthusiast currently based in New Delhi. My expertise lies in the realms of Machine Learning and Deep Learning. While honing these skills, I've also ventured into the dynamic field of web development. Let's connect and explore the possibilities in the tech world! </p>
            </div>
        </div>
        <div className='md:w-1/2 p-6'>
          <ul>
            <li className=" aboutRightLi "><span className=' aboutRightSpan'>Age:</span>23</li>
            <li className=" aboutRightLi "><span className=' aboutRightSpan'>College:</span>IIIT-D</li>
            <li className=" aboutRightLi "><span className=' aboutRightSpan'>Batch:</span>2020-2024</li>
            <li className=" aboutRightLi "><span className=' aboutRightSpan'>Contry:</span>India</li>
            <li className=" aboutRightLi "><span className=' aboutRightSpan'>Address:</span>India, Delhi</li>

          </ul>

        </div>

    </div>
  );
};


export default aboutMe