// src/components/NetlifyGuide.js
import React from 'react';
import './NetlifyGuide.css'; // Create and import your CSS file for styling
import netlify1 from './images/net1.png'; // Import the images
import netlify2 from './images/net2.png';
import netlify3 from './images/net3.png';

const NetlifyGuide = () => {
  return (
    <div className="netlify-guide-container">
      <h2>Deploying Your Project on Netlify</h2>
      <p>
        Netlify is a popular platform for deploying static websites and modern web applications. Follow these steps to deploy your project on Netlify.
      </p>

      <h3>Step 1: Sign Up or Log In</h3>
      <p>
        Visit <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify's website</a> and sign up or log in using your GitHub account. Once logged in, you'll see the Netlify dashboard as shown below.
      </p>
      <img src={netlify1} alt="Netlify Dashboard" className="guide-image" />

      <h3>Step 2: Search for Your Repository</h3>
      <p>
        In the dashboard, use the search bar to find the GitHub repository you want to deploy. Start typing the name of your repository in the search bar, and select it from the list of results.
      </p>
      <img src={netlify1} alt="Search for Repository on Netlify" className="guide-image" />

      <h3>Step 3: Create a New Site</h3>
      <p>
        Once you’ve selected your repository, click on the "New site from Git" button. This will allow you to connect your GitHub repository to Netlify for deployment. The image below shows how to select your repository.
      </p>
      <img src={netlify2} alt="Create a New Site on Netlify" className="guide-image" />

      <h3>Step 4: Deploy Your Site</h3>
      <p>
        After configuring your site settings, click the "Deploy site" button. Netlify will automatically build and deploy your project. The deployment process and result are shown below.
      </p>
      <img src={netlify3} alt="Deploy Site on Netlify" className="guide-image" />

      <h3>Step 5: Access Your Deployed Site</h3>
      <p>
        Once the deployment is complete, your site will be accessible at a URL provided by Netlify. You can also add a custom domain if you have one.
      </p>
    </div>
  );
};

export default NetlifyGuide;
