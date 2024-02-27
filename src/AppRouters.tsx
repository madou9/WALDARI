import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import Evacuation from "./pages/Evacuation"
import Formulaire from "./pages/Formulaire"
import Services from "./pages/Services"
import AboutUse from "./pages/AboutUse"


const AppRouters = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}  >
        <Route index element={<Home />} />
        <Route path="/About-us" element={<AboutUse />} />
        <Route path="/Evacuation-Sanitaire" element={<Evacuation />} />
        <Route path="/Formulaire" element={<Formulaire />}/>
        <Route path="/Service-offert" element={<Services />} />
        <Route path="*" element={<Navigate to="/"/>} />
        </Route>
    </Routes>
  )
}

export default AppRouters