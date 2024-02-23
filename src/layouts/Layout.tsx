import Header from "@/components/Header"

type Props = {
    children: React.ReactNode
}


const Layout = ({children}: Props) => {
  return (
    <div>
        <Header />
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout