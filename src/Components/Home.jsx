import React, { useEffect, useState } from 'react';
import hero from './data/hero.json'

const TypeWriter = ({ words, delay = 50 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    if (currentIndex <= words[currentWord].length) {
      const timeout = setTimeout(() => {
        setCurrentText(words[currentWord].slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setCurrentWord((prev) => (prev + 1) % words.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentWord, words, delay]);

  return <span className="text-yellow-400">{currentText}</span>;
};

const Home = () => {
  const typingWords = [
    "Welcome to my profile",
    "My Name is Rohit Sharma",
    "I am Frontend Developer"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white mt-10">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left" 
               data-aos="fade-up-right"
               data-aos-duration="1000">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <TypeWriter words={typingWords} />
              </h2>
              <p className="text-lg text-gray-300">
                Frontend Developer passionate about creating beautiful user experiences
              </p>
            </div>
            
            <a
              href="/resume.pdf"
              download="resume"
              className="inline-block px-8 py-3 text-lg font-medium text-yellow-400 border-2 border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2"
               data-aos="fade-up-left"
               data-aos-duration="1000">
            <div className="relative">
              <div className="w-full h-full absolute -top-4 -left-4  opacity-20" />
              <div className="relative rounded-full overflow-hidden aspect-square">
                <img
                 src={`/assets/${hero.imgSrc}`}
                  alt="Rohit Sharma"
                  className="w-full h-full object-cover mb-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;



// import React, { useEffect, useRef } from 'react'
// import hero from './data/hero.json'
// import Typed from 'typed.js'



// const Home = () => {

//   // const typedRef=useRef(null);
//   // useEffect(()=>{
//   //   const options={
//   //     strings:[
//   //       "Welcome to my profile",
//   //       "My Name is  Rohit Sharma",
//   //       "I am Frontend Developer",
      
//   //     ],
//   //     typespeed:50,
//   //     backspeed:50,
//   //     loop:true,
//   //   };
//   //   const typed=new Typed(typedRef.current,options)
//   //   return ()=>{
//   //     typed.destroy()
      
//   //   };
//   // },[]);

//   return (

//     <> 
//       <div className='container home' id="home"  >
//         <div className="left" 
//         data-aos="fade-up-right"
//         data-aos-duration="1000"
//         >

//           <h1>My Name is  Rohit Sharma</h1>
//           <a href="" className='btn btn-outline-warning my-3' download="resume">Download Resume</a>
//         </div>
//         <div className="right ">
//           <div className='img' 
//           data-aos="fade-up-left"
//           data-aos-duration="1000"
//           >
//             <img className='img2'src={`/assets/${hero.imgSrc}`} alt="hero" />
//           </div>
//         </div>
//       </div>

      
//     </>
//   )
// }

// export default Home
