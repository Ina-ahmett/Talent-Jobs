import Home from "./pages/home"
import {Routes, Route, Router} from "react-router-dom"
import CategoriesSection from "./pages/jobs"
import JobList from "./components/JobDetails"
import Login from "./pages/login"
import Header from "./components/header"
import Footer from "./components/footer"

const App = () =>{
  return(
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jobs" element={<CategoriesSection/>} />
        <Route path="/jobDetails" element={<JobList/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>        
    </div>
  )
}
export default App