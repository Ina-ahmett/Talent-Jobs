import React, { useRef } from "react";
import { motion } from "framer-motion";

const categories = [
  { icon: "fas fa-laptop-code", title: "Programming & Tech" },
  { icon: "fas fa-paint-brush", title: "Graphics & Design" },
  { icon: "fas fa-bullhorn", title: "Digital Marketing" },
  { icon: "fas fa-pen-nib", title: "Writing & Translation" },
  { icon: "fas fa-video", title: "Video & Animation" },
  { icon: "fas fa-robot", title: "AI Services" },
  { icon: "fas fa-music", title: "Music & Audio" },
  { icon: "fas fa-briefcase", title: "Business" },
  { icon: "fas fa-comments", title: "Consulting" },
];

const Category = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Explore Categories</h2>

      {/* Grid Layout for Responsiveness */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition duration-300"
          >
            <i className={`${category.icon} text-3xl text-gray-700 mb-3`}></i>
            <p className="text-sm font-semibold text-gray-800">{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
