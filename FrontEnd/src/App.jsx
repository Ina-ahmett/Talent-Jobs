import {Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Jobs from "./pages/jobs"
import Contact from "./pages/contact"
import Login from "./pages/login"
import Dashboard from "./pages/backendPages/dashboard"
import SignUp from "./pages/signup"
import Companies from "./pages/backendPages/companies"
import ProtectedRoute from "./components/ProtectedRoute"

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
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>
        <Route path="/companies" element={
          <ProtectedRoute>
            <Companies/>
          </ProtectedRoute>
        }/>
      </Routes>
    </div>
  )
}

export default App