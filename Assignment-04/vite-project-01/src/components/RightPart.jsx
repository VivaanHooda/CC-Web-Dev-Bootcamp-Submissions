import React from 'react'
import { UserRound } from 'lucide-react';

const RightPart = () => {
  return (
    <div className='w-1/3'>
      <div className='flex justify-center gap-3.5 items-center'>
        <div className='flex flex-col'>
        <div className='text-[14px]'>Nikhitha Pabbisetty</div>
        <div className='text-[12px] ml-auto w-fit mr-2.5'>CSE CORE</div>
      </div>
      <div>
      <div className='h-[50px] w-[50px] mt-2.5 bg-gray-500 ml-auto rounded-[25px] border-[1px] border-gray-400 mr-2'>
        <UserRound className='ml-2 mt-1.5' size={33} />
      </div>
      <div className='ml-auto w-fit mr-3 text-[13px]'>Profile</div>
      </div>
      </div>
    </div>
  )
}

export default RightPart
