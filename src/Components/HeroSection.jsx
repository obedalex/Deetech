import React from 'react'
import { articles } from '../data/articles';
import { Link } from 'react-router-dom';

 const HeroSection = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-8px">Explore Our Laptop Categories</h2>
         <div className='flex justify-center bg-amber-300'>
      <section className="w-full max-w-screen-xl h-[680px] px-8 py-16 mx-auto flex items-center justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(({ title, image, link }) => (
          <Link to={link} key={title} className="group block rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">{title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
    </div>
    </>
 

  )
}

export default HeroSection;

{/* <div class="w-full max-w-screen-xl h-[680px] px-8 py-16 mx-auto flex items-center justify-center bg-gray-100">
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-4">Deetech Computers</h1>
    <p class="text-lg text-gray-700 mb-6">Student/Budget Friendly Laptops</p>
    <a href="#categories" class="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
      Explore Categories
    </a>
  </div>
</div> */}


{/* <section class="h-screen flex items-center justify-center px-6 py-12 bg-gray-100">
  <div class="max-w-4xl w-full text-center transform translate-y-[-40px]">
    <h1 class="text-5xl font-bold mb-4 text-gray-900">Deetech Computers</h1>
    <p class="text-xl text-gray-700 mb-6">Student/Budget Friendly Laptops</p>
    <a href="#categories" class="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
      Explore Categories
    </a>
  </div>
</section> */}

