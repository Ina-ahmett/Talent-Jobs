import React from "react";
import { FaBriefcase, FaClock, FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";

const jobs = [
  {
    title: "Forward Security Director",
    company: "Bauch, Schuppe and Schulist Co",
    category: "Hotels & Tourism",
    type: "Full time",
    salary: "$40000-$42000",
    location: "New-York, USA",
    time: "10 min ago",
  },
  {
    title: "Regional Creative Facilitator",
    company: "Wisozk - Becker Co",
    category: "Media",
    type: "Part time",
    salary: "$28000-$32000",
    location: "Los Angeles, USA",
    time: "12 min ago",
  },
  {
    title: "Lead Marketing Analyst",
    company: "Smith & Associates",
    category: "Marketing",
    type: "Remote",
    salary: "$50000-$60000",
    location: "San Francisco, USA",
    time: "20 min ago",
  },
  {
    title: "Senior UI/UX Designer",
    company: "Creative Designs Inc.",
    category: "Design",
    type: "Full time",
    salary: "$45000-$48000",
    location: "Chicago, USA",
    time: "30 min ago",
  },
  {
    title: "Backend Software Engineer",
    company: "Tech Solutions Ltd.",
    category: "Technology",
    type: "Full time",
    salary: "$70000-$80000",
    location: "Austin, USA",
    time: "40 min ago",
  },
];

const JobCard = ({ job }) => {
  return (
    <>
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-col gap-2">
      <span className="text-green-500 text-sm font-medium">{job.time}</span>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-xl">🎨</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-gray-500 text-sm">{job.company}</p>
        </div>
      </div>
      <div className="flex items-center text-gray-400 text-sm gap-6 mt-2">
        <div className="flex items-center gap-1">
          <FaBriefcase />
          <span>{job.category}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaClock />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaDollarSign />
          <span>{job.salary}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt />
          <span>{job.location}</span>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-green-600">
          Apply
        </button>
      </div>
    </div>
    </>
  );
};

const JobList = () => {
  return (
    <div className="max-w-4xl mx-auto mb-10 space-y-4">
          <h1 className="text-3xl font-bold pl-6 pt-5">Job Details</h1>
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default JobList;
