import React from "react";
import img1 from "../assets/galleryOne.webp";
import img2 from "../assets/galleryTwo.webp";
import img3 from "../assets/galleryThree.webp";
import img4 from "../assets/galleryFour.jpg";
import img5 from "../assets/galleryFive.webp";
import img6 from "../assets/gallerySix.jpg";
import img7 from "../assets/gallerySeven.webp";
import img8 from "../assets/galleryEight.webp";
import img9 from "../assets/galleryNine.webp";
import img10 from "../assets/galleryTen.webp";
import img11 from "../assets/galleryEleven.webp";
import img12 from "../assets/galleryTowElve.webp";
import img13 from "../assets/galleryThirteen.webp";
import img14 from "../assets/galleryFourteen.webp";
import img15 from "../assets/galleryFifteen.webp";
import img16 from "../assets/gallerySixteen.jpg";
import img17 from "../assets/gallerySeventeen.jpg";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17
];

const Gallery = () => {
  return (
    <div className="p-4 mt-20 pb-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Made on Talent Jobs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
