import React from 'react'
import {Link} from 'react-router-dom'
import { LayoutGrid, List } from 'lucide-react'

const LeftPart = () => {
  return (
    <div>
        <div className='p-5 pr-[90px]'>
            <div className='flex gap-3 items-center'>
                <div className='bg-gray-300 p-0.5 rounded-2xl'>
                    <img src="https://static.thenounproject.com/png/1495285-200.png" alt="" height={25} width={25} />
                </div>
            <div className='whitespace-nowrap bg-gray-500 w-fit px-2 py-0.5 rounded-[10px]'>ProdTask</div></div>
            <h6 className='whitespace-nowrap text-[10px] mx-13 mt-0.5'>-Be Productive</h6>
        </div>

        <div className='flex flex-col'>
            <div className='ml-5 mt-5 mr-7'>
            <div className='flex gap-2 items-center bg-gray-700 px-2 py-1 rounded-[9px]'>
                <LayoutGrid className='h-[18px]' />
                <Link className='text-[14px]' to={'/'}>My Dashboard</Link>
            </div>
        </div>

        <div className='ml-5 mt-4 mr-7'>
            <div className='flex gap-2 items-center border-[1px] border-gray-700 active:border-transparent px-2 py-1 rounded-[9px]'>
                <List className='h-[18px]' />
                <Link className='text-[14px]' to={'/tasks'}>Tasks</Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default LeftPart
