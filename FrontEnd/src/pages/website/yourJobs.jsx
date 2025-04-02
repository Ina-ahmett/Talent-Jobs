import Header from "../../components/website/header";
import Footer from "../../components/website/footer";
import { useState } from "react";

const YourJobs = () => {
  const [statusFilter, setStatusFilter] = useState("All");

  const appliedJobs = [
    { id: 1, title: "React Developer", status: "Pending" },
    { id: 2, title: "UI/UX Designer", status: "Accepted" },
    { id: 3, title: "Backend Engineer", status: "Rejected" },
    { id: 4, title: "Product Manager", status: "Pending" },
  ];

  const filteredJobs =
    statusFilter === "All"
      ? appliedJobs
      : appliedJobs.filter((job) => job.status === statusFilter);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />

      {/* Header Description Section */}
      <div className="bg-white py-20 text-center shadow-sm">
        <h1 className="text-4xl font-bold text-blue-800 mb-4 animate-fade-in">
          Your Jobs
        </h1>
        <p className="text-base text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
          This is your personal job space where you can manage all the jobs you've favorited and the ones you've applied for. Revisit opportunities, track your application progress, and stay in control of your career journey.
        </p>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Favorite Jobs Section */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <i className="fas fa-heart text-pink-600 text-xl"></i>
            <h2 className="text-xl font-bold text-gray-900">Your Favorite Jobs</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((job) => (
              <div
                key={job}
                className="bg-white rounded-xl shadow-md p-6 relative hover:shadow-lg transition-all duration-300"
              >
                <i className="fas fa-heart text-pink-500 absolute top-4 right-4 cursor-pointer"></i>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Frontend Developer
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">Apple – Remote – Full-time</p>
                  <p className="text-sm text-gray-600 mb-4">Develop and maintain scalable applications.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">React.js</span>
                    <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">Node.js</span>
                    <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">MongoDB</span>
                    <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">3+ years experience</span>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Applied Jobs Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <i className="fas fa-briefcase text-green-600 text-xl"></i>
              <h2 className="text-xl font-bold text-gray-900">Your Applied Jobs</h2>
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-md p-6 relative hover:shadow-lg transition-all duration-300"
              >
                <span
                  className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-semibold ${
                    job.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : job.status === "Accepted"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {job.status}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600">Job description preview...</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default YourJobs;
