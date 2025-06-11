import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Ensures the page scrolls to the top
    AOS.init({ duration: 1000, once: true });
    AOS.refresh(); // Ensures animations restart
  }, [location.key]);

  return null;
};

export default ScrollToTop;
