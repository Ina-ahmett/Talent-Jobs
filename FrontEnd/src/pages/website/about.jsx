import React from "react";
import wadaJir from "../../assets/wadajir.jpg";
import heshiis from "../../assets/heshiis.png";
import Header from "../../components/website/header";
import Footer from "../../components/website/footer"

const About = () => {
  return (
    <>
    <Header/>
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Talent Jobs</h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Talent Jobs is your trusted job portal, connecting top talents with leading companies.
        We aim to bridge the gap between job seekers and employers by offering a seamless
        recruitment experience.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to empower job seekers with the right opportunities and provide
            employers with access to skilled professionals. We strive to make job hunting
            efficient, transparent, and rewarding.
          </p>
        </div>
        <img src={wadaJir} alt="Mission" className="rounded-xl shadow-lg" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
        <img src={heshiis} alt="Vision" className="rounded-xl shadow-lg" />
        <div>
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            Our vision is to be the leading job portal globally, ensuring a future where every
            professional finds their dream job, and every company finds its ideal candidate.
          </p>
        </div>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Join Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Whether you're a job seeker looking for new opportunities or a company searching for
          the best talent, Talent Jobs is here to help. Sign up today and take the next step in
          your career journey!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Get Started
        </button>
      </div>

      
    </div>
    <Footer/>
    </>
  );
};

export default About;
