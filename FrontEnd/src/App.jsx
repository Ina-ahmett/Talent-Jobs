import {Routes, Route, Router} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Jobs from "./pages/jobs"
import Contact from "./pages/contact"
import Login from "./pages/login"
import Dashboard from "./pages/backendPages/dashboard"
import SignUp from "./pages/signup"
import Companies from "./pages/backendPages/companies"

const App = () =>{
  return(
    <div>   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/create" element={<SignUp/>}/>
      </Routes>

      {/* backEnd waye kuwan links wayee */}
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/companies" element={<Companies/>}/>
        </Routes>
      </div>
    </div>
  )
}
export default App