import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "@radix-ui/react-separator"
import { Link, NavLink } from "react-router-dom"

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-green-500"/>
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetTitle>
               <span>Welcome to Waldari </span> 
            </SheetTitle>
            <Separator />
            <SheetDescription className="flex flex-col gap-4">  
                <Link to="/" className="cursor-pointer flex-1 text-[16px] font-bold bg-green-500 text-white items-center text-center">
                    Home
                </Link>
                <Link to="/" className="cursor-pointer flex-1 text-[16px] font-bold bg-green-500 text-white items-center text-center">
                    About
                </Link>
                <Link to="/" className="cursor-pointer flex-1 text-[16px] font-bold bg-green-500 text-white items-center text-center">
                    contact
                </Link>
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav