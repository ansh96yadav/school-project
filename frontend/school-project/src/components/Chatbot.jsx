import React, { useState } from 'react'

function Chatbot() {
    const[selectedOption,setSelectedOption] = useState(null)

    const options = ["What is school timing?","How many teachers are there?","How to contact school?","Tell me some rules of school."]

    const handleOptionClick = (option) => {
        setSelectedOption(option)
    }

  return (
    <div>
        <div className='w-screen h-screen'>
      <p className='text-[2rem] text-[#474747] font-extrabold text-center mt-[2rem]'>An AI powered by APS Jhansi</p>
      <p className='mt-[1rem] text-[0.9rem] text-[gray] text-center'>Let's Chat and Know more about school</p>
      <div className='w-[40%] mt-[2rem] h-[75%] m-auto border-2 border-black p-6 bg-[#bfc1fe]'>
        <div className='flex items-baseline'><img src='chatbot.png' className='w-10'/><div className='w-fit h-fit p-4 rounded-[10px] bg-[#a7f7f7]'><p>What you want to ask about?</p>
            {options.map((option) => (
                <div 
                kay={option}
                onClick={() => handleOptionClick(option)}
                className={`w-fit h-fit p-2 border-1 border-black cursor-pointer rounded-[10px] bg-[${selectedOption === option ? '#e0f7fa' : 'white'}] text-[${selectedOption === option ? 'bold' : 'extrabold'}]`}
                >{option}
                </div>
            ))}
            <p>{selectedOption}</p>
        </div></div>
      </div>
    </div></div>
  )
}

export default Chatbot
