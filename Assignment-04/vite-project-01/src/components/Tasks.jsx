import React, { useState } from 'react'
import { Delete } from 'lucide-react';
import { CirclePlus } from 'lucide-react';
import { Check } from 'lucide-react';
import { Funnel } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import Dropdown from './PageComponents/Dropdown';
import Dropdown2 from './PageComponents/Dropdown2';


const Tasks = () => {

    const [elements, setElements] = useState([]);
    const [filters, setFilters] = useState(false);
    const [drpdwn , setDrpdwn] = useState(false);
    const [drpdwn2 , setDrpdwn2] = useState(false);
    const [priority,setPriority] = useState('High');
    const [category, setCategory] = useState('Work');

    const filteropt = ()=>{
        setFilters(prev => prev ? false : true);
        console.log(filters);
    }

    const tick = (toggleid , status)=>{

        const newElem = elements.map((el)=>(
            el.id === toggleid ? {...el, isChecked : status} : el 
        ))
        setElements(newElem);
    }
    
    const drpopen = ()=>{
        setDrpdwn(prev => prev ? false : true);
        console.log(drpdwn);
    }
    const drpopen2 = ()=>{
        setDrpdwn2(prev => prev ? false : true);
        console.log(drpdwn);
    }

    const prioroptions = [
        {value: 'low' , label : 'Low'},
        {value: 'medium' , label : 'Medium'},
        {value: 'high' , label : 'High'}
    ]

    const catoptions = [
        {value: 'work' , label: 'Work'},
        {value: 'study' , label: 'Study'},
        {value: 'personal' , label: 'Personal'}
    ]
    const created = ()=>{

        const newTask = {
            id: crypto.randomUUID(),
            isChecked : false,
            priority : priority,
            category : category,
            text : ''
        }
        console.log("created an element!")
        setElements([...elements, newTask]); // the second thing in array is to differentiate the elements in the array basically giving the index to them
        console.log(elements.length+1);
    }

    const updateText = (id, newText) => {
        setElements(elements.map(el => 
            el.id === id? {...el , newText} : el 
        ))
    }
    const deleted = (elem)=>{
        console.log("deleted the element!");
        console.log(elem);
        const newElements = elements.filter(element => element !== elem);
        setElements(newElements);
    }
  return (
    <div>
    <div className='flex items-center gap-3'>
        <div className='my-3 border-[1px] px-2.5 pt-0.5 rounded-[5px] border-gray-600 w-fit flex flex-col gap-0.5 pb-2 items-center justify-center'>
        <button className='cursor-pointer text-[12px]' onClick={
            ()=>{
                created();
            }
        }>Create a Task <div className='items-center flex justify-center mt-0.5'>
        <CirclePlus  /></div> </button>
        
    </div>
    <div>
    <div className='text-[12px] flex justify-center'>Priority</div>
    <div 
    onClick={()=>{
        drpopen();
        change();
    }}
    className='w-[80px] h-5 border-gray-600 border-[1px] flex items-center justify-center text-[14px] rounded-[4px] pr-0.5 cursor-pointer'>
        <div className='text-[14px] flex justify-center ml-1.5 cursor-pointer'>{priority}</div>
        <ChevronDown size={14} className='ml-1' />
        {/* <Dropdown /> */}
    </div>
    </div>


    {
        drpdwn && (<Dropdown priority={priority} setPriority={setPriority}/>)
    }
    {
        drpdwn2 && (<Dropdown2 category={category} setCategory={setCategory} />)
    }


    <div>
    <div className='text-[12px] flex justify-center'>Category</div>
    <div 
    onClick={()=>{
        drpopen2();
    }}
    className='w-[85px] h-5 border-gray-600 border-[1px] flex items-center justify-center text-[14px] rounded-[4px] pr-0.5 cursor-pointer'>{category}
    <ChevronDown size={14} className='ml-1' />
    </div>
    </div>
    </div>
    <div className='flex items-center gap-2.5 mb-2.5 mt-1.5'>
        <div
        onClick={
            ()=>{
                filteropt();
            }
        }
        className='bg-gray-700 p-1.5 rounded-2xl hover:border-[1px] hover:border-gray-500 border-[1px] border-transparent cursor-pointer transition duration-400 ease-in-out'><Funnel size={15} /></div>
        <div className='text-[14px]'>Filter</div>
    </div>

    
    {
        filters && (
            <div className='bg-gray-800 flex w-[160px] mt-5 p-1.5 items-center gap-1 rounded-[6px] flex-wrap'>
        <div className='text-[11px] bg-gray-700 pt-[1px] px-1.5 rounded-[9px]'>Low</div>
        <div className='text-[11px] bg-gray-700 pt-[1px] px-1.5 rounded-[9px]'>Medium</div>
        <div className='text-[11px] bg-gray-700 pt-[1px] px-1.5 rounded-[9px]'>High</div>
        <div className='text-[11px] bg-gray-700 pt-[1px] px-1.5 rounded-[9px]'>Work</div>
        <div className='text-[11px] bg-gray-700 pt-[1px] px-1.5 rounded-[9px]'>Study</div>
        <div className='text-[11px] bg-gray-700 pt-[1px] px-1.5 rounded-[9px]'>Personal</div>
        <div className='text-[11px] bg-gray-700 pt-[1px] px-1.5 rounded-[9px]'>Completed</div>
        <div className='text-[11px] bg-gray-700 pt-[1px] px-1.5 rounded-[9px] whitespace-nowrap'>In Progress</div>
    </div>
        )
    }



    


    {
        elements.map((elem,index)=>(
    <div key={elem.id} id='check' className='h-auto w-[250px] mb-3 mt-5 bg-gray-600 px-2.5 pt-1.5 pb-2 rounded-[6px] text-gray-200 text-[12px] leading-[13px]'>
        <textarea
        onChange={
            (e)=>{
                updateText(elem.id, e.target.value);
            }
        }
        placeholder='Enter the Task' className={` ${elem.isChecked ? 'line-through' : 'none' } mb-1 w-full outline-0 overflow-hidden p-1.5 border-transparent border-[1px] hover:border-[1px] transition duration-400 ease-in-out hover:border-gray-500 active:border-[1px] active:border-white rounded-[6px] field-sizing-content min-h-[35px] resize-none`} spellCheck="false"></textarea>
        <div className='flex justify-between items-end'>
        <div 
        onClick={()=>{
            checked();
        }}
        ><input 
        onChange={
            (e)=>{
                tick(elem.id , e.target.checked);
            }
        }
        type='checkbox' className='ml-0.5 accent-transparent w-[16px] h-[16px]' ></input></div>
        <div
        onClick={
            ()=>{
                deleted(elem);
            }
        }
        className=''><Delete /></div></div>
    </div>
        ))
    }
    </div>
  )
}

export default Tasks
