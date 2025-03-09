import LogoImage from "../assets/Talent-jobs.png"

const Footer = () => {
    return (
      <footer className="bg-black text-gray-200 py-8">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 text-sm">
            {/* Categories */}
            <div>
              <h3 className="font-bold mb-2">Categories</h3>
              <ul className="space-y-1">
                <li>Graphics & Design</li>
                <li>Digital Marketing</li>
                <li>Writing & Translation</li>
                <li>Video & Animation</li>
                <li>Music & Audio</li>
                <li>Programming & Tech</li>
              </ul>
            </div>
            
            {/* For Clients */}
            <div>
              <h3 className="font-bold mb-2">For Clients</h3>
              <ul className="space-y-1">
                <li>How it Works</li>
                <li>Customer Stories</li>
                <li>Trust & Safety</li>
                <li>Quality Guide</li>
              </ul>
            </div>
            
            {/* For Freelancers */}
            <div>
              <h3 className="font-bold mb-2">For Freelancers</h3>
              <ul className="space-y-1">
                <li>Become a Freelancer</li>
                <li>Freelancer Guide</li>
                <li>Community Hub</li>
                <li>Forum</li>
              </ul>
            </div>
            
            {/* Business Solutions */}
            <div>
              <h3 className="font-bold mb-2">Business Solutions</h3>
              <ul className="space-y-1">
                <li>Project Management</li>
                <li>Content Marketing</li>
                <li>Creative Talent</li>
                <li>Logo Maker</li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="font-bold mb-2">Company</h3>
              <ul className="space-y-1">
                <li>About Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t pt-4 px-5">
            <div className="flex items-center space-x-2">
                <img src= {LogoImage} alt="Talent Jobs" className="h-32 w-32" />
                <span className="text-gray-100 text-xl font-semibold">Talent Jobs</span>
            </div>
            <p className="text-sm">&copy; Talent Jobs 2025. All rights reserved.</p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-700 text-lg"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-lg"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-lg"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-lg"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </footer>
    );
};
  
export default Footer;