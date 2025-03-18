import { Link } from "react-router-dom";
import logo from "../assets/Talent-Jobs.png";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md p-5 fixed top-0 left-0">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-6">
        <img src={logo} alt="Talent Jobs Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold text-gray-800">Talent Jobs</h1>
      </div>

      <ul className="mt-8">
        <li className="p-3 my-2 rounded-lg transition-all text-gray-600 hover:bg-gray-100">
          <Link to="/dashboard" className="flex items-center gap-3">
            <i className="fas fa-th-large"></i> Dashboard
          </Link>
        </li>
        <li className="p-3 my-2 rounded-lg transition-all text-gray-600 hover:bg-gray-100">
          <Link to="/companies" className="flex items-center gap-3">
            <i className="fas fa-building"></i> Companies
          </Link>
        </li>
        <li className="p-3 my-2 rounded-lg transition-all text-gray-600 hover:bg-gray-100">
          <Link to="/jobs" className="flex items-center gap-3">
            <i className="fas fa-briefcase"></i> Jobs
          </Link>
        </li>
        <li className="p-3 my-2 rounded-lg transition-all text-gray-600 hover:bg-gray-100">
          <Link to="/settings" className="flex items-center gap-3">
            <i className="fas fa-cog"></i> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;