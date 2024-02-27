import { Navbar } from "@/components"
import { Outlet } from "react-router-dom"

// type Props = {
//     children: React.ReactNode
// }


const Layout = () => {
  return (
    <div className="flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1">
          <div> {<Outlet />}</div>
        </div>
    </div>
  )
}

export default Layout