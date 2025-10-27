import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons  from 'react-icons/fa'

function SignUp({isLogin,setIsLogin}) {
  
  return (
    <div>
    <div className='w-screen h-fit py-[5rem] flex justify-center items-center'>
      <div className='w-[80%] h-[80%] rounded-[20px] bg-[#d3d5f8] grid grid-cols-2 py-[3rem] px-[1rem]'>
        <div className=''></div>
        <div className='w-full h-full flex justify-center flex-col items-center'>
        <div className='flex flex-col z-50 justify-center w-[fit] h-[fit] bg-[white] p-6 rounded-[20px] items-center'>
            <h1 className='text-[1.1rem] self-baseline'>Begin your journey</h1>
            <label htmlFor='fullname' className='pt-[1rem] text-[0.8rem] text-[#4a4a4a] self-baseline'>Full Name</label>
            <input type='text' id='fullname' className='w-full h-[2.2rem] rounded-[4px] bg-[#e8e8e894] placeholder:text-[#c2c2c2] placeholder:text-[0.9rem] pl-4' placeholder='Input full name'/>
            <label htmlFor='email' className='pt-[1rem] text-[0.8rem] text-[#4a4a4a] self-baseline'>Email</label>
            <input type='email' id='email' className='w-full h-[2.2rem] rounded-[4px] bg-[#e8e8e894] placeholder:text-[#c2c2c2] placeholder:text-[0.9rem] pl-4' placeholder='email@gmail.com'/>
            <label htmlFor='password' className='pt-[1rem] text-[0.8rem] text-[#4a4a4a] self-baseline'>Password</label>
            <input type='text' id='password' className='w-full h-[2.2rem] rounded-[4px] bg-[#e8e8e894] placeholder:text-[#c2c2c2] placeholder:text-[0.9rem] pl-4' placeholder='Enter at least 8+ characters'/>
            <div className='flex mt-[1rem] gap-1'><input type='checkbox' className='cursor-pointer w-[0.8rem]'/><p className='text-[0.8rem] text-[#434343]'>By signing up, I agree with the Terms of Use AND Privacy policy</p></div>
            <button className='w-full h-[2.5rem] rounded-[6px] mt-[1rem] cursor-pointer bg-[#604cf7] text-[0.9rem] text-[white]'>Continue</button>
            <div className='flex gap-2 items-center justify-center mt-[1rem]'><hr className='text-[black] grow-1 '/><p className='text-[0.9rem] text-[#535353]'>OR</p><hr className='text-[black] grow-1'/></div>
            <div className='flex mt-[0.5rem] flex-wrap justify-around gap-10'><div className='flex cursor-pointer gap-4 py-1 px-4 rounded-[14px] bg-[#f61313] text-[white] text-[1.1rem] justify-center items-center'><FaIcons.FaGoogle className='text-[0.9rem]'/><p>Google</p></div>
            <div className='flex cursor-pointer gap-4 py-1 px-4 rounded-[14px] bg-[#000000] text-[white] text-[1.1rem] justify-center items-center'><FaIcons.FaMicrosoft className='text-[0.9rem]'/><p>Microsoft</p></div></div>
            <div className='flex justify-center items-center gap-2 mt-[1rem]'><p className='text-[0.9rem] text-[#252525]'>Returning user?</p><a className='text-[0.8rem] text-[blue] hover:underline cursor-pointer'>Login here</a></div>
            {/* <Link to={{pathname: '/', state: { isLogin: true }}}>Skip</Link> */}
        </div></div>
      </div>
    </div>
    </div>
  )
}

export default SignUp
