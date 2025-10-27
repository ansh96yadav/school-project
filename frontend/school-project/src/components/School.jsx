import React from 'react'

function School() {
  return (
    <div className='px-20'>
    <div className='grid grid-cols-4 grid-rows-2 bg-[#dcdcdc] place-items-center gap-20 p-10 mt-[5rem]'>
      <div className='flex flex-col justify-center items-center cursor-pointer'><div className="w-[10rem] h-[10rem] bg-[white] rounded-[10px] p-2 bg-[url('homework.gif')] bg-cover bg-center"></div><p className='text-[1.2rem] text-center'>Homework & Assignment Tracker</p></div>
      <div className='flex flex-col justify-center items-center cursor-pointer'><div className="w-[10rem] h-[10rem] bg-[white] rounded-[10px] p-2 bg-[url('events.jpg')] bg-cover bg-center"></div><p className='text-[1.2rem] text-center'>School Event Planner / Reminder</p></div>
      <div className='w-[10rem] h-[10rem] bg-[white] rounded-[10px]'></div>
      <div className='w-[10rem] h-[10rem] bg-[white] rounded-[10px]'></div>
      <div className='w-[10rem] h-[10rem] bg-[white] rounded-[10px]'></div>
      <div className='w-[10rem] h-[10rem] bg-[white] rounded-[10px]'></div>
      <div className='w-[10rem] h-[10rem] bg-[white] rounded-[10px]'></div>
      <div className='w-[10rem] h-[10rem] bg-[white] rounded-[10px]'></div>
    </div>
    </div>
  )
}

export default School
