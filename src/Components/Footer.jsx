import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const Footer = () => {
  return (
    <footer className='footer'>
      <p>&copy; 2025 Deetech. All rights reserved.</p>
      <div className='social-icons'>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon='fa-brands fa-facebook' /> 
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-instagram"  />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-tiktok"  />
        </a>
      </div>
    </footer>
  );
};

export default Footer;


// function Footer() {
//   return (
//     <footer className="footer">
//       <p>&copy; 2025 Deetech. All rights reserved.</p>
//       <div className="social-icons">
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//           <img src="/icons/facebook.png" alt="Facebook" />
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//           <img src="/icons/twitter.png" alt="Twitter" />
//         </a>
//         <a href="https://x.com" target="_blank" rel="noopener noreferrer">
//           <img src="/icons/x.png" alt="X" />
//         </a>
//       </div>
//     </footer>
//   );
