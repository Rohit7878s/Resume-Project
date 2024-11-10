import React from 'react';
import Skill from './data/Skill.json';

const Skills = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          SKILLS
        </h1>
        
        <div
        data-aos="flip-left"
        data-aos-duration="1000"
         className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {Skill.map((data) => (
            <div
              key={data.id}
              className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center">
                <img
                  src={`/assets/${data.imageSrc}`}
                  alt={data.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-700 text-center">
                {data.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;



// import React from 'react';
// import Skill from './data/Skill.json'

// const Skills = () => {
//   return (
//     <>
//       <div className='container skills  mt-10'>
//         <h1 className='text-center'>SKILLS</h1>
//         <div className='items'>
//           {Skill.map((data) => (
//             <>
//               <div className='item' key={data.id}
//                 data-aos="flip-left"
//                 data-aos-duration="1000">
//                 <img src={`/assets/${data.imageSrc}`} alt="" />
//                 <h3>{data.title}</h3>
//               </div>
//             </>
//           ))}
//         </div>
//       </div>
//       {/* <img src={`/assets/${data.imageSrc}`} alt="" /> */}
//     </>
//   )
// }

// export default Skills
