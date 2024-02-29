import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import { AboutUse, Home } from "./pages"


const AppRouters = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}  >
        <Route index element={<Home />} />
        <Route path="/Service" element={<AboutUse />} />
        {/* <Route path="/Evacuation-Sanitaire" element={<Evacuation />} />
        <Route path="/Formulaire" element={<Formulaire />}/>
        <Route path="/Service-offert" element={<Services />} /> */}
        <Route path="*" element={<Navigate to="/"/>} />
        </Route>
    </Routes>
  )
}

export default AppRouters