import React, { useRef } from "react";
import { motion } from "framer-motion";
import imageWebsite from "../assets/website.png"
import imagelogo from "../assets/logo.png"
import imageSeo from "../assets/seo.png"
import imageArchitecture from "../assets/Architecture.png"
import imageVoice from "../assets/Voice.png"
import imageSocialMedia from "../assets/SocialMedia.png"
import imageEditingVedio from "../assets/Edit.png"
import imageSoftware from "../assets/Software.png"
import ImageData from "../assets/data.png"
import imageEcommerce from "../assets/E-commerce.png"
import imagePhoto from "../assets/photo.png"

const services = [
  {
    title: "Website Development",
    img: imageWebsite,
    bgColor: "bg-green-700",
  },
  {
    title: "Logo Design",
    img: imagelogo,
    bgColor: "bg-orange-500",
  },
  {
    title: "Bulding plans",
    img: imageSeo,
    bgColor: "bg-green-900",
  },
  {
    title: "Architecture & Interior Design",
    img: imageArchitecture,
    bgColor: "bg-purple-700",
  },
  {
    title: "Voice Over",
    img: imageVoice,
    bgColor: "bg-yellow-600",
  },
  {
    title: "Social Media Marketing",
    img:  imageSocialMedia,
    bgColor: "bg-green-600",
  },
  {
    title: "Editing Vedios",
    img:  imageEditingVedio,
    bgColor: "bg-[#C66783]",
  },
  {
    title: "Software Development",
    img:  imageSoftware,
    bgColor: "bg-[#40591F]",
  },
  {
    title: "Data Science",
    img:  ImageData,
    bgColor: "bg-[#8F2900]",
  },
  {
    title: "E-commerce Marketing",
    img:  imageEcommerce,
    bgColor: "bg-[#1F8447]",
  },
  {
    title: "Product Photography",
    img:  imagePhoto,
    bgColor: "bg-[#687200]",
  },
];

const Services = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-full bg-gray-100 py-10 px-4 mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Popular Services</h2>

      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-800"
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      <div
        ref={containerRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide px-10"
        style={{ scrollBehavior: "smooth" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`rounded-xl shadow-lg p-10 w-72 h-80 flex flex-col justify-between ${service.bgColor} text-white hover:scale-105 transition transform duration-300`}
          >
            <h3 className="text-lg font-bold">{service.title}</h3>
            <img src={service.img} alt={service.title} className="w-72 h-40 object-cover rounded-lg" />
          </motion.div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-800"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Services;
