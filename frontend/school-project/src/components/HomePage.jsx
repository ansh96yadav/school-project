import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
import FacilitiesCard from './FacilitiesCard'
import * as FaIcons  from 'react-icons/fa'
import { MdSelfImprovement,MdSportsMartialArts } from 'react-icons/md'


function HomePage() {

  const CardData = [
    {title: 'Well Equipped Library',},
    {title: 'Well Equipped Library'},
    {title: 'Well Equipped Library'},
    {title: 'Well Equipped Library'},
    {title: 'Well Equipped Library'},
    {title: 'Well Equipped Library'},
  ]

  return (
    <div className='w-screen h-fit bg-[#030323] py-[2rem]'>
      <nav className='w-[85%] p-4 px-6 m-auto stick z-1000 flex justify-between items-center rounded-[50px] bg-[#2b2058c0]'>
        <p className='text-white text-[1.4rem]'>Army Public School,Jhansi</p>
        <ul className='flex text-[#bababa] justify-between w-[40%] text-[1.1rem] cursor-pointer'><li className='cursor-pointer hover:text-white border-b-2 border-transparent hover:border-[#1216ef]'>Home</li>
        <li className='cursor-pointer hover:text-white border-b-2 border-transparent hover:border-[#1216ef]'>About</li>
        <li className='cursor-pointer hover:text-white border-b-2 border-transparent hover:border-[#1216ef]'>Services</li>
        <li className='cursor-pointer hover:text-white border-b-2 border-transparent hover:border-[#1216ef]'>Mentor</li>
        <li className='cursor-pointer hover:text-white border-b-2 border-transparent hover:border-[#1216ef]'>Contact</li>
        <li className='cursor-pointer hover:text-white border-b-2 border-transparent hover:border-[#1216ef]'>More</li></ul>
        <button className='w-fit h-fit rounded-[20px] bg-[#8f6ff7] px-4 py-1 cursor-pointer text-white text-[1.3rem]'>Login</button>
      </nav>  
      <main>
        <div className='grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4 mt-[4rem]'>
        <div className='flex justify-center items-center'>
          <div className='w-[80%] flex flex-col'>
            <h1 className='text-[3rem] leading-tight font-extrabold text-[white]'>
              Inspiring leaders, bright futures.
              </h1>
              <p className='text-[#c5c3c3] text-[1.1rem] mt-[1rem] text-left'>
                Welcome to our Army School, where we cultivate discipline, leadership, and academic 
                excellence to prepare students for a life of service and achievement. Our institution 
                fosters a vibrant environment that instills values of duty, honor, and integrity, while 
                offering a comprehensive curriculum and robust extracurricular activities designed for 
                the holistic development of every child. </p>
                <p className='text-[#c769d1] mt-[2rem] m-auto text-[2rem]'>Counters</p>
                <div className='flex justify-around font-extrabold mt-[1rem]'><div className='flex items-center flex-col'><p className='text-[2.5rem] font-extrabold text-[#2749f4]'>2398</p><p className='text-[gray]'>Total Strenght</p></div>
                <div className='flex flex-col items-center'><p className='text-[2.5rem] font-extrabold text-[#2749f4]'>131</p><p className='text-[gray]'>Total Faculty</p></div>
               </div>
                </div></div>
                <div className='flex justify-center items-center'><img src='army-public.jpg' className='w-[80%]'/></div>
                </div>
                <div className='mt-[15rem] w-[60%] m-auto'>
                  <div className=''><p className='text-[#6227ea] text-[1.2rem]'>Discover More About Us</p>
                  <h1 className='text-[white] mt-[1rem] text-[2.5rem]'>About Us</h1>
                  <p className='text-[#9f9d9d]'>
                APS Jhansi an epitome of excellence in education provides an ideal platform to children to 
                acquire knowledge in the lap of nature, surrounded by lush green trees. The school provides ample 
                opportunity to children to not only inculcate high moral values but also to nurture their talent 
                and groom their personalities by participating in various extracurricular activities. The school 
                has carved a niche for itself in the educational field in Jhansi by producing excellent results in 
                CBSE board examination.
                </p><div className='text-[white] mt-[2rem]'><ul className='list-none flex flex-col gap-4 text-[1.2rem]'>
                  <li className='flex items-center gap-4'><FaIcons.FaCheckCircle className='text-[#6443f4]'/>Focus on the sports and are leading champions.</li>
                <li className='flex items-center gap-4'><FaIcons.FaCheckCircle className='text-[#6443f4]'/>Focus on CCA activities.</li>
                <li className='flex items-center gap-4'><FaIcons.FaCheckCircle className='text-[#6443f4]'/>Interactive activities in class between students.</li></ul></div></div></div>
                <div className='flex px-50 mt-[2rem]'>
                  <div className='w-full flex relative'>
                    <img src='aps2.jpg' 
                    className="w-130 rounded-[10px] border-4 border-[#bebcbc87]"/>
                    </div>
                    <div><img src='aps1.jpg' className='w-280 rounded-[5px] border-5 z-50 border-[#b5b1b15f]'/></div>
                  </div>
                  <div className='mt-[10rem]'><p className='text-[2.5rem] text-white text-center'>Facilities</p>
                  <p className='text-[1.2rem] text-[gray] text-center'>Our facilities make us the best.</p>
                  <div className='grid md:grid-cols-3  mt-[4rem] md:grid-rows-3 grid-cols-1 grid-rows-9 gap-6 items-center place-items-center place-ce w-[80%] m-auto'>
                    <div className='w-[100%] h-[100%] hover:scale-105 rounded-[20px] border border-[#424242] flex flex-col p-8 bg-[#352b4b69]'>
                      <FaIcons.FaBook className='text-white text-[3rem] w-fit h-fit p-4 rounded-[20px] bg-[#644bf0] mx-auto'/>
                      <h1 className='text-[1.5rem] text-center mt-[1.1rem] text-[white]'>Well Equipped Library</h1>
                      <p className='text-[#9a9999] text-[1rem] mt-[0.5rem] text-center'>APS Jhansi has a huge automated, well furnished library equipped with the latest books...</p>
                      <a className='flex gap-2 text-[1.1rem] text-[#462fda] mt-[0.5rem] items-center justify-center cursor-pointer'>Learn More<FaIcons.FaArrowRight/></a>
                      </div>
                    <div className='w-[100%] h-[100%] hover:scale-105 rounded-[20px] border border-[#424242] flex flex-col p-8 bg-[#352b4b69]'>
                      <FaIcons.FaSeedling className='text-white text-[3rem] w-fit h-fit p-4 rounded-[20px] bg-[#644bf0] mx-auto'/>
                      <h1 className='text-[1.5rem] text-center mt-[1.1rem] text-[white]'>Herbal Garden</h1>
                      <p className='text-[#9a9999] text-[1rem] mt-[0.5rem] text-center'>APS Jhansi has a huge automated, well furnished library equipped with the latest books...</p>
                      <a className='flex gap-2 text-[1.1rem] text-[#462fda] mt-[0.5rem] items-center justify-center cursor-pointer'>Learn More<FaIcons.FaArrowRight/></a></div>
                    <div className='w-[100%] h-[100%] hover:scale-105 rounded-[20px] border border-[#424242] flex flex-col p-8 bg-[#352b4b69]'>
                      <MdSelfImprovement className='text-white text-[3rem] w-fit h-fit p-4 rounded-[20px] bg-[#644bf0] mx-auto'/>
                      <h1 className='text-[1.5rem] text-center mt-[1.1rem] text-[white]'>Yoga and Martial Arts</h1>
                      <p className='text-[#9a9999] text-[1rem] mt-[0.5rem] text-center'>APS Jhansi has a huge automated, well furnished library equipped with the latest books...</p>
                      <a className='flex gap-2 text-[1.1rem] text-[#462fda] mt-[0.5rem] items-center justify-center cursor-pointer'>Learn More<FaIcons.FaArrowRight/></a></div>
                    <div className='w-[100%] h-[100%] hover:scale-105 rounded-[20px] border border-[#424242] flex flex-col p-8 bg-[#352b4b69]'>
                      <FaIcons.FaPaintBrush className='text-white text-[3rem] w-fit h-fit p-4 rounded-[20px] bg-[#644bf0] mx-auto'/>
                      <h1 className='text-[1.5rem] text-center mt-[1.1rem] text-[white]'>Art and Craft</h1>
                      <p className='text-[#9a9999] text-[1rem] mt-[0.5rem] text-center'>APS Jhansi has a huge automated, well furnished library equipped with the latest books...</p>
                      <a className='flex gap-2 text-[1.1rem] text-[#462fda] mt-[0.5rem] items-center justify-center cursor-pointer'>Learn More<FaIcons.FaArrowRight/></a></div>
                    <div className='w-[100%] h-[100%] hover:scale-105 rounded-[20px] border border-[#424242] flex flex-col p-8 bg-[#352b4b69]'>
                      <MdSportsMartialArts className='text-white text-[3rem] w-fit h-fit p-4 rounded-[20px] bg-[#644bf0] mx-auto'/>
                      <h1 className='text-[1.5rem] text-center mt-[1.1rem] text-[white]'>Taekwando</h1>
                      <p className='text-[#9a9999] text-[1rem] mt-[0.5rem] text-center'>APS Jhansi has a huge automated, well furnished library equipped with the latest books...</p>
                      <a className='flex gap-2 text-[1.1rem] text-[#462fda] mt-[0.5rem] items-center justify-center cursor-pointer'>Learn More<FaIcons.FaArrowRight/></a></div>
                    <div className='w-[100%] h-[100%] hover:scale-105 rounded-[20px] border border-[#424242] flex flex-col p-8 bg-[#352b4b69]'>
                      <FaIcons.FaMusic className='text-white text-[3rem] w-fit h-fit p-4 rounded-[20px] bg-[#644bf0] mx-auto'/>
                      <h1 className='text-[1.5rem] text-center mt-[1.1rem] text-[white]'>Music and Dance</h1>
                      <p className='text-[#9a9999] text-[1rem] mt-[0.5rem] text-center'>APS Jhansi has a huge automated, well furnished library equipped with the latest books...</p>
                      <a className='flex gap-2 text-[1.1rem] text-[#462fda] mt-[0.5rem] items-center justify-center cursor-pointer'>Learn More<FaIcons.FaArrowRight/></a></div>
                    <div className='w-[100%] h-[100%] hover:scale-105 rounded-[20px] border border-[#424242] flex flex-col p-8 bg-[#352b4b69]'>
                      <FaIcons.FaBasketballBall className='text-white text-[3rem] w-fit h-fit p-4 rounded-[20px] bg-[#644bf0] mx-auto'/>
                      <h1 className='text-[1.5rem] text-center mt-[1.1rem] text-[white]'>Physical Education and Sports</h1>
                      <p className='text-[#9a9999] text-[1rem] mt-[0.5rem] text-center'>APS Jhansi has a huge automated, well furnished library equipped with the latest books...</p>
                      <a className='flex gap-2 text-[1.1rem] text-[#462fda] mt-[0.5rem] items-center justify-center cursor-pointer'>Learn More<FaIcons.FaArrowRight/></a></div>
                    <div className='w-[100%] h-[100%] hover:scale-105 rounded-[20px] border border-[#424242] flex flex-col p-8 bg-[#352b4b69]'>
                      <FaIcons.FaDesktop className='text-white text-[3rem] w-fit h-fit p-4 rounded-[20px] bg-[#644bf0] mx-auto'/>
                      <h1 className='text-[1.5rem] text-center mt-[1.1rem] text-[white]'>Computer Labs</h1>
                      <p className='text-[#9a9999] text-[1rem] mt-[0.5rem] text-center'>APS Jhansi has a huge automated, well furnished library equipped with the latest books...</p>
                      <a className='flex gap-2 text-[1.1rem] text-[#462fda] mt-[0.5rem] items-center justify-center cursor-pointer'>Learn More<FaIcons.FaArrowRight/></a></div>
                    <div className='w-[100%] h-[100%] hover:scale-105 rounded-[20px] border border-[#424242] flex flex-col p-8 bg-[#352b4b69]'>
                      <FaIcons.FaFlask className='text-white text-[3rem] w-fit h-fit p-4 rounded-[20px] bg-[#644bf0] mx-auto'/>
                      <h1 className='text-[1.5rem] text-center mt-[1.1rem] text-[white]'>Other Labs</h1>
                      <p className='text-[#9a9999] text-[1rem] mt-[0.5rem] text-center'>APS Jhansi has a huge automated, well furnished library equipped with the latest books...</p>
                      <a className='flex gap-2 text-[1.1rem] text-[#462fda] mt-[0.5rem] items-center justify-center cursor-pointer'>Learn More<FaIcons.FaArrowRight/></a></div>
                      </div></div> 
      </main>
    </div>
  )
}

export default HomePage



{/* <div>
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
              <Link to='/chatbot'><img src='chatbot.png' className='w-20 fixed top-[85%] left-[90%] right-[10%] cursor-pointer z-50'/></Link>
</div> */}