import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Featured from "./components/Featured";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Favourites from "./components/Favourites";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from './Loader';

const App = () => {
  const minHeight = true;
  // useSmoothScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading delay (remove this in production)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      {loading ? (
        <Loader/> // Show the loader while content is loading
      ) : (
      <><Navbar /><Routes>
            {/* <ScrollToTop/> */}
            <Route path="/" element={<Home />} />
            <Route path="featured" element={<Featured minHeight={minHeight} />} />
            <Route path="about" element={<About minHeight={minHeight} />} />
            <Route path="gallery" element={<Gallery />} />
            <Route
              path="contactus"
              element={<Favourites minHeight={minHeight} />} />
            <Route path="*" element={<NotFound />} />
          </Routes><Footer /></>
      )}
    </>
  );
};

export default App;
