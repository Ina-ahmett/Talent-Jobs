import { Route, Routes } from "react-router-dom"
import ContactDetails from "../../components/system/companyDetails"
import Sidebar from "../../components/system/sidebar"
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