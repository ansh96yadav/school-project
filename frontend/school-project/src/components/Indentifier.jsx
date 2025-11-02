import React from 'react'
import { Link } from 'react-router-dom'

function Indentifier() {
  return (
    <div className='w-screen p-10 bg-[#04041c] h-screen'>
        <p className='text-center text-[white] text-[1.5rem]'>What describe you best?</p>
      <div className='flex w-full justify-around mt-[2rem] flex-wrap gap-10'>  
      <div className='flex flex-col w-fit h-fit justify-center gap-8 p-8 rounded-[20px] border border-[#494848] bg-[#130b36]'>
        <div className='flex'><div className='w-[50%] object-fill'>
          <img src='boystudent.png' className='h-70 object-cover'/></div><img src='girlstudent.png' className='h-70'/>
          </div>
          <Link to='/studentlogin' className='m-auto'>
          <button className='w-fit h-fit text-[1.2rem] rounded-[15px] m-auto text-[white] cursor-pointer font-extrabold bg-[#292445] px-4 py-2'>
            Student</button>
          </Link></div>
     <div className='flex flex-col w-fit h-fit justify-center gap-8 p-8 rounded-[20px] border border-[#494848] bg-[#130b36]'>
      <div className='flex'><div className='w-[50%] object-fill'>
        <img src='girlteacher.png' className='h-70 object-cover'/></div>
        <img src='boyteacher.png' className='h-70'/>
        </div>
        <Link to='/studentlogin' className='m-auto'>
        <button className='w-fit h-fit text-[1.2rem] rounded-[15px] m-auto text-[white] cursor-pointer font-extrabold bg-[#292445] px-4 py-2'>
          Teacher</button></Link></div></div>
    </div>
  )
}

export default Indentifier
