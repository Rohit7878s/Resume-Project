import React from 'react';
import education from './data/Education.json';

const Education = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 mt-5 ">
        EDUCATION
      </h1>
      
      <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="max-w-4xl mx-auto space-y-8">
        {education.map((data) => (
          <div
            key={data.id}
            className="group bg-gray-800/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/50 transform hover:-translate-y-1"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Image container */}
              <div
              className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <img
                  src="https://th.bing.com/th/id/OIP.rLaQYNiCaZn4Jb1ISWGjXQHaH0?w=176&h=185&c=7&r=0&o=5&pid=1.7"
                  alt={`${data.Class} logo`}
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </div>
              
              {/* Content container */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                  {data.Class}
                </h2>
                <div className="space-y-1">
                  <p className="text-emerald-400 font-medium">
                    {data.startdate} to {data.EndDate}
                  </p>
                  <p className="text-yellow-400 font-medium">
                    {data.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;



// import React from 'react'
// import eduction from './data/Education.json'

// const Eduction = () => {
//   return (
//     <>
//       <div className='container ex'>
//         <h1 className='text-center'>EDUCATION</h1>
//         {eduction.map((data) => {
//           return (
//             <>
//               <div key={data.id} className='ex-item text-center my-5'
//               data-aos="zoom-in"
//               data-aos-duration="1000">
                
//                 <div className='left'>
//                   <img src="https://th.bing.com/th/id/OIP.rLaQYNiCaZn4Jb1ISWGjXQHaH0?w=176&h=185&c=7&r=0&o=5&pid=1.7" alt="logo" />
//                   <div className='right'>
//                     <h2>{data.Class}</h2>
//                     <h4>
//                       <span style={{ color: "yellowgreen" }}>
//                        {data.startdate} {"to"} {data.EndDate}{" "}</span>
//                        <br />
                      
//                       <span style={{ color: "yellow" }}>{data.location}</span>
//                     </h4>

//                   </div>

//                 </div>

//               </div>
//             </>
//           )
//         })}

//       </div>

//     </>
//   )
// }

// export default Eduction
