import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Tasks from './Tasks'
const MiddlePart = () => {
  return (
    <div className='w-full flex pl-4 pt-3 h-fit'>
      <div className='flex flex-col gap-1.5 h-fit'>
      <div className='h-[24px]'>Your Tasks</div>
      <Outlet />
    </div>
    
    </div>
  )
}

export default MiddlePart
