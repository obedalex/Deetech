// Core React and Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import StudentSection from "./Components/Studentsection"; // Renamed from Students to match file name
import Laptops from './Components/LaptopCategories'

// Pages
import Home from "./pages/Home"; // Changed from Homepage to match component export
import About from "./pages/About";

// Styles and Data
import "./App.css";
import { laptops } from "./data/stdlaptop"; // Changed import to lowercase to match actual file name

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Updated route components to match imported names */}
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentSection laptop={laptops} />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

// Navbar routes to: Home, Students, Laptops, About

// Home Page
// - Displays laptop categories: Dell, HP, Apple, Touchscreen, Others
// - Each category is clickable and filters laptops
// - Footer includes contact info and social links

// Students Page
// - Displays student-friendly laptops
// - Renders specs and pricing
// - Includes “Request Info” button

// Laptops Page
// - Lists all laptops
// - Each item links to a detail page

// About Page
// - Company mission, contact, and team info
