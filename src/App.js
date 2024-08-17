import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import GitHubGuide from './components/GitHubGuide';
import VercelGuide from './components/VercelGuide';
import NetlifyGuide from './components/NetlifyGuide';
import AWSGuide from './components/AWSGuide';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  return (
    <div className={`app ${theme}`}>
      <Router>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="/github-deployment" element={<GitHubGuide />} />
            <Route path="/vercel-deployment" element={<VercelGuide />} />
            <Route path="/netlify-deployment" element={<NetlifyGuide />} />
            <Route path="/aws-deployment" element={<AWSGuide />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
