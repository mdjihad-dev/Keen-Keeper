import React from "react";
import { ImStatsBars } from "react-icons/im";
import { IoMdHome } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <section className="sticky top-0 z-50 bg-white shadow-sm px-4 md:px-14">
      <div className="navbar max-w-7xl mx-auto flex justify-between items-center py-4">
        
        {/* Navbar Left: Logo */}
        <div className="flex-1">
          <NavLink
            to="/"
            className="text-xl md:text-2xl text-[#1F2937] font-bold"
          >
            Keen <span className="text-[#244D3F]">Keeper</span>
          </NavLink>
        </div>

        {/* Navbar Right: Desktop & Mobile Menu */}
        <div className="flex-none">
          <ul className="menu menu-horizontal gap-1 md:gap-3 px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-semibold text-sm md:text-base flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-[#244D3F] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
                to={"/"}
              >
                <IoMdHome className="text-lg" />
                <span className="hidden sm:inline">Home</span>
              </NavLink>
            </li>
            
            <li>
              <NavLink
                to="/timeline"
                className={({ isActive }) =>
                  `font-semibold text-sm md:text-base flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-[#244D3F] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <MdOutlineWatchLater className="text-lg" />
                <span className="hidden sm:inline">Timeline</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/stats"
                className={({ isActive }) =>
                  `font-semibold text-sm md:text-base flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-[#244D3F] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <ImStatsBars className="text-lg" />
                <span className="hidden sm:inline">Stats</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
