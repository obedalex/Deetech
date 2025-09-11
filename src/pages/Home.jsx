import React from "react";
import HeroSection from "../Components/HeroSection";
import LaptopCategories from "../Components/LaptopCategories";
import StudentSection from "../Components/Studentsection";
import CallToAction from 
import Footer from "../Components/Footer";



 const Home = () => {
  return (
    <main>
      <HeroSection />
      <LaptopCategories />
      <StudentsSection /> {/* Optional preview */}
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Home;
