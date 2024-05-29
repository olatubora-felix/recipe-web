import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { navRoutes } from '../../../constant/navRoutes';
import { SearchAndFilter } from '../../SearchAndFilter';
import { MenuIcon } from '../../../assets/icons/MenuIcon';
const Navbar = () => {
  return (
    <header className="bg-white container mx-auto md:py-6 py-3 md:px-4 px-2 z-50 sticky top-0">
      <nav className="flex md:justify-between md:items-center md:flex-row flex-col gap-6">
        {/* Logo */}
        <div className="flex md:block md:justify-start justify-between items-center">
          <NavLink to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-[46px] w-[96px]"
            />
          </NavLink>
          <MenuIcon className="block md:hidden" />
        </div>

        {/* Search Bar */}
        <SearchAndFilter />
        {/* Menulist / profile */}
        <ul className="hidden items-center gap-6 md:flex">
          {navRoutes.map((route) => (
            <li
              key={route.id}
              className=" "
            >
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary text-sm font-medium'
                    : 'text-gray-light text-sm font-medium'
                }
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
