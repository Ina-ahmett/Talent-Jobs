import Footer from "../components/footer";
import Header from "../components/header";

const categories = [
  { icon: <i className="fas fa-laptop-code text-2xl"></i>, label: "Programming & Tech" },
  { icon: <i className="fas fa-paint-brush text-2xl"></i>, label: "Graphics & Design" },
  { icon: <i className="fas fa-bullhorn text-2xl"></i>, label: "Digital Marketing" },
  { icon: <i className="fas fa-language text-2xl"></i>, label: "Writing & Translation" },
  { icon: <i className="fas fa-video text-2xl"></i>, label: "Video & Animation" },
  { icon: <i className="fas fa-robot text-2xl"></i>, label: "AI Services" },
  { icon: <i className="fas fa-music text-2xl"></i>, label: "Music & Audio" },
  { icon: <i className="fas fa-briefcase text-2xl"></i>, label: "Business" },
  { icon: <i className="fas fa-comments text-2xl"></i>, label: "Consulting" },
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
