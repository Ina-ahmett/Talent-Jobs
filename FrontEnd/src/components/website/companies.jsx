import React from "react";

const TopCompanies = ({ companies }) => {
  return (
    <div className="bg-white pt-5 mb-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Top Companies</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ml-[14%]">
        {companies.map((company, index) => (
          <div key={index} className="bg-white p-6 py-10 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all hover:shadow-2xl hover:-translate-y-3">

            <div className="flex gap-6 items-center">
              {/* Logo Section (Left Side) */}
              <img src={`http://localhost:5000${company.logo}`} alt={company.name} className="w-20 h-20 object-contain rounded-full border border-gray-300 p-2" />
              
              {/* Company Info (Right Side) */}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>

                <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                  <i className="fas fa-map-marker-alt text-blue-500"></i> {company.location}
                </p>

                <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                  <i className="fas fa-envelope text-blue-500"></i> {company.email}
                </p>

                <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                  <i className="fas fa-phone text-blue-500"></i> {company.phone}
                </p>

                <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                  {/* <i className="fa-solid fa-signs-post text-blue-500" title="His posts"></i> {posts[company._id] ? posts[company._id].length : 0} */}
                </p>

              </div>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCompanies;
