import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
import FacilitiesCard from './FacilitiesCard'
import * as FaIcons  from 'react-icons/fa'
import { MdSelfImprovement,MdSportsMartialArts } from 'react-icons/md'
import { FaXTwitter } from 'react-icons/fa6';
import { useState,useRef,useEffect,useCallback } from 'react'
// import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


function HomePage() {

  const [isMainOpen, setMainIsOpen] = useState(false);
  const [isFirstOpen, setIsFirstOpen] = useState(false)
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setMainIsOpen(!isMainOpen);
  const switchingDropdown1 = () => setMainIsOpen(true)
  const switchingDropDown2 = () => setMainIsOpen(false)
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);


  const toggleFirstDropdown = () => setIsFirstOpen(!isFirstOpen);
  const switchingFirstDropdown1 = () => setIsFirstOpen(true)
  const switchingFirstDropDown2 = () => setIsFirstOpen(false)

const moreoptions = [
  { id: 1, name: "Academics" },
  { id: 2, name: "Admission/Fee/TC" },
  { id: 3, name: "HPD Corner" },
  {
    id: 4,
    name: "Gallery",
    subItems: [
      { id: "g1", name: "Photos" },
      { id: "g2", name: "Videos" },
      { id: "g3", name: "Events" },
    ],
  },
];
const images = ['aps1.jpg','aps2.jpg','aps3.jpg','aps4.jpg','aps5.jpg','aps6.jpg','aps7.jpg','aps8.jpg']


//  const settings = {
//     dots: true,
//     infinite: true,         // loops endlessly
//     speed: 800,             // transition speed in ms
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,         // auto sliding
//     autoplaySpeed: 3000,    // 3 seconds delay
//     fade: true,             // smooth fading effect
//     pauseOnHover: false,    // keeps sliding even when hovered
//   };
  
//   const SLIDE_WIDTH = 600; 
// const TRANSITION_DURATION = 500;
//   const[currentIndex,setCurrentIndex]= useState(0)
  
//  const slideImage = useCallback((direction) => {
//         setCurrentIndex(prevIndex => {
//             let newIndex = prevIndex + direction;

//             if (newIndex < 0) {
//                 newIndex = images.length - 1; // Loop back
//             } else if (newIndex >= images.length) {
//                 newIndex = 0; // Loop forward
//             }
//             return newIndex;
//         });
//     }, []);

//     // Auto-slide functionality (runs every 5 seconds)
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             slideImage(1); 
//         }, 5000); 

//         return () => clearInterval(intervalId);
//     }, [slideImage]);

//     // Calculates the CSS transformation needed to show the current image
//     const transformStyle = {
//         // Total width of the track (e.g., 4 slides * 600px = 2400px)
//         width: `${images.length * SLIDE_WIDTH}px`,
        
//         // This moves the whole track left by the width of the current slide
//         transform: `translateX(-${currentIndex * SLIDE_WIDTH}px)`, 
        
//         // Apply smooth transition
//         transition: `transform ${TRANSITION_DURATION}ms ease-in-out`,
//     };


  return (
    <div className='w-screen h-fit bg-[#02021d] py-[2rem]'>
      {/* Nav Section */}
      <nav className='w-[85%] p-4 px-6 m-auto stick z-1000 flex justify-between items-center rounded-[50px] bg-[#2b2058c0]'>
        <p className='text-white text-[1.4rem]'>Army Public School,Jhansi</p>
        <ul className='text-[#bababa] justify-between lg:w-[45%]  hidden lg:flex text-[1.1rem] cursor-pointer'>
          <li className='cursor-pointer hover:text-white border-b-2 border-transparent navlink-animation hover:border-[#1216ef]'>Home</li>
        <a href='#about'><li className='cursor-pointer hover:text-white border-b-2 border-transparent hover:border-[#1216ef]'>About</li></a>
        <a href='#facilities'><li className='cursor-pointer hover:text-white border-b-2 border-transparent hover:border-[#1216ef]'>Facilities</li></a>
        <li className='cursor-pointer hover:text-white border-b-2 border-transparent hover:border-[#1216ef]'>Mentor</li>
        <li className='cursor-pointer hover:text-white border-b-2 border-transparent hover:border-[#1216ef]'>Contact</li>
        <li className='cursor-pointer hover:text-white border-b-2 border-transparent'><button type="button" onMouseOver={switchingDropdown1} onMouseOut={switchingDropDown2} onClick={toggleDropdown}>
        More
        {/* Optional: Add an arrow icon that rotates */}
        <span>{isMainOpen ? ' ▲' : ' ▼'}</span> 
      </button>
      {isMainOpen && (
        <div onMouseOver={switchingDropdown1} onMouseOut={switchingDropDown2} className='absolute flex bg-[#101031] flex-col'>
        {moreoptions.map((option)=> (
          <div>
          <div className="dropdown-menu w-[100%] h-[fit] px-4 py-4 bg-[#1a1a50] hover:bg-[#292964]">
          {option.name}
          {option.subItems && <span className="ml-2">▶</span>}
        </div>{option.subItems && (
            <div className="absolute top-0 left-full hidden group-hover:flex flex-col bg-[#1a1a50] rounded-lg shadow-lg z-50">
              {option.subItems.map((sub) => (
                <div
                  key={sub.id}
                  className="px-4 py-3 hover:bg-[#292964] cursor-pointer whitespace-nowrap"
                >
                  {sub.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )}
</li></ul>
        <button className='w-fit h-fit rounded-[20px] bg-[#8f6ff7] px-4 py-1 cursor-pointer text-white text-[1.3rem]'>Login</button>
      </nav>  
      <main>
        {/* Home Section */}
        <div className='grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4 mt-[4rem]'>
        <div className='flex justify-center items-center'>
          <div className='w-[80%] flex flex-col'>
            <h1 className='text-[3rem] leading-tight font-extrabold text-[white]'>
              Inspiring leaders, bright futures.
              </h1>
              <p className='text-[#c5c3c3] text-[1.1rem] mt-[1rem] text-center'>
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
                {/* About Section */}
                <div className='mt-[15rem] w-[60%] m-auto' id='about'>
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
                  <div className='w-[80%] flex flex-col mx-auto'>
            {/* <Slider {...settings} 
            className="text-white bg-[white]">
        {images.map((src, i) => (
          <div key={i}>
            <img
              src={src}
              alt={`slide-${i}`}
              className="w-full h-[500px] object-cover"
            />
          </div>
        ))}
      </Slider> */}
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        // pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="mySwiper mt-[5rem]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${activeIndex === i ? "active" : ""}`}
      onClick={() => {
        if (swiperRef.current) {
          swiperRef.current.slideToLoop(i); // go to that image
          setActiveIndex(i);
        }
      }}
          ></span>
        ))}
      </div>
                    </div>
                  {/* Facilities Section */}
                  <div className='mt-[10rem]' id='facilities'><p className='text-[2.5rem] text-white text-center'>Facilities</p>
                  <p className='text-[1.2rem] text-[gray] text-center'>Our facilities make us the best.</p>
                  <div className='grid md:grid-cols-2 lg:grid-cols-3  mt-[4rem] md:grid-rows-3 grid-cols-1 grid-rows-9 gap-6 items-center place-items-center place-ce w-[80%] m-auto'>
                    <div className='w-[100%] h-[100%] hover:scale-105 rounded-[20px] border border-[#424242] flex flex-col p-8 bg-[#352b4b69]'>
                      <FaIcons.FaBook className='text-white text-[3rem] w-fit h-fit p-4 rounded-[20px] bg-[#644bf0] mx-auto'/>
                      <h1 className='text-[1.5rem] text-center mt-[1.1rem] text-[white]'>Well Equipped Library</h1>
                      <p className='text-[#9a9999] text-[1rem] mt-[0.5rem] text-center'>APS Jhansi has a huge automated, well furnished library equipped with the latest books...</p>
                      <a className='flex gap-2 text-[1.1rem] text-[#462fda] mt-[0.5rem] items-center justify-center cursor-pointer'>Learn More<FaIcons.FaArrowRight/></a>
                      </div>
                    <div className='w-[100%] h-[100%] hover:scale-105 rounded-[20px] border border-[#424242] flex flex-col p-8 bg-[#352b4b69]'>
                      <FaIcons.FaSeedling className='text-white text-[3rem] w-fit h-fit p-4 rounded-[20px] bg-[#644bf0] mx-auto'/>
                      <h1 className='text-[1.5rem] text-center mt-[1.1rem] text-[white]'>Herbal Garden</h1>
                      <p className='text-[#9a9999] text-[1rem] mt-[0.5rem] text-center'>Our school has a huge herbal garden consisting of various herbaceous plants like Shatavari(used for...</p>
                      <a className='flex gap-2 text-[1.1rem] text-[#462fda] mt-[0.5rem] items-center justify-center cursor-pointer'>Learn More<FaIcons.FaArrowRight/></a></div>
                    <div className='w-[100%] h-[100%] hover:scale-105 rounded-[20px] border border-[#424242] flex flex-col p-8 bg-[#352b4b69]'>
                      <MdSelfImprovement className='text-white text-[3rem] w-fit h-fit p-4 rounded-[20px] bg-[#644bf0] mx-auto'/>
                      <h1 className='text-[1.5rem] text-center mt-[1.1rem] text-[white]'>Yoga and Martial Arts</h1>
                      <p className='text-[#9a9999] text-[1rem] mt-[0.5rem] text-center'>Yoga and Pranayam tends to raise the curtain of ignorance and other social evil. Students practise relaxing...</p>
                      <a className='flex gap-2 text-[1.1rem] text-[#462fda] mt-[0.5rem] items-center justify-center cursor-pointer'>Learn More<FaIcons.FaArrowRight/></a></div>
                    <div className='w-[100%] h-[100%] hover:scale-105 rounded-[20px] border border-[#424242] flex flex-col p-8 bg-[#352b4b69]'>
                      <FaIcons.FaPaintBrush className='text-white text-[3rem] w-fit h-fit p-4 rounded-[20px] bg-[#644bf0] mx-auto'/>
                      <h1 className='text-[1.5rem] text-center mt-[1.1rem] text-[white]'>Art and Craft</h1>
                      <p className='text-[#9a9999] text-[1rem] mt-[0.5rem] text-center'>Art and Craft teach children to learn in a different way and bring out the latent creativity of a...</p>
                      <a className='flex gap-2 text-[1.1rem] text-[#462fda] mt-[0.5rem] items-center justify-center cursor-pointer'>Learn More<FaIcons.FaArrowRight/></a></div>
                    <div className='w-[100%] h-[100%] hover:scale-105 rounded-[20px] border border-[#424242] flex flex-col p-8 bg-[#352b4b69]'>
                      <MdSportsMartialArts className='text-white text-[3rem] w-fit h-fit p-4 rounded-[20px] bg-[#644bf0] mx-auto'/>
                      <h1 className='text-[1.5rem] text-center mt-[1.1rem] text-[white]'>Taekwando</h1>
                      <p className='text-[#9a9999] text-[1rem] mt-[0.5rem] text-center'>Our Taekwondo class focuses on improving children’s basic motor and listening skills. Our program...</p>
                      <a className='flex gap-2 text-[1.1rem] text-[#462fda] mt-[0.5rem] items-center justify-center cursor-pointer'>Learn More<FaIcons.FaArrowRight/></a></div>
                    <div className='w-[100%] h-[100%] hover:scale-105 rounded-[20px] border border-[#424242] flex flex-col p-8 bg-[#352b4b69]'>
                      <FaIcons.FaMusic className='text-white text-[3rem] w-fit h-fit p-4 rounded-[20px] bg-[#644bf0] mx-auto'/>
                      <h1 className='text-[1.5rem] text-center mt-[1.1rem] text-[white]'>Music and Dance</h1>
                      <p className='text-[#9a9999] text-[1rem] mt-[0.5rem] text-center'>Music classes in APS Jhansi start at primary level. Children are taught different Ragas, Sur Tal, ...</p>
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
                {/* Why Us Section */}
                <div className='mt-[10rem]'>
                  <h1 className='text-[2rem] text-[white] text-center'>Why Us?</h1>
                  <p className='text-[1.2rem] text-[gray] text-center'>Beacuse we hav proved that we are the best.</p>
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-[1rem] lg:px-30 md:px-15 px-8 gap-6'>
                    <div className='w-[100%] h-[100%] p-10 rounded-[20px] bg-[#18182a]'>
                      <FaIcons.FaPalette className='text-[white] text-[3rem] w-fit h-fit p-4 mx-auto bg-[#593df2] rounded-[20px] opacity-90 border-solid border-8 border-[#3b3562]'/>
                      <h1 className='text-[white] text-[1.8rem] text-center mt-[1rem]'>Creative Excellence</h1>
                      <p className='mt-[1rem] text-[#adacac] text-center text-[1.1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p>
                      <hr className='h-1 text-[#515151] mt-[2rem]'/>
                      <div className='mx-auto flex flex-col items-center gap-0 justify-center'><p className='text-[2rem] mt-[0.5rem] text-[#5d37e5]'>2000+</p><p className='text-[gray]'>Creative Students</p></div>
                      </div>
                    <div className='w-[100%] h-[100%] p-10 rounded-[20px] bg-[#18182a]'>
                      <FaIcons.FaChartLine className='text-[white] text-[3rem] w-fit h-fit p-4 mx-auto bg-[#593df2] rounded-[20px] opacity-90 border-solid border-8 border-[#3b3562]'/>
                      <h1 className='text-[white] text-[1.8rem] text-center mt-[1rem]'>Proven Results</h1>
                      <p className='mt-[1rem] text-[#adacac] text-center text-[1.1rem]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.</p>
                      <hr className='h-1 text-[#515151] mt-[2rem]'/>
                      <div className='mx-auto flex gap-6 items-center justify-center'><div className='flex flex-col items-center justify-center'><p className='text-[2rem] mt-[0.5rem] text-[#5d37e5]'>85%</p><p className='text-[gray]'>Class X Average</p>
                      </div><div className='flex flex-col items-center justify-center'><p className='text-[2rem] mt-[0.5rem] text-[#5d37e5]'>87%</p><p className='text-[gray]'>Classs XII Avearge</p></div></div>
                      </div>
                    <div className='w-[100%] h-[100%] p-10 rounded-[20px] bg-[#18182a]'>
                      <FaIcons.FaAward className='text-[white] text-[3rem] w-fit h-fit p-4 mx-auto bg-[#593df2] rounded-[20px] opacity-90 border-solid border-8 border-[#3b3562]'/>
                      <h1 className='text-[white] text-[1.8rem] text-center mt-[1rem]'>Expert Team</h1>
                      <p className='mt-[1rem] text-[#adacac] text-center text-[1.1rem]'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis.</p>
                      <hr className='h-1 text-[#515151] mt-[2rem]'/>
                      <div className='mx-auto flex flex-col items-center justify-center'><p className='text-[2rem] mt-[0.5rem] text-[#5d37e5]'>100+</p><p className='text-[gray]'>Skilled Teachers</p></div>
                      </div>
                  </div>
                  <div>
                    
                  </div>
                </div>
                <div>
                  <h1 className='text-[white] text-[2.5rem] text-center mt-[10rem]'>Contact</h1>
                  <p className='text-[gray] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <div className='lg:px-30 md:px-10 px-8 mt-[5rem] grid lg:grid-cols-7 md:grid-cols-7 sm:grid-cols-1 md:gap-[3rem] gap-[5rem]'>
                    <div className='rounded-[20px] w-[100%] lg:col-span-3 md:col-span-3 col-span-1 overflow-hidden'>
                    <div className='w-[100%] h-[100%] p-10 bg-[#1b1b34] border-t-4 border-[#692af1]'>
                      <FaIcons.FaCommentDots className='text-[white] w-fit h-fit p-4 rounded-[20px] text-[2rem] bg-[#3636e0] mx-auto'/>
                      <p className='text-[white] text-center text-[1.7rem] mt-6'>Lets's start a conversation.</p>
                      <p className='text-[1.1rem] text-[#9f9f9f] text-center mt-2'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.</p>
                      <form className='flex flex-col mt-10'>
                       <div className='flex justify-between'>
                        <input type='text' className='w-[45%] h-[3rem] rounded-[15px] border-2 text-[white] border-[#3f3f3fb7] pl-4 bg-[#0f0625] placeholder:text-[gray] focus:border-[blue]' placeholder='Your Name'/>
                        <input type='email' className='w-[45%] h-[3rem] rounded-[15px] border-2 text-[white] border-[#3f3f3fb7] pl-4 bg-[#0f0625] placeholder:text-[gray] focus:border-[blue]' placeholder='Email Address'/></div> 
                        <input type='text' className='w-[full] h-[3rem] mt-[1.5rem] rounded-[15px] border-2 text-[white] border-[#3f3f3fb7] pl-4 bg-[#0f0625] placeholder:text-[gray] focus:border-[blue]' placeholder='Subject'/>
                        <textarea  className='w-[full] h-[7rem] mt-6 rounded-[15px] border-2 text-[white] border-[#3f3f3fb7] text-[1.1rem] pl-4 bg-[#0f0625] placeholder:text-[gray] pt-2 focus:border-[blue]' placeholder='Message'/>
                        <button className='flex w-full h-14 py-2 mt-6 bg-[#5a4ff2] cursor-pointer text-[1.1rem] text-[white] justify-center items-center gap-2 rounded-[15px]'>Send Message <FaIcons.FaPaperPlane/></button>
                    </form></div></div>
                    <div className='w-full lg:col-span-4 md:col-span-4 col-span-1 flex flex-col gap-10'>
                    <div className='w-full flex gap-8 items-center px-10 py-6 bg-[#18182a] rounded-[20px]'>
                      <FaIcons.FaEnvelope className='w-fit h-fit p-4 rounded-[10px] bg-[#2a2357] text-[white] text-[1.5rem]'/>
                    <div className='flex flex-col'>
                      <p className='text-[1.2rem] text-[#734ce6]'>Email Us</p>
                      <p className='text-[1rem] text-[#ffffff]'>apsjhs@gmail.com</p>
                      <p className='text-[0.9rem] mt-2 text-[#8d8d8d]'>Response in 2-3 hours.</p></div>
                    </div>
                    <div className='w-full flex gap-8 items-center px-10 py-6 bg-[#18182a] rounded-[20px]'>
                      <FaIcons.FaPhoneAlt className='w-fit h-fit p-4 rounded-[10px] bg-[#2a2357] text-[white] text-[1.5rem]'/>
                    <div><p className='text-[1.2rem] text-[#734ce6]'>Call Us</p>
                    <p className='text-[1rem] text-[#ffffff]'>+91 9651604225</p>
                    <p className='text-[0.9rem] mt-2 text-[#8d8d8d]'>Available from 9:00 AM to 3:00 PM IST</p></div>
                    </div>
                    <div className='w-full flex gap-8 items-center px-10 py-6 bg-[#18182a] rounded-[20px]'>
                      <FaIcons.FaMapMarkerAlt className='w-fit h-fit p-4 rounded-[10px] bg-[#2a2357] text-[white] text-[1.5rem]'/>
                    <div><p className='text-[1.2rem] text-[#734ce6]'>Visit Us</p>
                    <p className='text-[1rem] text-[#ffffff]'>Army Public School, Hunter Road, Jhansi Cantt - 284001</p>
                    <p className='text-[0.9rem] mt-2 text-[#8d8d8d]'>Opens Monday-Friday</p></div>
                    </div>
                    <div className=''><p className='text-[1.2rem] text-[white] text-center'>Connect With Us</p>
                    <div className='flex gap-8 justify-center items-center mt-[1rem]'>
                      <FaIcons.FaYoutube className='text-[#4d34da] w-fit h-fit p-4 rounded-[20px] bg-[#19193c] text-[1.5rem] cursor-pointer hover:scale-105 hover:text-[white] hover:bg-[#4d34da]'/>
                    <FaIcons.FaFacebook className='text-[#4d34da] w-fit h-fit p-4 rounded-[20px] bg-[#19193c] text-[1.5rem] cursor-pointer hover:scale-105 hover:text-[white] hover:bg-[#4d34da]'/>
                    <FaIcons.FaInstagram className='text-[#4d34da] w-fit h-fit p-4 rounded-[20px] bg-[#19193c] text-[1.5rem] cursor-pointer hover:scale-105 hover:text-[white] hover:bg-[#4d34da]'/>
                    <FaXTwitter className='text-[#4d34da] w-fit h-fit p-4 rounded-[20px] bg-[#19193c] text-[1.5rem] cursor-pointer hover:scale-105 hover:text-[white] hover:bg-[#4d34da]'/>
                    </div></div>
                    </div>
                  </div>
                </div>
      </main>
      <footer className='w-screen mt-[10rem] h-fit bg-[black] border-t border-[#343434] px-20 py-10'>
        <div className='text-white'><Link to='/teacherhomeworkpage'><p className='text-[2rem]'>Army Public School, Jhansi</p></Link>
        <Link to='/identifier'><p className='text-[#c1bebe] font-extralight'>Hunter Road</p></Link>
        <p className='text-[#c1bebe] font-extralight'>Jhansi Cantt - 284001</p>
        <p className='text-[#c1bebe] font-extralight'><span className='text-[white] text-[1.1rem]'>Phone:</span> +91 9651604225</p>
        <p className='text-[#c1bebe] font-extralight'><span className='text-[white] text-[1.1rem]'>Email:</span> apsjhs@gmail.com</p></div>
      </footer>
    </div>
  )
}

export default HomePage

