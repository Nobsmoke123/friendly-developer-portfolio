import { NavLink } from "react-router";
import { FaLaptopCode, FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const base = "transition hover:underline";
  const active = "transition text-white font-semibold tracking-widest";

  return (
    <nav className="bg-zinc-950 border-b border-stone-600 shadow-md sticky top-0 z-50 relative">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to={"/"}
          className="flex items-center gap-2 text-lg font-bold text-white"
        >
          <FaLaptopCode className="text-white text-xl" />
          The Friendly Developer
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm text-gray-300">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? active : base)}
            >
              {" "}
              Home{" "}
            </NavLink>
            <NavLink
              to={"/projects"}
              className={({ isActive }) => (isActive ? active : base)}
            >
              {" "}
              Projects{" "}
            </NavLink>
            <NavLink
              to={"/blog"}
              className={({ isActive }) => (isActive ? active : base)}
            >
              {" "}
              Blog{" "}
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? active : base)}
            >
              {" "}
              About{" "}
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? active : base)}
            >
              {" "}
              Contact{" "}
            </NavLink>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className="text-white-400 text-xl cursor-pointer"
            title="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="flex flex-col w-30 absolute -right-0 text-left bg-neutral-800 px-6 py-4 gap-2 text-center border border-stone-600 rounded-b-md">
          <NavLink
            to={"/"}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
          >
            {" "}
            Home{" "}
          </NavLink>
          <NavLink
            to={"/projects"}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
          >
            {" "}
            Projects{" "}
          </NavLink>
          <NavLink
            to={"/blog"}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
          >
            {" "}
            Blog{" "}
          </NavLink>
          <NavLink
            to={"/about"}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
          >
            {" "}
            About{" "}
          </NavLink>
          <NavLink
            to={"/contact"}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
          >
            {" "}
            Contact{" "}
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
