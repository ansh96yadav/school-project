import React from 'react'
import * as FaIcons  from 'react-icons/fa'

function ContactPage() {
  return (
    <div className='px-[6rem]'>
    <div className='bg-[#eaeaea] mt-[3rem]'>
      <p className='text-[rgb(19,19,253)] text-[1.5rem] rounded-[10px] px-4 bg-[#c4c4fa]'>Contact Us</p>
      <div className='flex flex-col items-center p-10'>
        <div className='flex w-full justify-around mt-[2rem]'>
      <div className='w-fit h-fit rounded-[10px] p-8 bg-[#ffffff] shadow-lg shadow-[gray]'><h1 className='bg-[#b8ffb8] text-[1.5rem] text-center p-2 rounded-[10px] text-[#ffffff]'>Location</h1><p className='mt-[0.5rem]'>Army Public School,Hunter Road, jhansi Cantt - 284001</p></div>
      <div className='w-fit h-fit rounded-[10px] p-8 bg-[white] shadow-lg shadow-[gray]'><h1 className='bg-[#d9b8ff] text-[1.3rem] text-center p-2 rounded-[10px] text-[#ffffff]'>Contact Number</h1><p className='text-center mt-[0.5rem]'>9651604225</p></div></div>
      <div className='w-[50%] mt-[2rem] h-fit rounded-[10px] p-8 bg-[white] shadow-lg shadow-[gray]'><h1 className='bg-[#ffb8be] text-[1.3rem] text-center p-2 rounded-[10px] text-[#ffffff]'>Emails</h1>
      <div className='flex gap-2 justify-center mt-[1rem]'><h2 className='text-[1.2rem] font-extrabold'>AWES:</h2>
      <p>awes25.helpdesk@smartexams.in</p></div>
      <div className='flex gap-2 justify-center'><h2 className='text-[1.2rem] font-extrabold'>APS Jhansi:</h2>
      <p>armyjhs@gmail.com</p></div>
      <div className='flex gap-2 justify-center'><h2 className='text-[1.2rem] font-extrabold'>Exam Cell:</h2>
      <p>armyjhsec@gmail.com</p></div>
      </div>
      <div className='w-fit h-fit rounded-[10px] p-10 mt-[2rem] flex flex-col bg-[white]'><h1 className='text-[1.5rem] text-center'>Want to send a Meassage?</h1>
      <div><label htmlFor='name' className='text-[0.8rem] mt-[0.5rem] text-[#4a4a4a]'>Your Name:</label>
      <input type='text' id='name' placeholder='Your Name' className='w-full h-[2.2rem] rounded-[4px] bg-[#e8e8e894] placeholder:text-[#c2c2c2] placeholder:text-[0.9rem] pl-2'/></div>
      <label htmlFor='contactNumber' className='text-[0.8rem] mt-[0.5rem] text-[#4a4a4a]'>Contact Number:</label>
      <input type='text' id='conatctNumber' placeholder='Contact Number' className='w-full h-[2.2rem] rounded-[4px] bg-[#e8e8e894] placeholder:text-[#c2c2c2] placeholder:text-[0.9rem] pl-2'/>
      <label htmlFor='email' className='text-[0.8rem] mt-[0.5rem] text-[#4a4a4a]'>Email:</label>
      <input type='email' id='email' placeholder='Email' className='w-full h-[2.2rem] rounded-[4px] bg-[#e8e8e894] placeholder:text-[#c2c2c2] placeholder:text-[0.9rem] pl-2'/>
      <label htmlFor='message' className='text-[0.8rem] mt-[0.5rem] text-[#4a4a4a]'>Message:</label>
      <textarea placeholder='Message' id='message' className='w-full h-[2.2rem] rounded-[4px] bg-[#e8e8e894] placeholder:text-[#c2c2c2] placeholder:text-[0.9rem] pl-2'></textarea>
      <button className='w-fit h-fit bg-[#febcdd] rounded-[15px] p-2 mt-[1rem] self-center cursor-pointer'>Send<FaIcons.FaPaperPlane className='inline-block ml-2'/></button>
      </div>
      
      </div>
    </div>
    </div>
  )
}

export default ContactPage
