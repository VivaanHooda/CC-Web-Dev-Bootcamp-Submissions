import React, { useState } from 'react'

const Dropdown = ({priority, setPriority}) => {
    console.log(priority);
    console.log(setPriority)


  return (
    <div className='absolute top-27 left-105 border-[1px] px-1.5 py-0.5 rounded-[8px] border-gray-600 w-[80px]'>
        
  
      <div
      onClick={
        ()=>{
            setPriority('High')
        }
      }
      className='text-[13px]'>High</div>
      <div className='h-[1px] w-full bg-gray-600 '></div>
      <div 
      onClick={
        ()=>{
            setPriority('Medium');
        }
      }
      className='text-[13px]'>Medium</div>
      <div className='h-[1px] w-full bg-gray-600 '></div>
      <div 
      onClick={
        ()=>{
            setPriority('Low');
        }
      } className='text-[13px]'>Low</div>
    </div>
  )
}

export default Dropdown
