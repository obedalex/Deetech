import React from 'react'
// import '../Components/Navbar.css'


function Navbar() {
  return (
  <nav className="flex justify-between items-center px-6 py-4 bg-gray-100">
  <a className="text-xl font-bold text-blue-600">Deetech Computers</a>
  <ul className="flex gap-6 text-sm text-gray-700">
    <li><a href="#">Student/Budget Friendly laptops</a></li>
    <li><a href="#">Laptops</a></li>
    <li><a href="#">Contact Us</a></li>
  </ul>
</nav>
  )
}

export default Navbar;
