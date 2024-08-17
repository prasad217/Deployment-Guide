import React from 'react';
import './AWSGuide.css'; // Import your custom CSS for styling
import aws1 from './images/aws1.png'; // Update with correct paths
import aws2 from './images/aws2.png';
import aws3 from './images/aws3.png';
import aws4 from './images/aws4.png';
import aws5 from './images/aws5.png';
import aws6 from './images/aws6.png';
import aws7 from './images/aws7.png';

const AWSGuide = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="guide-container">
      <h2>Deploying on AWS EC2 Instance</h2>

      <h3>Step 1: Transfer Your Local Project to the EC2 Instance</h3>
      <div className="side-by-side">
        <div className="platform-section">
          <h4>Mac:</h4>
          <p>1. Navigate to your local project directory.</p>
          <p>2. Use the following command to copy your project to the EC2 instance:</p>
          <div className="code-block">
            <pre>
              scp -r /path-to-your-project ec2-user@your-ec2-public-ip:/home/ec2-user/
            </pre>
            <button onClick={() => copyToClipboard('scp -r /path-to-your-project ec2-user@your-ec2-public-ip:/home/ec2-user/')}>Copy</button>
          </div>
        </div>

        <div className="platform-section">
          <h4>Windows:</h4>
          <p>1. Navigate to your local project directory.</p>
          <p>2. Use the following command in Git Bash or transfer using WinSCP:</p>
          <div className="code-block">
            <pre>
              scp -r /path-to-your-project ec2-user@your-ec2-public-ip:/home/ec2-user/
            </pre>
            <button onClick={() => copyToClipboard('scp -r /path-to-your-project ec2-user@your-ec2-public-ip:/home/ec2-user/')}>Copy</button>
          </div>
        </div>
      </div>

      <h3>Step 2: Launch an EC2 Instance</h3>
      <p>1. Log in to your AWS Management Console.</p>
      <p>2. In the top search bar, type "EC2" and select "EC2" from the dropdown (as shown below).</p>
      <img src={aws1} alt="EC2 Search" className="guide-image" />

      <p>3. On the EC2 dashboard, click on "Launch Instance."</p>
      <img src={aws2} alt="EC2 Dashboard" className="guide-image" />

      <p>4. Name your instance and choose an appropriate AMI (Amazon Machine Image), such as "Amazon Linux 2 AMI."</p>
      <img src={aws3} alt="Launch Instance" className="guide-image" />

      <p>5. Continue with the configuration, such as setting the instance type, security groups, and key pairs.</p>
      <img src={aws4} alt="Configure Instance" className="guide-image" />
      <img src={aws5} alt="Configure Storage" className="guide-image" />

      <p>6. Review your instance details and click "Launch Instance."</p>
      <img src={aws6} alt="Launch Instance" className="guide-image" />

      <p>7. Ensure you have selected a key pair for SSH access to the instance.</p>
      <img src={aws7} alt="Key Pair" className="guide-image" />

      <h3>Step 3: Connect to Your Instance</h3>
      <div className="side-by-side">
        <div className="platform-section">
          <h4>Mac:</h4>
          <p>1. Open Terminal.</p>
          <p>2. Use the following SSH command to connect to your instance:</p>
          <div className="code-block">
            <pre>
              ssh -i "your-key.pem" ec2-user@your-ec2-public-ip
            </pre>
            <button onClick={() => copyToClipboard('ssh -i "your-key.pem" ec2-user@your-ec2-public-ip')}>Copy</button>
          </div>
        </div>

        <div className="platform-section">
          <h4>Windows:</h4>
          <p>1. Use Git Bash or an SSH client like PuTTY.</p>
          <p>2. Connect using a similar SSH command in Git Bash or through PuTTY with your `.ppk` key file:</p>
          <div className="code-block">
            <pre>
              ssh -i "your-key.pem" ec2-user@your-ec2-public-ip
            </pre>
            <button onClick={() => copyToClipboard('ssh -i "your-key.pem" ec2-user@your-ec2-public-ip')}>Copy</button>
          </div>
        </div>
      </div>

      <h3>Step 4: Deploy Your Backend</h3>
      <div className="side-by-side">
        <div className="platform-section">
          <h4>Mac:</h4>
          <p>1. Navigate to your backend directory on the EC2 instance.</p>
          <p>2. Install dependencies and start the server:</p>
          <div className="code-block">
            <pre>
              cd /path-to-your-backend<br />
              npm install<br />
              pm2 start index.js
            </pre>
            <button onClick={() => copyToClipboard('cd /path-to-your-backend\nnpm install\npm2 start index.js')}>Copy</button>
          </div>
        </div>

        <div className="platform-section">
          <h4>Windows:</h4>
          <p>1. Navigate to your backend directory on the EC2 instance.</p>
          <p>2. Install dependencies and start the server:</p>
          <div className="code-block">
            <pre>
              cd /path-to-your-backend<br />
              npm install<br />
              pm2 start index.js
            </pre>
            <button onClick={() => copyToClipboard('cd /path-to-your-backend\nnpm install\npm2 start index.js')}>Copy</button>
          </div>
        </div>
      </div>

      <h3>Step 5: Access Your Application</h3>
      <p>Access your frontend at <code>http://your-ec2-public-ip</code>.</p>
      <p>Access your backend API routes at <code>http://your-ec2-public-ip:port</code>.</p>
    </div>
  );
};

export default AWSGuide;
