import { RiMenu5Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'; // Ajout pour fermer le menu mobile lorsque la page change

const NavBar = () => {
  const { pathname } = useLocation();
  const [toggle, setToggle] = useState(false);

  // Fonction pour fermer le menu mobile lorsque la page change
  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  return (
    <nav className="w-full fixed top-0 bg-white shadow-md z-[5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to={'/'} className="text-green-500 font-poppins font-bold text-2xl">
            WALDARI
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
                { path: '/', text: 'Acceuil' },
                { path: '/Service', text: 'Services' },
                { path: '/Evacuation-Sanitaire', text: 'Evacuation sanitaire' },
                { path: '/Procédure', text: 'Procédure' },
                { path: '/Destinations', text: 'Destinations' },
                { path: '/Contact', text: 'Contact' }
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={`${pathname === item.path ? 'font-semibold text-green-500' : 'text-black'} hover:text-green-500 hover:font-semibold`}
                  >
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Menu déroulant mobile */}
      {toggle && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
                { path: '/', text: 'Acceuil' },
                { path: '/Service', text: 'Services' },
                { path: '/Evacuation-Sanitaire', text: 'Evacuation sanitaire' },
                { path: '/Procédure', text: 'Procédure' },
                { path: '/Destinations', text: 'Destinations' },
                { path: '/Contact', text: 'Contact' }
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={`${pathname === item.path ? 'font-semibold text-green-500' : 'text-black'} block px-3 py-2 rounded-md text-base hover:text-green-500 hover:font-semibold`}
              >
                {item.text}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
