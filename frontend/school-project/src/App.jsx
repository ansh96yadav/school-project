import React, { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'
import SignUp from './components/SignUp'
import School from './components/School'
import Chatbot from './components/Chatbot'
import { Outlet } from 'react-router-dom'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

function App() {
  const[isLogin, setIslogin] = useState(true)

  

  return (
    <div>
      {isLogin && <div>
      <div>
        <div className='h-[6rem] pt-[2rem] bg-[#2f2f2f]'>
          <ul className='list-none text-[1.3rem] text-[white] flex justify-around'>
            <li className='hover:underline hover:text-[#1717fe] cursor-pointer'><Link to='/'>Home</Link></li>
            <li className='hover:underline hover:text-[#1717fe] cursor-pointer'><Link to='/school'>School</Link></li>
            <li className='hover:underline hover:text-[#1717fe] cursor-pointer'><Link to='/contact'>Contact Us</Link></li>
            <li className='hover:underline hover:text-[#1717fe] cursor-pointer'>About Us</li>
          </ul>
        </div>
        <div className='flex items-center justify-between mt-[2rem]'>
          <div>
          <img src='army-school-logo.png' className='w-35'/>
          </div>
          <div className='justify-self-center self-center'><p className='text-[2.5rem] font-extrabold text-center justify-self-center self-center'>Army Public School, Jhansi</p></div>
          <div className='flex-none'></div>
      </div>
      <Outlet />
        </div>
        <Link to='/chatbot'><img src='chatbot.png' className='w-20 fixed top-[85%] left-[90%] cursor-pointer z-50'/></Link>
    </div>}
    {!isLogin && <SignUp/>
    }
      
    </div>
  )
}

export default App
