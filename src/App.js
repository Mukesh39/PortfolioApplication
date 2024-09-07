// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Experience from "./pages/Experience";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ProjectDisplay from "./pages/ProjectDisplay";
// import Resume from "./pages/Resume";
// import Footerimg from "./components/Footerimg";



 
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/projects" element={<Projects />} />
//           <Route exact path="/project/:id" element={<ProjectDisplay />} />
           
//           <Route exact path="/experience" element={<Experience />} />
//           <Route exact path="/experience" element={<Experience />} />
//           <Route exact path="/resume" element={<Resume />} />
//         </Routes>

//         <Footer />
//         <Footerimg />
//       </Router>
//     </div>
//   );
// }

// export default App;



import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy loading components
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => import("./pages/Experience"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const ProjectDisplay = lazy(() => import("./pages/ProjectDisplay"));
const Resume = lazy(() => import("./pages/Resume"));
const Footerimg = lazy(() => import("./components/Footerimg"));

function App() {
  return (
    <div className="App">
      <Router>
        {/* Wrap lazy-loaded components with Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/project/:id" element={<ProjectDisplay />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
          <Footerimg />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

