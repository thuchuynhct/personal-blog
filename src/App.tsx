import { Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from 'react';
import Footer from "./components/footer/Footer"
import Navbar from "./components/header/Navbar"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import Read from "./pages/Read";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  ScrollToTop();
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Read />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
