import { Navbar } from "@/components"
import { Outlet } from "react-router-dom"

// type Props = {
//     children: React.ReactNode
// }


const Layout = () => {
  return (
    <div>
        <Navbar />
        <div className="">
          <div> {<Outlet />}</div>
        </div>
    </div>
  )
}

export default Layout