import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import TestimonialPage from "./pages/TestimonialPage.jsx";



function App() {

  return (
    <div>
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<HomePage/>}/>
               <Route path="/team" element={<TeamPage/>}/>
               <Route path="/project" element={<ProjectPage/>}/>
               <Route path="/service" element={<ServicePage/>}/>
               <Route path="/testimonial" element={<TestimonialPage/>}/>
           </Routes>
       </BrowserRouter>

    </div>
  )
}

export default App
