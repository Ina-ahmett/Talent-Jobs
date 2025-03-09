import Category from "../components/Category"
import Footer from "../components/footer"
import Header from "../components/header"
import CategoriesSection from "../components/jobs"
import Services from "../components/services"

const Home = () => {
    return(
        <>
            <Header/>
            <section
                className="bg-cover bg-center h-[550px] flex flex-col items-center justify-center text-white text-center px-4 bg-blue-600"
                style={{ backgroundImage: "url('/your-background-image.jpg')" }}>
                {/* Heading and Subheading */}
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Find Your Dream Job Today!</h1>
                <p className="text-sm md:text-lg text-gray-200 max-w-2xl">Connecting Talent with Opportunity: Your Gateway to Career Success</p>

                {/* Search Bar */}
                <div className="bg-white p-2 sm:px-5 sm:rounded-full shadow-lg flex flex-col sm:flex-row sm:items-center mt-6 w-full max-w-4xl">
                    <input type="text" placeholder="Job Title or Company" className="px-4 py-3 w-full sm:w-auto flex-grow outline-none text-gray-700 border-b sm:border-b-0"/>
                    <select className="px-4 py-3 w-full sm:w-auto outline-none text-gray-700 border-b sm:border-b-0">
                        <option selected disabled>Select Location</option>
                        <option>Mogadishu</option>
                        <option>buntland</option>
                        <option>Hargeysa</option>
                        <option>Kismayo</option>
                        <option>Baydhabo</option>
                    </select>

                    <select className="px-4 py-3 w-full sm:w-auto outline-none text-gray-700 border-b sm:border-b-0">
                    <option selected disabled>Select Category</option>
                    <option>Graphics & Design</option>
                    <option>Digital Marketing</option>
                    <option>Writing & Translation</option>
                    <option>Video & Animation</option>
                    <option>Music & Audio</option>
                    <option>Programming & Tech</option>
                    </select>

                    <button className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center justify-center hover:bg-green-600 w-full sm:w-auto sm:mt-0 mt-2 sm:ml-5">
                    <i className="fas fa-search mr-2"></i> Search Job
                    </button>
                </div>

                {/* Stats Section */}
                <div className="flex flex-wrap justify-center gap-6 mt-8 text-white">
                    <div className="flex items-center gap-2">
                    <i className="fas fa-briefcase text-green-400 text-2xl"></i>
                    <div>
                        <h2 className="text-lg font-bold">25,850</h2>
                        <p className="text-gray-300 text-sm">Jobs</p>
                    </div>
                    </div>
                    <div className="flex items-center gap-2">
                    <i className="fas fa-users text-green-400 text-2xl"></i>
                    <div>
                        <h2 className="text-lg font-bold">10,250</h2>
                        <p className="text-gray-300 text-sm">Candidates</p>
                    </div>
                    </div>
                    <div className="flex items-center gap-2">
                    <i className="fas fa-building text-green-400 text-2xl"></i>
                    <div>
                        <h2 className="text-lg font-bold">18,400</h2>
                        <p className="text-gray-300 text-sm">Companies</p>
                    </div>
                    </div>
                </div>
            </section>


            <Category/>


            <Services/>

            <CategoriesSection/>

            <Footer/>
        </>
    )
}
export default Home