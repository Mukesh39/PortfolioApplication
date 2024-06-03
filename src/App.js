import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import Resume from "./pages/Resume";
import Footerimg from "./components/Footerimg";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/project/:id" element={<ProjectDisplay />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/resume" element={<Resume />} />
        </Routes>

        <Footer />
        <Footerimg />
      </Router>
    </div>
  );
}

export default App;
