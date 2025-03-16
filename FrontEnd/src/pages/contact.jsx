import doneImage from "../assets/done.jpg"   
import Footer from "../components/footer";
import Header from "../components/header";


export default function Contact() {
    return (
      <>
      <Header/>
      <div className="flex flex-col items-center w-full min-h-screen px-4 py-10 bg-gray-100">
        <div className="sm:flex sm:gap-10">
            <div className="w-[400px] max-w-4xl mx-auto mt-20 ml-5 sm:ml-0">
                <h2 className="text-lg text-blue-500 font-bold">Who we are</h2>
                <h1 className="text-4xl font-bold">We care about customer services</h1>
                <p className="mt-2 text-gray-600 w-[300px] sm:w-[400px]">
                    Want to chat? We'd love to hear from you! Get in touch about services, advertising, or just to say hello.
                </p>
                <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700">
                    Email Support →
                </button>
            </div>
            <div className="mt-8 bg-gray- p-6  rounded-lg w-full max-w-2xl">
                <h2 className="text-xl font-bold text-gray-800 text-center">Get in Touch</h2>
                <form className="space-y-4 mt-2">
                    <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-lg" required />
                    <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" required />
                    <input type="text" placeholder="Subject" className="w-full px-4 py-2 border rounded-lg" required />
                    <textarea rows="4" placeholder="Message" className="w-full px-4 py-2 border rounded-lg" required />
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center">
                    Send Message
                    </button>
                </form>
            </div>
        </div>
        <div>
            <img src={doneImage} alt="done image" className="sm:w-[1130px] sm:h-[500px]  rounded-xl" />               
        </div>
      </div>
      <Footer/>
      </>
    );
  }
  