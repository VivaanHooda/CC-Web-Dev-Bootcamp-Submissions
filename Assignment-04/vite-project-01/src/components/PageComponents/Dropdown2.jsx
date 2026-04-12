import React from 'react'

const Dropdown2 = ({category,setCategory}) => {
  return (
      <div className='absolute top-27 left-129 border-[1px] px-1.5 py-0.5 rounded-[8px] border-gray-600 w-[80px]'>
      <div 
      onClick={
        ()=>{
            setCategory('Work');
        }
      }
      className='text-[13px]'>Work</div>
      <div className='h-[1px] w-full bg-gray-600 '></div>
      <div 
      onClick={
        ()=>{
            setCategory('Study');
        }
      } className='text-[13px]'>Study</div>
      <div className='h-[1px] w-full bg-gray-600 '></div>
      <div 
      onClick={
        ()=>{
            setCategory('Personal');
        }
      } className='text-[13px]'>Personal</div>
    </div>
  )
}

export default Dropdown2
