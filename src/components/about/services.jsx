import React from 'react';
import ServiceData from './servicedata';

// map is a method that takes a function as an argument and applies that function to each element in the array. 
// The map method returns a new array with the updated elements. The map method is called on the array that you wish to iterate over. The function that you pass to the map method will take in an argument, which represents the current element in the array. The function will return the updated element.
// map take 3 argument (element, index, array) 
// element: The current element being processed in the array.
// index: The index of the current element being processed in the array.
// array: The array map was called upon.
//  return is must in map method

const dynamicStyle = ServiceData.map((service) => {
    const { id, title, icon, description } = service; // this is called destructuring means upack the object and get the value of the object
    return (
        // returing code to use in file here we are returning jsx code
        // key is used to identify the element in array
        //  note i can also pass index in map and use it as key but it is not a good practice
      <div key={id} className=" border flex flex-col items-center  p-1 self-start  h-full text-wrap text-zinc-400  border-b-[1px] odd:border-r-[1px] border-zinc-800 ">
        <span className="w-20 h-20 text-designColor text-4xl  flex items-center justify-center">
          {icon}
        </span>
        <h3 className="text-center text-wrap text-xl font-bold text-titleColor capitalize pt-1 ">{title}</h3>
        <p className="text-center  text-balance text-gray-500">{description}</p>
      </div>
    );
  });
const Services = () => {
    
  return (
    <div className=" grid grid-cols-2 gap-4 items-center justify-between self-auto justify-items-stretch p-4">
      {dynamicStyle}
    </div>
  );
};

export default Services;
