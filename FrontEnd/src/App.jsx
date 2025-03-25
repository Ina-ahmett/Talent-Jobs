import {Routes, Route} from "react-router-dom"
import Home from "./pages/website/home"
import About from "./pages/website/about"
import Jobs from "./pages/website/jobs"
import Contact from "./pages/website/contact"
import Login from "./pages/website/login"
import Dashboard from "./pages/system/dashboard"
import SignUp from "./pages/website/signup"
import Companies from "./pages/system/companies"

const App = () =>{
  return(
    <div>  
      {/* website routes */}  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      {/* login and signup routes */}
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/create" element={<SignUp/>}/>
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