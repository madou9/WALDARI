import { RiMenu5Line } from "react-icons/ri";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { logo, logoAfrique } from "@/assets";

const NavBar = () => {
  const { pathname } = useLocation();
  const [toggle, setToggle] = useState(false);
  const [showSubPages, setShowSubPages] = useState<number | null>(null); // Définir le type de showSubPages

  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  const handleSubPagesToggle = (index: number) => { // Définir le type de index
    setShowSubPages((prev) => (prev === index ? null : index));
  };

  return (
    <nav className="w-full fixed top-0 pt-6 bg-white shadow-md z-[5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-10">
        <Link to={'/'} className="flex items-center">
          <img src={logo} alt="Ministere-logo" className='w-12 h-13 px-15 py-15 mr-2' />
          <img src={logoAfrique} alt="Ministere-logo" className='w-12 h-12 mr-2' />
          <div>
            <p className="text-green-500 font-poppins font-bold text-2xl">WALDARI</p>
            <p className="text-xs text-gray-500">ALSAFWA GROUP</p>
          </div>
        </Link>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
              aria-label="Toggle menu"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? (
                <AiOutlineClose className="w-6 h-6" />
              ) : (
                <RiMenu5Line className="w-6 h-6" />
              )}
            </button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-end">
            <ul className="flex items-center space-x-8">
              {[
                { path: '/', text: 'Accueil' },
                // { path: '/Services', text: 'Services' },
                { path: '/A-propos', text: 'A Propos', subPages: [
                  { path: '/A-propos/sejours', text: 'Séjours' },
                  { path: '/A-propos/hotel', text: 'Hôtel' },
                  { path: '/A-propos/clinique', text: 'Clinique' }
                ] },
                { path: '/Intervention', text: 'Intervention', subPages: [
                  { path: '/Intervention/page1', text: 'Page 1' },
                  { path: '/Intervention/page2', text: 'Page 2' },
                  { path: '/Intervention/page3', text: 'Page 3' }
                ] },
                { path: '/Devis', text: 'Devis Gratuit' },
                { path: '/Tarifs', text: 'Tarifs' },
                { path: '/Temoignages', text: 'Temoignages' },
                { path: '/Blog', text: 'Blog' },
                { path: '/Contact', text: 'Contact' }
              ].map((item, index) => (
                <li key={item.path}>
                  {item.subPages ? (
                    <div className="relative">
                      <span
                        className={`${pathname.startsWith(item.path) ? 'font-semibold text-green-500' : 'text-black'} flex items-center justify-between hover:text-green-500 hover:font-semibold`}
                        onClick={() => handleSubPagesToggle(index)}
                      >
                        <div className="flex">
                          <span>{item.text}</span>
                          <div className="mt-1">
                            <AiOutlineDown className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </span>
                      {showSubPages === index && (
                        <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg">
                          {item.subPages.map((subPage) => (
                            <li key={subPage.path}>
                              <NavLink
                                to={subPage.path}
                                className="block px-4 py-2 text-sm text-white bg-green-600 hover:bg-green-500"
                              >
                                {subPage.text}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={`${pathname === item.path ? 'font-semibold text-green-500' : 'text-black'} hover:text-green-500 hover:font-semibold`}>
                      {item.text}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {toggle && (
        <div className="md:hidden flex justify-center items-center text-center  bg-green-500">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 hover:text-green-500 ">
            {[
              { path: '/', text: 'Accueil' },
              { path: '/A-propos', text: 'A Propos', subPages: [
                { path: '/A-propos/sejours', text: 'Séjours' },
                { path: '/A-propos/hotel', text: 'Hôtel' },
                { path: '/A-propos/clinique', text: 'Clinique' }
              ] },
              { path: '/Intervention', text: 'Intervention', subPages: [
                { path: '/Intervention/page1', text: 'Page 1' },
                { path: '/Intervention/page2', text: 'Page 2' },
                { path: '/Intervention/page3', text: 'Page 3' }
              ] },
              { path: '/Devis', text: 'Devis Gratuit' },
              { path: '/Tarifs', text: 'Tarifs' },
              { path: '/Temoignages', text: 'Temoignages' },
              { path: '/Blog', text: 'Blog' },
              { path: '/Contact', text: 'Contact' }
            ].map((item, index) => (
              <div key={item.path}>
                {item.subPages ? (
                  <div className="relative">
                    <span
                      className="block px-3 py-2 rounded-md text-base font-medium text-white  hover:font-semibold"
                      onClick={() => handleSubPagesToggle(index)}
                    >
                      <div className="flex">
                          <span>{item.text}</span>
                          <div className="mt-1">
                            <AiOutlineDown className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                    </span>
                    {showSubPages === index && (
                      <ul className="block left-0 mt-2 shadow-lg rounded-lg">
                        {item.subPages.map((subPage) => (
                          <li key={subPage.path}>
                            <NavLink
                              to={subPage.path}
                              className="block px-4 py-2 text-sm text-white bg-green-600 hover:text-green-500"
                            >
                              {subPage.text}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white  hover:font-semibold"
                  >
                    {item.text}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
