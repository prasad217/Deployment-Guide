// src/components/Home.js
import React from 'react';
import './Home.css'; // Import your CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro">
        <h1> 
          Welcome to DeployWizard
          <img 
            src="https://cdn-icons-png.flaticon.com/128/3943/3943850.png" 
            alt="Magic Wand Icon" 
            className="intro-icon" 
          />
        </h1>
        <p>Your One-Stop Solution for Hassle-Free Deployments</p>
        <p>
          Simplify your deployment process with our easy-to-follow guides. Whether you're launching on GitHub, 
          Vercel, Netlify, or AWS, DeployWizard has got you covered. No more deployment headaches—just smooth, 
          seamless launches every time.
        </p>
      </div>

      <div className="platforms">
      <a href="/github-deployment" className="platform-box">
          GitHub
        </a>
        <div className="platform-box">Vercel</div>
        <div className="platform-box">Netlify</div>
        <div className="platform-box">AWS Instance</div>
      </div>
    </div>
  );
};

export default Home;
