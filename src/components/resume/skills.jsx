import React from 'react'
import SkillData from './skillData'

const skills = () => {
  return (
    <div className=" p-4 group">
        <div id='experince heading' className=' w-full  pt-6  pl-7 px-6 pb-6 border-b-[1px] border-zinc-800 font-semibold'>
                <h1 className='flex text-md items-center  uppercase  '>
                    <span className='  '><span className='text-designColor text-xl pr-2 ' > 🛠</span>
                    </span>
                    Tech Stack </h1>
                
                </div>
        <div className=" grid grid-cols-3 self-auto group">
             
            {SkillData.map((item) => {
            return (
                <div className=" flex items-center gap-1 " key={item.id}>
                    <div className=" w-12 h-12 flex items-center justify-center text-designColor ">
                        {item.icon}
                    </div>
                    <div className=" text-teal-50 text-lg">{item.discribtion}</div>
                </div>
            )
            })}
        </div>
    </div>
  )
}

export default skills