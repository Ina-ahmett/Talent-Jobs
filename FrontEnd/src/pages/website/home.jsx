import heroSectionImg from "../../assets/heroSection.jpg"
import CategoryProps from "../../components/website/Category";
import TopCompanies from "../../components/website/companies";
import Footer from "../../components/website/footer";
import Header from "../../components/website/header";
import JobItem from "../../components/website/JobItem"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Home = () => {
    const [companiesData, setCompaniesData] = useState([]);

    // fetch reading all companies data
    const fetchCompanies = async () => {
        try {
            const response = await fetch("http://localhost:5000/read/company"); // http://, ma ahan https://
            const data = await response.json();
            console.log("Fetched Companies:", data); // Console.log si aad u hubiso
            setCompaniesData(data);
        } catch (error) {
            console.error("Error fetching companies data:", error);
        }
    };

    // fetch reading singlge companies data
    const fetchSingleCompany = async () => {
        try {
            const response = await fetch(`http://localhost:5000/readSingle/company/${id}`);
            const data = await response.json();
            console.log("Fetched Single Company:", data);
            setSingleCompany(data);
        } catch (error) {
            console.error("Error fetching single company data:", error);
        }
    }

    useEffect(() => {
        fetchCompanies();
        fetchSingleCompany();
    }, []);
    

    const categories = [
        { title: "Graphics & Design", positions: 357, icon: "fas fa-paint-brush" },
        { title: "Code & Programming", positions: 312, icon: "fas fa-code" },
        { title: "Digital Marketing", positions: 297, icon: "fas fa-bullhorn" },
        { title: "Video & Animation", positions: 247, icon: "fas fa-video" },
        { title: "Music & Audio", positions: 204, icon: "fas fa-music" },
        { title: "Account & Finance", positions: 167, icon: "fas fa-chart-line" },
        { title: "Health & Care", positions: 125, icon: "fas fa-briefcase-medical" },
        { title: "Data & Science", positions: 57, icon: "fas fa-database", featured: true },
    ];

    const jobs = [
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Upwork_Logo.svg",
          title: "Senior UX Designer",
          type: "Contract Base",
          location: "Australia",
          salary: "$30K-$35K",
          daysRemaining: 4,
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/Apple_logo_black.svg",
          title: "Software Engineer",
          type: "Full Time",
          location: "China",
          salary: "$50K-$60K",
          daysRemaining: 4,
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
          title: "Junior Graphic Designer",
          type: "Full Time",
          location: "Canada",
          salary: "$50K-$70K",
          daysRemaining: 4,
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Udemy_logo.svg",
          title: "Product Designer",
          type: "Full Time",
          location: "United States",
          salary: "$35K-$40K",
          daysRemaining: 4,
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
          title: "Marketing Officer",
          type: "Internship",
          location: "Germany",
          salary: "$50K-$90K",
          daysRemaining: 4,
        },
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Google_2015_logo.svg",
          title: "Interaction Designer",
          type: "Full Time",
          location: "France",
          salary: "$5K-$10K",
          daysRemaining: 4,
        },
      ];

    return (
        <>
        <Header/>
        <div>
            <div className="bg-white flex flex-col md:flex-row items-center justify-evenly px-6 md:px-16 py-10 min-h-screen">
                {/* Left Side */}
                <div className="max-w-lg text-center md:text-left">
                    <h1 className="text-5xl md:text-4xl font-bold text-gray-800 leading-tight">
                        Don’t just find a job — find your passion with <span className="text-blue-500">Talent Jobs!</span>
                    </h1>
                    <p className="text-gray-600 mt-6 text-lg md:text-xl">
                        Your career should be more than just work; it should be something you love. Start your journey today and discover opportunities that match your skills and dreams! 🚀
                    </p>
                    <button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-lg text-xl font-semibold shadow-md hover:bg-blue-600 transition">
                        Discover our jobs now!
                    </button>
                </div>

                {/* Right Side (Image with Zoom Animation) */}
                <div className="mt-10 md:mt-0 flex justify-center">
                    <img 
                        src={heroSectionImg} 
                        alt="Hero Section" 
                        className="w-[600px] h-[450px] md:w-[700px] md:h-[500px] object-contain rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />
                </div>
            </div>



            {/* CategoryProps page */}
            <CategoryProps categories={categories} />

            {/* JobItem show */}
            <div className="max-w-5xl mx-auto py-10 px-5">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Featured Jobs</h2>
                <div className="flex flex-col gap-6">
                {jobs.map((job, index) => (
                    <JobItem key={index} {...job} />
                ))}
                </div>
            </div>

            {/* companiesData View */}
            <TopCompanies companies={companiesData}/>

            {/* box yada hooow ee employee and company */}
            <div className="flex flex-col md:flex-row gap-6 p-6 max-w-6xl mx-auto mb-20">
                {/* Become a Company */}
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
                >
                    <h2 className="text-2xl font-semibold mb-4">Become a Company</h2>
                    <p className="text-gray-600 mb-6">
                    Unlock top-tier talent and elevate your business by hiring skilled professionals. Register now to access the best candidates for your company.
                    </p>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all">
                    Register Now →
                    </button>
                </motion.div>

                {/* Become a Talent */}
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 bg-blue-600 text-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
                >
                    <h2 className="text-2xl font-semibold mb-4">Become a Employers</h2>
                    <p className="mb-6">
                    Turn your skills into opportunities! Join our platform and connect with top employers looking for professionals like you.
                    </p>
                    <button className="bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-200 transition-all">
                    Register Now →
                    </button>
                </motion.div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Home;
