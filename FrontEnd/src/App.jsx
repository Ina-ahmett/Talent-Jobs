import {Routes, Route, Router} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Jobs from "./pages/jobs"
import Contact from "./pages/contact"
import Login from "./pages/login"
import EmployeeSignup from "./pages/signUpEmployee"
import Dashboard from "./pages/dashboard"

const App = () =>{
  return(
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login  hideHeaderFooter={true} />} />
        <Route path="/EmpSignUp" element={<EmployeeSignup hideHeaderFooter={true}/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}
export default App