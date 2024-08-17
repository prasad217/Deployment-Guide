// src/components/GitHubGuide.js
import React, { useState } from 'react';
import './GitHubGuide.css';
import git1 from './images/git1.png'; // Import the images
import git2 from './images/git2.jpeg';
import git3 from './images/git3.png';

const GitHubGuide = () => {
  const [selectedStack, setSelectedStack] = useState('react');

  const handleStackChange = (stack) => {
    setSelectedStack(stack);
  };

  return (
    <div className="github-guide-container">
      <h2>Deploying Your Project on GitHub Pages</h2>
      <p>
        GitHub Pages is a simple and effective way to host your websites directly from your GitHub repository. 
        Whether you're working with plain HTML/CSS, JavaScript, Python, or React.js, this guide will walk you through the deployment process.
      </p>

      <h3>Deployment Steps</h3>

      <h4>1. Create a GitHub Repository</h4>
      <p>
        Start by creating a new repository on GitHub. You can name it after your project or any other name of your choice.
      </p>
      <img src={git1} alt="Create Repository" className="guide-image" />

      <h4>2. Add Your Project Files</h4>
      <p>
        Upload your project files (HTML, CSS, JavaScript, Python, or React.js) to the repository. You can use the GitHub interface to upload the files, or you can use Git commands.
      </p>
      <div className="code-block">
        <pre>
          <code>git init</code>
        </pre>
        <button className="copy-button" onClick={() => navigator.clipboard.writeText('git init')}>Copy</button>
      </div>
      <div className="code-block">
        <pre>
          <code>git add .</code>
        </pre>
        <button className="copy-button" onClick={() => navigator.clipboard.writeText('git add .')}>Copy</button>
      </div>
      <div className="code-block">
        <pre>
          <code>git commit -m "Initial commit"</code>
        </pre>
        <button className="copy-button" onClick={() => navigator.clipboard.writeText('git commit -m "Initial commit"')}>Copy</button>
      </div>

      <h4>3. Deploy to GitHub Pages</h4>
      <div className="stack-options">
        <button onClick={() => handleStackChange('react')} className={selectedStack === 'react' ? 'active' : ''}>
          React.js
        </button>
        <button onClick={() => handleStackChange('html')} className={selectedStack === 'html' ? 'active' : ''}>
          HTML/CSS
        </button>
        <button onClick={() => handleStackChange('python')} className={selectedStack === 'python' ? 'active' : ''}>
          Python
        </button>
      </div>

      {selectedStack === 'react' && (
        <div>
          <p>
            For React.js projects, you'll need to install the `gh-pages` package and add a `homepage` field in your `package.json`.
          </p>
          <div className="code-block">
            <pre>
              <code>npm install gh-pages --save-dev</code>
            </pre>
            <button className="copy-button" onClick={() => navigator.clipboard.writeText('npm install gh-pages --save-dev')}>Copy</button>
          </div>
          <div className="code-block">
            <pre>
              <code>
                "scripts": {"{"}
                  "predeploy": "npm run build",
                  "deploy": "gh-pages -d build"
                {"}"}
              </code>
            </pre>
            <button className="copy-button" onClick={() => navigator.clipboard.writeText(`"scripts": {"{"}\n  "predeploy": "npm run build",\n  "deploy": "gh-pages -d build"\n{"}"}`)}>Copy</button>
          </div>
        </div>
      )}

      {selectedStack === 'html' && (
        <div>
          <p>
            For HTML/CSS/JavaScript projects, go to the repository settings by clicking on the "Settings" tab as shown below:
          </p>
          <img src={git2} alt="GitHub Settings" className="guide-image" />
          <p>
            Scroll down to the "Pages" section and select the branch you want to deploy from the dropdown menu, as shown here:
          </p>
          <img src={git3} alt="GitHub Pages Settings" className="guide-image" />
          <p>Your site will be published at `https://your-username.github.io/repository-name`.</p>
        </div>
      )}

      {selectedStack === 'python' && (
        <div>
          <p>
            For Python projects, you'll need to build your static site using a framework like Flask and then deploy the output folder using GitHub Pages.
          </p>
        </div>
      )}

      <h4>4. Access Your Deployed Site</h4>
      <p>
        Once the deployment is complete, your site will be accessible at `https://your-username.github.io/repository-name`.
      </p>
    </div>
  );
};

export default GitHubGuide;
