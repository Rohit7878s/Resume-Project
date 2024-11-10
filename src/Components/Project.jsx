
import React from "react";
import project from "./data/project.json";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-12" id="projects">
      <h1 className="text-center mt-32 text-3xl font-bold mb-12">PROJECTS</h1>
      
      <div 
       data-aos="flip-right"
       data-aos-duration="1000"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {project.map((data) => (
          <div
            key={data.id}
            className="flex justify-center"
          >
            <div 
              className="bg-gray-900 text-white rounded-lg overflow-hidden border border-yellow-400 shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                boxShadow: "0 0 20px rgba(101, 175, 10, 0.5)"
              }}
            >
              <div className="p-4 flex justify-center">
                <img
                  src={data.imageSrc}
                  alt={data.title}
                  className="w-full h-48 object-cover rounded-lg border-2 border-yellow-400"
                />
              </div>
              
              <div className="p-4 text-center">
                <h5 className="text-xl font-semibold mb-2">{data.title}</h5>
                <p className="text-gray-300 mb-4">{data.description}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={data.demo}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
                  >
                    Demo
                  </a>
                  <a
                    href={data.source}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md transition-colors duration-200"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;












// import React from "react";
// import project from "./data/project.json";

// const Projects = () => {
//   return (
//     <>
//       <div className="container projects my-3 " id="projects">
//         <h1 className="text-center mt-36 text-3xl">PROJECTS</h1>
//         <div className="row d-flex justify-content-center align-content-center">
//           {project.map((data) => (
//             <>
//               <div
//                 key={data.id}
//                 className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
//               >
//                 <div
//                   className="card bg-dark text-light"
//                   style={{
//                     width: "18rem",
//                     border: "1px solid yellow",
//                     boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
//                   }}
//                   data-aos="flip-right"
//                   data-aos-duration="1000"
//                 >
//                   <div className="img d-flex justify-content-center align-content-center p-3">
//                     <img
//                       src={data.imageSrc}
//                       className="card-img-top"
//                       alt="..."
//                       style={{
//                         width: "250px",
//                         height: "200px",
//                         border: "2px solid yellow",
//                         borderRadius: "10px",
//                       }}
//                     />
//                   </div>
//                   <div className="card-body text-center">
//                     <h5 className="card-title">{data.title}</h5>
//                     <p className="card-text">{data.description}</p>
//                     <a href={data.demo} className="btn btn-primary mx-3">
//                       Demo
//                     </a>
//                     <a href={data.source} className="btn btn-warning">
//                       Code
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;