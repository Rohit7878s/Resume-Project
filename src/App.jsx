import { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Education from "./Components/Education";
import Skill from "./Components/Skills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar /> <Home />
      </div>
    ),
  },
  {
    path: "/Education",
    element: (
      <div>
        <Navbar /> <Education />
      </div>
    ),
  },
  {
    path: "/Skill",
    element: (
      <div>
        <Navbar /> <Skill />
      </div>
    ),
  },
  {
    path: "/Project",
    element: (
      <div>
        <Navbar /> <Project />
      </div>
    ),
  },
  {
    path: "/Contact",
    element: (
      <div>
        <Navbar /> <Contact />
      </div>
    ),
  },
]);

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {/* <Navbar />
      <div className="container">
        <Home />
        <Education />
        <Skill />
        <Project />
        <Contact />
      </div> */}

<RouterProvider router={router} />
    </>
  );
};

export default App;
