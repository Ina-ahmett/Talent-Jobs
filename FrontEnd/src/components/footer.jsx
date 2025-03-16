import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import LogoImage from "../assets/Talent-Jobs.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 md:px-20">
      {/* Subscribe Section */}
      <div className="mb-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4  px-6">
          <input type="email"  placeholder="Email address"  className="md:w-1/2 sm:ml-[-25px] p-3 w-80 rounded-md bg-gray-700 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          <button className="bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600 transition"> Subscribe </button>
        </div>
        {/* Statistics Section */}
        <div className="flex justify-center space-x-8 text-white py-6 sm:ml-[620px] sm:mt-[-75px] pb-5">
          <div className="text-center">
            <h3 className="text-2xl font-bold">175,324</h3>
            <p className="text-gray-400">Live Jobs</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">97,354</h3>
            <p className="text-gray-400">Companies</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">3,847,154</h3>
            <p className="text-gray-400">Candidates</p>
          </div>
        </div>
      </div>
      

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Call Now */}
        <div>
          <motion.img 
            src={LogoImage}
            alt="MyJob Logo"
            className="w-28 h-auto mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <p className="text-lg font-semibold">Call now: <span className="text-blue-400">(252) 617-047867</span></p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Candidates */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Candidate</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Browse Jobs</a></li>
            <li><a href="#">Browse Employers</a></li>
            <li><a href="#">Candidate Dashboard</a></li>
            <li><a href="#">Saved Jobs</a></li>
          </ul>
        </div>

        {/* Employers */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Employers</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Post a Job</a></li>
            <li><a href="#">Browse Candidates</a></li>
            <li><a href="#">Employers Dashboard</a></li>
            <li><a href="#">Applications</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center">
        <div className="flex justify-center space-x-5 mb-4">
          <FaFacebook className="text-xl cursor-pointer hover:text-blue-500" />
          <FaYoutube className="text-xl cursor-pointer hover:text-red-500" />
          <FaInstagram className="text-xl cursor-pointer hover:text-pink-500" />
          <FaTwitter className="text-xl cursor-pointer hover:text-blue-400" />
        </div>
        <p className="text-gray-500">&copy; 2024 MyJob - Job Portal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;