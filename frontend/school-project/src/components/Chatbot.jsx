import React, { useState } from 'react'

function Chatbot() {
    const[conversation,setConversation] = useState([])
    const[answer, setAnswer] = useState('')
    const[disabled, setDisabled] = useState(false)
     

    const options = [
      "What is school timing?",
      "How many teachers are there?",
      "How to contact school?",
      "Tell me some rules of school.",
    ]

    const handleOptionClick = async (option) => {

      if (disabled) return;

      setDisabled(true)

      const response = await fetch('http://127.0.0.1:8000/chatbot', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({selectedOption: option}),
            });

            const data = await response.json();
            setAnswer(data.answer)

            setConversation((prev)=> [
              ...prev, {question: option, answer: data.answer}
            ])

            setTimeout(()=> {
              setDisabled(false)
            },1000)
           
    }

  return (
    <div>
        <div className='w-screen h-screen'>
      <p className='text-[2rem] text-[#474747] font-extrabold text-center mt-[2rem]'>An AI powered by APS Jhansi</p>
      <p className='mt-[1rem] text-[0.9rem] text-[gray] text-center'>Let's Chat and Know more about school</p>
      <div className='w-[90%] md:w-[50%] mt-[2rem] h-[75%] m-auto border-2 border-black p-6 overflow-y-auto bg-[#cdcffb]'>
            
            {conversation.map((chat, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-end">
              <div className="bg-[#b5a8f9] text-white p-3 rounded-[12px] max-w-[70%]">
                {chat.question}
              </div>
            </div>
            <div className="flex justify-start mt-2">
              <div className="bg-[#a7f7f7] text-black p-3 rounded-[12px] max-w-[70%]">
                {chat.answer}
              </div>
            </div>
          </div>
        ))}
            
            {!disabled && 
            (<div>
        <div className='flex items-baseline'><img src='chatbot.png' className='w-10'/><div className='w-fit h-fit p-4 rounded-[10px] bg-[#a7f7f7]'><p>What you want to ask about?</p>
            {options.map((option, idx) => (
                <div 
                key={idx}
                disabled= {disabled}
                onClick={() => handleOptionClick(option)}
                className={`w-fit h-fit my-1.5 p-2 border-1 border-black cursor-pointer rounded-[10px] hover:bg-[#6d70ff65] bg-white`}
                >{option}
                </div>
            ))}</div></div></div>)}
        </div>
      </div>
    </div>
  )
}

export default Chatbot






// import React, { useState } from 'react'

// function Chatbot() {
//     const [conversation, setConversation] = useState([]); 
//   const [disabled, setDisabled] = useState(false); 
//   const [answer, setAnswer] = useState('');

//   const options = [
//     "What is school timing?",
//     "How many teachers are there?",
//     "How to contact school?",
//     "Tell me some rules of school."
//   ];

//   const handleOptionClick = async (option) => {
//     if (disabled) return; 

//     setDisabled(true); 

    
//     const response = await fetch("http://127.0.0.1:8000/chatbot", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ selectedOption: option }),
//     });

//     const data = await response.json();
//     setAnswer(data.answer);

    
//     setConversation((prev) => [
//       ...prev,
//       { question: option, answer: data.answer }
//     ]);

    
//     setTimeout(() => {
//       setDisabled(false);
//     }, 800);
//   };

//   return (
//     <div className="w-screen h-screen bg-[#f0f1ff] flex flex-col items-center p-6">
//       <p className="text-[2rem] text-[#474747] font-extrabold text-center mt-[1rem]">
//         An AI powered by APS Jhansi
//       </p>
//       <p className="mt-[0.5rem] text-[0.9rem] text-[gray] text-center">
//         Let's Chat and Know more about school
//       </p>

//       <div className="w-[45%] mt-[2rem] h-[75%] m-auto border-2 border-black p-6 bg-[#cdcffb] overflow-y-auto rounded-2xl shadow-md">
        
//         {conversation.map((chat, i) => (
//           <div key={i} className="mb-4">
//             <div className="flex justify-end">
//               <div className="bg-[#b5a8f9] text-white p-3 rounded-[12px] max-w-[70%]">
//                 {chat.question}
//               </div>
//             </div>
//             <div className="flex justify-start mt-2">
//               <div className="bg-[#a7f7f7] text-black p-3 rounded-[12px] max-w-[70%]">
//                 {chat.answer}
//               </div>
//             </div>
//           </div>
//         ))}

//         {!disabled && (
//           <div className="mt-4">
//             <p className="mb-2 text-[1rem] font-semibold">Ask a question:</p>
//             {options.map((option, idx) => (
//               <button
//                 key={idx}
//                 disabled={disabled}
//                 onClick={() => handleOptionClick(option)}
//                 className={`block w-full text-left my-1.5 p-2 border border-black rounded-[10px] hover:bg-[#adaef065] ${
//                   disabled ? 'opacity-50 cursor-not-allowed' : 'bg-white'
//                 }`}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Chatbot
