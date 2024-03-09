import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import { AboutUse, Home } from "./pages"
import EvacuationSanitaire from "./pages/EvacuationSanitaire"
import Sejours from "./pages/Sejours"
import Contact from "./pages/Contact"


const AppRouters = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}  >
        <Route index element={<Home />} />
        <Route path="/Service" element={<AboutUse />} />
        <Route path="/Evacuation-Sanitaire" element={<EvacuationSanitaire />} />
        <Route path="/A-propos/sejours" element={<Sejours />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/"/>} />
        </Route>
    </Routes>
  )
}

export default AppRouters