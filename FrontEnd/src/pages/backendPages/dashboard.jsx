import { Route, Routes } from "react-router-dom"
import ContactDetails from "../../components/contactDetails"
import Sidebar from "../../components/sidebar"
import Companies from "./companies"

const Dashboard = () => {
  return(
    <div>
      <Sidebar/>
      <ContactDetails/>
      {/* <Routes>
        <Route path="companies" element={<Companies/>} />
      </Routes> */}
     </div>
  )
} 

export default Dashboard