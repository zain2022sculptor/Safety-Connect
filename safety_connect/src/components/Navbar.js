import logo from "../assets/logo.svg";
import { FiBell, FiSettings, FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="bg-[#112565] flex md:justify-between justify-center items-center h-16 p-8 w-full fixed">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <ul className="text-white md:flex hidden">
        <li className="p-4">
          <div className="relative flex items-center">
            <input
              type="search"
              placeholder="Search"
              className="rounded-md px-4 h-8 bg-white/[0.16]"
            />
            <FiSearch className="absolute ml-44" />
          </div>
        </li>
        <li className="p-4 text-[28px]">
          <FiSettings />
        </li>
        <li className="p-4 text-[28px]">
          <FiBell />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
