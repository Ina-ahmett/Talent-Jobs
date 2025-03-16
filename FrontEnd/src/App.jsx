import {Routes, Route, Router} from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import Footer from './components/footer'
import About from "./pages/about"
import Jobs from "./pages/jobs"
import Contact from "./pages/contact"
import Login from "./pages/login"
import EmployeeSignup from "./pages/signUpEmployee"

const App = () =>{
  return(
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login  hideHeaderFooter={true} />} />
        <Route path="/EmpSignUp" element={<EmployeeSignup hideHeaderFooter={true}/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
export default App