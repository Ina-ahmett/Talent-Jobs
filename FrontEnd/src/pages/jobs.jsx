import jobSearchImage from "../assets/jobheader.jpg"
import TopCompanies from "../components/companies";
import Footer from "../components/footer";
import Header from "../components/header";
import JobCard from "../components/jobsComponents";
const Jobs = () => {
    // jobs maping madama aan isticmaleynin API
    const jobs = [
        {
          title: "Software Engineer",
          company: "Apple",
          location: "China",
          description: "Develop and maintain scalable applications.",
          requirements: ["React.js", "Node.js", "MongoDB", "3+ years experience"],
          logo: "https://logo.clearbit.com/apple.com",
        },
        {
          title: "Product Designer",
          company: "Google",
          location: "USA",
          description: "Create and enhance UI/UX for digital products.",
          requirements: ["Figma", "Sketch", "User Research", "2+ years experience"],
          logo: "https://logo.clearbit.com/google.com",
        },
        {
            title: "Software Engineer",
            company: "Apple",
            location: "China",
            description: "Develop and maintain scalable applications.",
            requirements: ["React.js", "Node.js", "MongoDB", "3+ years experience"],
            logo: "https://logo.clearbit.com/apple.com",
        },
        {
            title: "Product Designer",
            company: "Google",
            location: "USA",
            description: "Create and enhance UI/UX for digital products.",
            requirements: ["Figma", "Sketch", "User Research", "2+ years experience"],
            logo: "https://logo.clearbit.com/google.com",
        },
        {
            title: "Software Engineer",
            company: "Apple",
            location: "China",
            description: "Develop and maintain scalable applications.",
            requirements: ["React.js", "Node.js", "MongoDB", "3+ years experience"],
            logo: "https://logo.clearbit.com/apple.com",
        },
        {
            title: "Product Designer",
            company: "Google",
            location: "USA",
            description: "Create and enhance UI/UX for digital products.",
            requirements: ["Figma", "Sketch", "User Research", "2+ years experience"],
            logo: "https://logo.clearbit.com/google.com",
        },
    ];

    // companies View Data as a maping
    const companiesData = [
        { name: "Dribbble", logo: "/images/dribbble.png", location: "United States" },
        { name: "Dribbble", logo: "/images/dribbble.png", location: "United States" },
        { name: "Dribbble", logo: "/images/dribbble.png", location: "United States" },
        { name: "Upwork", logo: "/images/upwork.png", location: "United States" },
        { name: "Upwork", logo: "/images/upwork.png", location: "United States" },
        { name: "Upwork", logo: "/images/upwork.png", location: "United States" },
        { name: "Slack", logo: "/images/slack.png", location: "China" },
        { name: "Slack", logo: "/images/slack.png", location: "China" },
        { name: "Slack", logo: "/images/slack.png", location: "China" },
        { name: "Slack", logo: "/images/slack.png", location: "China" },
        { name: "Freepik", logo: "/images/freepik.png", location: "United States" },
        { name: "Freepik", logo: "/images/freepik.png", location: "United States" },
        { name: "Freepik", logo: "/images/freepik.png", location: "United States" },
        { name: "Freepik", logo: "/images/freepik.png", location: "United States" },
        { name: "Freepik", logo: "/images/freepik.png", location: "United States" },
    ]

    return(
        <>
        <Header/>
        <div>
            {/* jobs heroSection */}
            <div className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-16 py-12 bg-white">  
                {/* Left Side: Text + Search Bar */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl md:text-6xl font-bold text-blue-600 leading-tight">
                    Find Your <span className="text-blue-800">Dream Job</span> Easily!
                    </h1>
                    <p className="text-gray-700 mt-6 text-xl">
                    Browse thousands of job opportunities from top companies worldwide. 
                    Let’s make your career dreams come true.
                    </p>

                    {/* Search Bar */}
                    <div className="mt-8 flex items-center border rounded-lg shadow-lg overflow-hidden w-full md:w-[80%]">
                    <input
                        type="text"
                        placeholder="Search job title, company, or keyword..."
                        className="w-full px-6 py-4 text-gray-700 outline-none text-lg"
                    />
                    <button className="px-8 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-lg">
                        Search
                    </button>
                    </div>
                </div>

                {/* Right Side: Enlarged Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                    src={jobSearchImage}
                    alt="Job Search"
                    className="w-full md:max-w-2xl rounded-xl  transform transition-all hover:scale-105 duration-300"
                    />
                </div>
            </div>

            {/* jobs section */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">New Jobs</h1>
                <div className="grid md:grid-cols-2 gap-8">
                    {jobs.map((job, index) => (
                    <JobCard key={index} job={job} />
                    ))}
                </div>
            </div>


            {/* campanies data view  */}
            <TopCompanies companies={companiesData}/>
        </div>
        <Footer/>
        </>
    )
}
export default Jobs