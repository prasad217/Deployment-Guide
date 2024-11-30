// src/components/VercelGuide.js
import React from 'react';
import './VercelGuide.css'; // Create and import your CSS file for styling
import vercel1 from './images/ver1.png'; // Import the images
import vercel2 from './images/ver2.png';
import vercel3 from './images/ver3.png';

const VercelGuide = () => {
  return (
    <div className="vercel-guide-container">
      <h2>Deploying Your Project on Vercel</h2>
      <p>
        Vercel is a cloud platform for static websites and frontend frameworks. Follow these steps to deploy your project on Vercel.
      </p>

      <h3>Step 1: Sign Up or Log In</h3>
      <p>
        Visit <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel's website</a> and sign up or log in using your GitHub, GitLab, or Bitbucket account. Once logged in, you'll see the Vercel dashboard as shown below.
      </p>
      <img src={vercel1} alt="Vercel Dashboard" className="guide-image" />

      <h3>Step 2: Import Your Git Repository</h3>
      <p>
        In the dashboard, click on the "New Project" button. Then, import your GitHub, GitLab, or Bitbucket repository by selecting the appropriate platform and connecting your account.
      </p>
      <img src={vercel2} alt="Import Repository on Vercel" className="guide-image" />

      <h3>Step 3: Configure Your Project</h3>
      <p>
        After importing your repository, Vercel will automatically detect the framework you’re using. You can adjust the settings if necessary. Once ready, click on "Deploy."
      </p>
      <img src={vercel3} alt="Configure and Deploy on Vercel" className="guide-image" />

      <h3>Step 4: Deploy Your Site</h3>
      <p>
        After configuring your project, Vercel will begin the deployment process. It will automatically build and deploy your project. The deployment process is shown below.
      </p>
      <img src={vercel3} alt="Deploy Site on Vercel" className="guide-image" />

      <h3>Step 5: Access Your Deployed Site</h3>
      <p>
        Once the deployment is complete, your site will be accessible at a URL provided by Vercel. You can also add a custom domain if you have one.
      </p>
    </div>
  );
};

export default VercelGuide;
