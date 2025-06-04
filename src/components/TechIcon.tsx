
import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

const techIcons: { [key: string]: string } = {
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Redux Toolkit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  'SCSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'JavaScript (ES6+)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'Strapi': 'https://raw.githubusercontent.com/strapi/strapi/main/public/logo.svg',
  'Razorpay': 'https://razorpay.com/assets/razorpay-glyph.svg',
  'Recharts': 'https://recharts.org/statics/logo.svg',
  'MERN Stack': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Oracle E-Business Suite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
  'Cryptocurrency': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitcoin/bitcoin-original.svg',
  'Blockchain': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitcoin/bitcoin-original.svg',
  'Web3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg',
  'MetaMask': 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg',
  'Smart Contracts': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg',
  'DeFi': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg',
  'Ethereum': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg',
  'AI APIs': 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
  'REST API': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  'CRM': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg',
  'Nodemailer': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Context API': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Agile Methodologies': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
  'Web3.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg',
  'Inventory Management': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/database/database-original.svg',
  'Production Control': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/manufacturing/manufacturing-original.svg'
};

export function TechIcon({ name, className = "w-5 h-5" }: TechIconProps) {
  const iconUrl = techIcons[name];
  
  if (!iconUrl) {
    return null;
  }

  return (
    <img 
      src={iconUrl} 
      alt={`${name} logo`} 
      className={`${className} inline-block`}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
  );
}
