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
  {
    title: "Backend Software Engineer",
    company: "Tech Solutions Ltd.",
    category: "Technology",
    type: "Full time",
    salary: "$70000-$80000",
    location: "Austin, USA",
    time: "40 min ago",
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

const JobCard = ({ job }) => (
  <div className="bg-white p-5 rounded-lg shadow-md border transition-transform duration-200 hover:scale-105">
    <span className="text-green-500 text-xs md:text-sm">{job.time}</span>
    <h3 className="text-lg font-semibold">{job.title}</h3>
    <p className="text-gray-500 text-sm">{job.company}</p>
    <div className="text-gray-600 text-sm mt-2 space-y-1">
      <p><i className="fas fa-briefcase"></i> {job.category}</p>
      <p><i className="fas fa-clock"></i> {job.type}</p>
      <p><i className="fas fa-dollar-sign"></i> {job.salary}</p>
      <p><i className="fas fa-map-marker-alt"></i> {job.location}</p>
    </div>
    <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-3 hover:bg-green-600 w-full">
      Apply
    </button>
  </div>
);

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
