import React from "react";

const TopCompanies = ({ companies }) => {
  return (
    <div className="bg-white ml[20%] pt-5">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Top Companies</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all hover:shadow-2xl hover:-translate-y-3"
          >
            {/* Logo Section */}
            <div className="bg-gray-100 p-4 rounded-full flex items-center justify-center">
              <img src={`http://localhost:5000${company.logo}`}  alt={company.name} className="w-14 h-14 object-contain" />
            </div>

            {/* Company Info */}
            <h3 className="text-xl font-semibold text-gray-900 mt-4">{company.name}</h3>
            <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
              <i className="fas fa-map-marker-alt text-blue-500"></i> {company.location}
            </p>

            {/* Button */}
            <button className="mt-5 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all">
              View
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TopCompanies;
