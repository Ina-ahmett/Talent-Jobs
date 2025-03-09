import React from "react";
import { FaLaptopCode, FaPaintBrush, FaBullhorn, FaLanguage, FaVideo, FaRobot, FaMusic, FaBriefcase, FaComments } from "react-icons/fa";

const categories = [
  { icon: <FaLaptopCode size={24} />, label: "Programming & Tech" },
  { icon: <FaPaintBrush size={24} />, label: "Graphics & Design" },
  { icon: <FaBullhorn size={24} />, label: "Digital Marketing" },
  { icon: <FaLanguage size={24} />, label: "Writing & Translation" },
  { icon: <FaVideo size={24} />, label: "Video & Animation" },
  { icon: <FaRobot size={24} />, label: "AI Services" },
  { icon: <FaMusic size={24} />, label: "Music & Audio" },
  { icon: <FaBriefcase size={24} />, label: "Business" },
  { icon: <FaComments size={24} />, label: "Consulting" },
];

const CategoriesSection = () => {
  return (
   <>
    <h2 className="text-2xl font-bold text-gray-800 mb-6 pl-10 pt-10">Popular jobs</h2>
    <div className="flex gap-4 overflow-x-auto p-4">
      {categories.map((category, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-40 h-32 text-center">
          {category.icon}
          <span className="mt-2 text-sm font-medium">{category.label}</span>
        </div>
      ))}
    </div>
    </>
  );
};

export default CategoriesSection;
