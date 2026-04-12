import React from 'react'
import LeftPart from './LeftPart'
import MiddlePart from './MiddlePart'
import RightPart from './RIghtPart'


const Home = () => {
  return (
      <div className='flex justify-around'>
        <LeftPart />
        <div className='h-screen w-0.25 bg-gray-500'></div>
        <MiddlePart />
        <div className='h-screen w-0.25 bg-gray-500'></div>
        <RightPart />
      </div>
  )
}

export default Home
