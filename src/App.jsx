import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";


const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
