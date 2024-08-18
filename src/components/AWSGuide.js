import React, { useState } from 'react';
import './AWSGuide.css';
import aws1 from './images/aws1.png'; 
import aws2 from './images/aws2.png';
import aws3 from './images/aws3.png';
import aws4 from './images/aws4.png';
import aws5 from './images/aws5.png';
import aws6 from './images/aws6.png';
import aws7 from './images/aws7.png';
import warningIcon from './images/warning.png'; 
import budgetVideo from './videos/budget.mov';

const AWSGuide = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Code copied to clipboard!');
  };

  const handleWarningClick = () => {
    setShowWarning(true);
  };

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="guide-container">
      <h2>Deploying on AWS EC2 Instance</h2>

      <div className="warning-notice" onClick={handleWarningClick}>
        <img src={warningIcon} alt="Warning Icon" className="warning-icon" />
        <span>Warning: If you are deploying the website on the free tier, please read these instructions.</span>
      </div>

      {showWarning && (
        <div className="warning-box">
          <h4>Important Notice</h4>
          <p>Please ensure the following when deploying on the AWS free tier:</p>
          <ul>
            <li>Make sure the region for deployment is set to the default.</li>
            <li>Select instance types like <code>t3.micro</code>, as some tools are only eligible for the free tier.</li>
            <li>Create a zero budget to monitor costs and avoid unexpected charges.</li>
          </ul>
          <p>
            <a href="#!" onClick={handleVideoClick}>
              See a video on how to create a budget.
            </a>
          </p>
          <button onClick={() => setShowWarning(false)}>Close</button>
        </div>
      )}

      {showVideo && (
        <div className="video-popup">
          <div className="video-popup-content">
            <button className="close-video" onClick={closeVideo}>
              &times;
            </button>
            <video width="400" controls>
              <source src={budgetVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <h3>Step 1: Launch an EC2 Instance</h3>
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

      <p>6. Ensure you have selected a key pair for SSH access to the instance.</p>
      <img src={aws6} alt="Launch Instance" className="guide-image" />
     
      <p>7. Update the storage if required or else keep it default and Review your instance details and click "Launch Instance."</p>
      <img src={aws7} alt="Key Pair" className="guide-image" />

      <h3>Step 2: Connect to Your Instance</h3>
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

      <h3>Step 3: Transfer Your Local Project to the EC2 Instance</h3>
<div className="side-by-side">
  <div className="platform-section">
    <h4>Mac:</h4>
    <p>1. Open Terminal.</p>
    <p>2. Use the following `rsync` command to transfer your local project directory to the EC2 instance:</p>
    <div className="code-block">
      <pre>
        rsync -avz -e "ssh -i your-key.pem" /path-to-your-local-project/ ec2-user@your-ec2-public-ip:/home/ec2-user/your-project-directory/
      </pre>
      <button onClick={() => copyToClipboard('rsync -avz -e "ssh -i your-key.pem" /path-to-your-local-project/ ec2-user@your-ec2-public-ip:/home/ec2-user/your-project-directory/')}>Copy</button>
    </div>
  </div>

  <div className="platform-section">
    <h4>Windows:</h4>
    <p>1. Use Git Bash or an SSH client like PuTTY.</p>
    <p>2. Use the following `rsync` command to transfer your local project directory to the EC2 instance:</p>
    <div className="code-block">
      <pre>
        rsync -avz -e "ssh -i your-key.pem" /path-to-your-local-project/ ec2-user@your-ec2-public-ip:/home/ec2-user/your-project-directory/
      </pre>
      <button onClick={() => copyToClipboard('rsync -avz -e "ssh -i your-key.pem" /path-to-your-local-project/ ec2-user@your-ec2-public-ip:/home/ec2-user/your-project-directory/')}>Copy</button>
    </div>
  </div>
</div>


      <h3>Step 4: Deploy Your Frontend</h3>
      <div className="side-by-side">
        <div className="platform-section">
          <h4>Mac:</h4>
          <p>1. Navigate to your frontend directory on the EC2 instance.</p>
          <p>2. Build your project:</p>
          <div className="code-block">
            <pre>
              cd /home/ec2-user/your-project-directory/frontend<br />
              npm run build
            </pre>
            <button onClick={() => copyToClipboard('cd /home/ec2-user/your-project-directory/frontend\nnpm run build')}>Copy</button>
          </div>
          <p>3. Serve your frontend files using Nginx or Apache (setup required).</p>
        </div>

        <div className="platform-section">
          <h4>Windows:</h4>
          <p>1. Navigate to your frontend directory on the EC2 instance.</p>
          <p>2. Build your project:</p>
          <div className="code-block">
            <pre>
              cd /home/ec2-user/your-project-directory/frontend<br />
              npm run build
            </pre>
            <button onClick={() => copyToClipboard('cd /home/ec2-user/your-project-directory/frontend\nnpm run build')}>Copy</button>
          </div>
          <p>3. Serve your frontend files using Nginx or Apache (setup required).</p>
        </div>
      </div>

      <h3>Step 5: Deploy Your Backend</h3>
      <div className="side-by-side">
        <div className="platform-section">
          <h4>Mac:</h4>
          <p>1. Navigate to your backend directory on the EC2 instance.</p>
          <p>2. Install dependencies and start the server:</p>
          <div className="code-block">
            <pre>
              cd /home/ec2-user/your-project-directory/backend<br />
              npm install<br />
              pm2 start index.js
            </pre>
            <button onClick={() => copyToClipboard('cd /home/ec2-user/your-project-directory/backend\nnpm install\npm2 start index.js')}>Copy</button>
          </div>
        </div>

        <div className="platform-section">
          <h4>Windows:</h4>
          <p>1. Navigate to your backend directory on the EC2 instance.</p>
          <p>2. Install dependencies and start the server:</p>
          <div className="code-block">
            <pre>
              cd /home/ec2-user/your-project-directory/backend<br />
              npm install<br />
              pm2 start index.js
            </pre>
            <button onClick={() => copyToClipboard('cd /home/ec2-user/your-project-directory/backend\nnpm install\npm2 start index.js')}>Copy</button>
          </div>
        </div>
      </div>

      <h3>Step 6: Deploy Your Database</h3>
<div className="db-tabs">
  <div className="tab">
    <input type="radio" id="mysql-tab" name="db-tab" defaultChecked />
    <label htmlFor="mysql-tab">MySQL</label>
    <div className="content">
      <div className="code-block">
        <pre>
          sudo apt install mysql-server<br />
          sudo systemctl start mysql<br />
          sudo systemctl enable mysql<br />
          sudo mysql -u root
        </pre>
        <button onClick={() => copyToClipboard('sudo apt install mysql-server\nsudo systemctl start mysql\nsudo systemctl enable mysql\nsudo mysql -u root')}>Copy</button>
      </div>
      <div className="code-block">
        <pre>
          CREATE DATABASE my_app;<br />
          CREATE USER 'my_app_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'MyNewPass1!';<br />
          GRANT ALL PRIVILEGES ON my_app.* TO 'my_app_user'@'localhost';
        </pre>
        <button onClick={() => copyToClipboard("CREATE DATABASE my_app;\nCREATE USER 'my_app_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'MyNewPass1!';\nGRANT ALL PRIVILEGES ON my_app.* TO 'my_app_user'@'localhost';")}>Copy</button>
      </div>
    </div>
  </div>

  <div className="tab">
    <input type="radio" id="postgres-tab" name="db-tab" />
    <label htmlFor="postgres-tab">Postgres</label>
    <div className="content">
      <div className="code-block">
        <pre>
          sudo apt install postgresql postgresql-contrib<br />
          sudo systemctl start postgresql<br />
          sudo systemctl enable postgresql<br />
          sudo -i -u postgres
        </pre>
        <button onClick={() => copyToClipboard('sudo apt install postgresql postgresql-contrib\nsudo systemctl start postgresql\nsudo systemctl enable postgresql\nsudo -i -u postgres')}>Copy</button>
      </div>
      <div className="code-block">
        <pre>
          CREATE DATABASE my_app;<br />
          CREATE USER my_app_user WITH ENCRYPTED PASSWORD 'MyNewPass1!';<br />
          GRANT ALL PRIVILEGES ON DATABASE my_app TO my_app_user;
        </pre>
        <button onClick={() => copyToClipboard("CREATE DATABASE my_app;\nCREATE USER my_app_user WITH ENCRYPTED PASSWORD 'MyNewPass1!';\nGRANT ALL PRIVILEGES ON DATABASE my_app TO my_app_user;")}>Copy</button>
      </div>
    </div>
  </div>
</div>


      <h3>Step 7: Access Your Application</h3>
      <p>Access your frontend at <code>http://your-ec2-public-ip</code>.</p>
      <p>Access your backend API routes at <code>http://your-ec2-public-ip:port</code>.</p>

      <h3>Step 8: Monitor and Manage Your Application</h3>
      <p>Use AWS CloudWatch, PM2 monitoring, or other tools to monitor the health and performance of your application.</p>
    </div>
  );
};

export default AWSGuide;
