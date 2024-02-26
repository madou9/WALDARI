import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"


const AppRouters = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}  >
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/"/>} />
        </Route>
    </Routes>
  )
}

export default AppRouters