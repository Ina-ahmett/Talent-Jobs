import {Routes, Route} from "react-router-dom"
import Home from "./pages/website/home"
import About from "./pages/website/about"
import Jobs from "./pages/website/jobs"
import Contact from "./pages/website/contact"
import Login from "./pages/website/login"
import Dashboard from "./pages/system/dashboard"
import Companies from "./pages/system/companies"
import CompnaySignup from "./pages/website/compnaySignup"
import JobseekerSignup from "./pages/website/jobseekerSignup"
import YourJobs from "./pages/website/yourJobs"

const App = () =>{
  return(
    <div>  
      {/* website routes */}  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/yourJobs" element={<YourJobs/>}/>
      </Routes>

      {/* login and signup routes */}
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/company/create" element={<CompnaySignup/>}/>
        <Route path="/jobseeker/create" element={<JobseekerSignup/>}/>
      </Routes>
        
        
      {/* system routes */}
      <Routes>
        <Route path="/dashboard" element={ <Dashboard/> }/>
        <Route path="/companies" element={ <Companies/> }/>
      </Routes>
    </div>
  )
}

export default App