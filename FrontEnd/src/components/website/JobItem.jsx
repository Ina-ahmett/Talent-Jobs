import { FaMapMarkerAlt } from "react-icons/fa";

const JobItem = ({ logo, title, location, salary, daysRemaining }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-blue-500 w-full">
      {/* Left Side (Logo + Job Info) */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <img src={logo} alt={title} className="w-12 h-12 object-contain" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-blue-500" /> {location}
            </span>
            <span>💰 {salary}</span>
            <span>⏳ {daysRemaining} Days Remaining</span>
          </div>
        </div>
      </div>

      {/* Right Side (Bookmark & Apply Button) */}
      <div className="flex items-center gap-3 mt-4 md:mt-0">
        <button className="text-gray-500 hover:text-blue-500">
          <i className="far fa-bookmark text-lg"></i>
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Apply Now →
        </button>
      </div>
    </div>
  );
};

export default JobItem;
    