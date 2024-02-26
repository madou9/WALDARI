
import { useState } from 'react';
import { close, menu } from '../assets';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {

  const { pathname } = useLocation()  
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={` w-full flex fixed top-0 bg-white justify-between items-center py-6 navbar border-b border-green-500 `}>
      <Link to={'/'}>
        <h3 className='text-green-500 font-poppins font-bold text-2xl lg:text-4xl pl-4 lg:pl-0'>WALDARI</h3>
      </Link>
      <ul className="list-none flex-row gap-6 sm:flex hidden justify-end items-center flex-1">
        <NavLink className={`${pathname ===  '/' ? 'font-semibold text-green-500' : 'text-black'} mr-4  font-poppins cursor-pointer text-[16px] hover:text-green-500 hover:font-semibold`} to={`/`}>
            Accueil
        </NavLink>
        <NavLink className={`${pathname ===  '/pricing' ? 'font-semibold text-green-500' : 'text-black'} mr-4  font-poppins cursor-pointer text-[16px] hover:text-green-500 hover:font-semibold`} to={`/Pricing`}>
            A Propos
        </NavLink>
        <NavLink className={`${pathname ===  '/about' ? 'font-semibold text-green-500' : 'text-black'} mr-4  font-poppins cursor-pointer text-[16px] hover:text-green-500 hover:font-semibold`} to={`about`}>
            Blog
        </NavLink>
        <NavLink className={`${pathname ===  '/blog' ? 'font-semibold text-green-500' : 'text-black'} mr-4  font-poppins cursor-pointer text-[16px] hover:text-green-500 hover:font-semibold`} to={`blog`}>
            Visas Medecine
        </NavLink>
        <NavLink className={`${pathname ===  '/contact' ? 'font-semibold text-green-500' : 'text-black'} mr-4 font-poppins cursor-pointer text-[16px] hover:text-green-500 hover:font-semibold`} to={`contact`}>
            Contact
        </NavLink>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu}
          alt="menu"
          className='w-[24px] h-[24px] object-contain mr-4'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'} bg-green-500 absolute top-16 right-0 mx-4 my-2 min-w-[140px] sidebar`}>
          <ul className="list-none border rounded-xl border-green-500 flex flex-col justify-end w-full items-left flex-1">
            <NavLink className={`${pathname ===  '/' ? 'bg-white font-semibold text-green-500' : 'text-white'} font-poppins font-normal py-3 px-5 cursor-pointer text-[16px] w-full`} to={`/`}>
              Accueil
            </NavLink>
            <NavLink className={`${pathname ===  '/pricing' ? 'bg-white font-semibold text-green-500' : 'text-white'} font-poppins font-normal py-3 px-5 cursor-pointer text-[16px] w-full`} to={`pricing`}>
              A Propos
            </NavLink>
            <NavLink className={`${pathname ===  '/about' ? 'bg-white font-semibold text-green-500' : 'text-white'} font-poppins font-normal py-3 px-5 cursor-pointer text-[16px] w-full`} to={`about`}>
             Blog
            </NavLink>
            <NavLink className={`${pathname ===  '/blog' ? 'bg-white font-semibold text-green-500' : 'text-white'} font-poppins font-normal py-3 px-5 cursor-pointer text-[16px] w-full`} to={`blog`}>
              Visas Medecine
            </NavLink>
            <NavLink className={`${pathname ===  '/contact' ? 'bg-white font-semibold text-green-500' : 'text-white'} font-poppins font-normal py-3 px-5 cursor-pointer text-[16px] w-full`} to={`contact`}>
                Contact
            </NavLink>
          </ul>
        </div>

      </div>

    </nav>
  )
}

export default Navbar;
