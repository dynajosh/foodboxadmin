import React from 'react'
import Lottie from 'react-lottie';
import "./HeroSection.css";
import animationData from '../../lottie-jsons/london-bridge.json';


export default function HeroSection() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className='margin'>
    <div className="header-content">
        <div className="header-content--text">
          <h1>
          One bridge to connect  your digital solution to banks across Africa.
          </h1>
          <p>
            One bridge helps businesses connect to their customer’s bank account for payments, financial services and data.
          </p>
            <p>
            It’s a lot of individual banks to get connected to, but now all you need is one bridge.</p>
          <button className="cta">Contact Us</button>
        </div>

        <div className="header-content--lottie">
        <Lottie 
        options={defaultOptions}
          // height={'auto'}
          // width={400}
        />
        </div>
      </div>
    </div>
  )
}
