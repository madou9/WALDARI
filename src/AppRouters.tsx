import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Pricing from "./components/Pricing"


const AppRouters = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout>Hello world</Layout>}  />
        <Route path="/Pricing" element={<Pricing />}  />
        <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
}

export default AppRouters