import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import a1 from '../assets/a1.json';
import a2 from "../assets/a2.json";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade">
      <Navbar />
      <div className="cont">
        <div className="lottie-container">
          <Lottie className="lottie" animationData={a1} />
        </div>
        <div className="lottie-container">
          <Lottie className="lottie" animationData={a2} />
        </div>
      </div>
    </div>
  );
}

export default Home;
