import React from 'react';
import { CiStopwatch } from 'react-icons/ci';
import { ImStatsBars } from 'react-icons/im';
import { IoMdHome } from 'react-icons/io';
import { MdOutlineWatchLater } from 'react-icons/md';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
      <section className="px-14 mx-auto navbar bg-base-100 shadow-sm">
        {/* Navbar Left */}
        <div className="flex-1">
          <a className="text-2xl text-[#1F2937] font-bold">
            Keen <span className="text-[#244D3F]">Keeper</span>
          </a>
        </div>

        {/* Navbar Right */}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 space-x-3">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-semibold text-base ${isActive ? "bg-green-900 text-white" : ""}`
                }
                to={"/"}
              >
                <IoMdHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/timeline"
                className={({ isActive }) =>
                  `font-semibold text-base flex items-center gap-2 p-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-[#244D3F] text-white" // একটিভ হলে তোমার থিম কালার (সবুজ)
                      : "text-gray-600 hover:bg-gray-100" // একটিভ না থাকলে নরমাল কালার
                  }`
                }
              >
                <MdOutlineWatchLater />
                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-semibold text-base flex items-center gap-2 p-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-[#244D3F] text-white" // একটিভ হলে তোমার থিম কালার (সবুজ)
                      : "text-gray-600 hover:bg-gray-100" // একটিভ না থাকলে নরমাল কালার
                  }`
                }
                to={"/stats"}
              >
                <ImStatsBars />
                Stats
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    );
};

export default Navbar;