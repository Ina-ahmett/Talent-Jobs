import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar";

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get("http://localhost:5000/read/company");
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };
    fetchCompanies();
  }, []);

  const handleDelete = async (companyId) => {
    try {
      await axios.delete(`http://localhost:5000/delete/company/${companyId}`);
      setCompanies(companies.filter((company) => company._id !== companyId));
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  const handleView = (companyId) => {
    // Navigate to company details page or open in a new window
    window.open(`http://localhost:5000/company/${companyId}`, "_blank");
  };

  return (
    <div>
      <Sidebar/>
      <div className="max-w-4xl ml-[20%] mx-auto my-10 pt-5">
          <h1 className="text-2xl font-semibold mb-4">Companies List</h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
              <div key={company._id} className="p-4 bg-white border rounded-lg shadow-lg">
                <div className="flex flex-col items-center">
                  <img
                    src={`http://localhost:5000${company.logo}`}
                    alt="Logo"
                    className="h-20 mb-4"
                  />
                  <h2 className="text-lg font-medium">{company.name}</h2>
                  <h2 className="text-lg font-medium">{company.location}</h2>
                  <p className="text-sm text-gray-500 mb-2">{company.email}</p>
                  <a
                    href={company.website}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {company.website}
                  </a>
                  <div className="mt-4 space-x-4">
                    <button
                      onClick={() => handleView(company._id)}
                      className="text-blue-500 hover:underline"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(company._id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Companies;
