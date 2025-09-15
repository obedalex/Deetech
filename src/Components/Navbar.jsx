import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="flex justify-center items-center h-16 bg-pink-300 font-serif gap-12">
      <Link to="/" className="text-blue-500 font-bold">
        Deetech Computers
      </Link>
      <ul className="flex gap-6 list-none">
        <li><Link to="/budget">Student/Budget Friendly Laptops</Link></li>
        <li><Link to="/laptops">Laptops</Link></li>
        <li><Link to="/contact">Contacts</Link></li>
      </ul>
    </nav>
  );
}



export default Navbar;
