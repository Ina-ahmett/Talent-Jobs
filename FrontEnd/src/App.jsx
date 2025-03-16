import {Routes, Route, Router} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Jobs from "./pages/jobs"
import Contact from "./pages/contact"
import Login from "./pages/login"
import Dashboard from "./pages/dashboard"
import CompanyDash from "./pages/companyDash"
import SignUp from "./pages/signup"

const App = () =>{
  return(
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/create" element={<SignUp/>}/>
        <Route path="/Reading" element={<CompanyDash/>}/>
      </Routes>
    </div>
  )
}
export default App