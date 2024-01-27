import { useState } from 'react'
import './App.css'
import RoundOne from './components/roundDesgins/RoundOne'
import RoundTwo from './components/roundDesgins/RoundTwo';
import RoundThree from './components/roundDesgins/RoundThree';
import RoundFour from './components/roundDesgins/RoundFour';
import Home from './components/Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="  md:w-full md:h-screen font-bodyfont text-textColor bg-black relative md:overflow-hidden overflow-clip ">
        
        <div className="  md:max-w-screen-2xl h-full mx-auto flex justify-center items-center"> 
        <Home></Home>
        </div>
        <div className =" md:w-full md:h-full absolute top-0 left-0 z-10 "  >

          <RoundOne></RoundOne>
          <RoundTwo></RoundTwo>
          <RoundThree></RoundThree>
          <RoundFour></RoundFour>
        </div>
      </div>
    </>
  )
}

export default App
