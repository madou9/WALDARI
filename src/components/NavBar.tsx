
import { RiMenu5Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState } from "react";
import styles from "@/styles";

const NavBar = () => {
  const { pathname } = useLocation();
  const [toggle, setToggle] =  useState(false);
  
  return (
    <nav className={`${styles.paddingX} w-full flex fixed top-0 bg-white justify-between items-center py-6 navbar border-b border-green-500 z-[5]`}>
      
      <Link to={'/'}>
        <h3 className='text-green-500 font-poppins font-bold text-2xl lg:text-4xl lg:pl-0'>WALDARI</h3>
      </Link>

      <ul className={`${toggle ? 'hidden' : 'md:flex'} list-none hidden gap-6 justify-end items-center flex-1`}>
        {[
          { path: '/', text: 'Qui sommes-nous ?' },
          { path: '/Service', text: 'Services Offerts' },
          { path: '/Evacuation', text: 'Évacuation sanitaire' },
          { path: '/Formulaire', text: 'Formulaire à remplir' },
          { path: '/Prestations', text: 'Prestations et Prix' }
        ].map((item) => (
          <li key={item.path} className="font-poppins text-l font-medium text-white hover:text-accentColor hover:scale-[1.05]">
            <NavLink
              className={`${pathname === item.path ? 'font-semibold text-green-500' : 'text-black'} hover:text-green-500 hover:font-semibold`}
              to={item.path}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex items-center">
        <RiMenu5Line className={`${!toggle ? 'flex': 'hidden'} text-dark`} fontSize={32} onClick={()=>{setToggle(!toggle)}} />
        <AiOutlineClose className={`${toggle ? 'flex': 'hidden'} text-accentColor`} fontSize={24} onClick={()=>{setToggle(!toggle)}} />
      </div>

      <div className={`${!toggle ? 'hidden': 'flex'} sidebar absolute bg-secondaryBackground p-6 top-20 right-0 mx-4 my-2 min-w-[200px]`}>
        <ul className="list-none flex justify-end gap-6 flex-1 items-start flex-col">
          {[
            { path: '/', text: 'Qui sommes-nous ?' },
            { path: '/Service', text: 'Services Offerts' },
            { path: '/Evacuation', text: 'Évacuation sanitaire' },
            { path: '/Formulaire', text: 'Formulaire à remplir' },
            { path: '/Prestations', text: 'Prestations et Prix' }
          ].map((item) => (
            <li key={item.path} className="font-poppins text-l font-semibold text-green-500">
              <NavLink
                className={`${pathname === item.path ? ' font-semibold ' : 'text-white'} hover:text-green-500 hover:font-semibold`}
                to={item.path}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
