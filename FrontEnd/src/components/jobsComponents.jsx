// JobCard.js (Component for each job)
import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col space-y-4 hover:shadow-xl transition-all">
      <div className="flex items-center space-x-4">
        <img src={job.logo} alt={job.title} className="w-12 h-12 rounded-full" />
        <div>
          <h2 className="text-xl font-semibold">{job.title}</h2>
          <p className="text-gray-500">{job.company} - {job.location}</p>
        </div>
      </div>
      <p className="text-gray-600">{job.description}</p>
      <div className="flex flex-wrap gap-2">
        {job.requirements.map((req, index) => (
          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
            {req}
          </span>
        ))}
      </div>
      <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Apply Now
      </button>
    </div>
  );
};
 export default JobCard