import { Link, NavLink } from "react-router-dom";
import { UserPlus, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import ThemeToggle from "./ThemeToggle";

const GeneralItems = ({ handleLogout }) => (
  <>
    <ThemeToggle />
    <Link
      to="/login"
      className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition"
      onClick={handleLogout}
    >
      Login
    </Link>
    <Link
      to="/register"
      className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition"
    >
      Register
    </Link>
  </>
);
const LoggedInItems = ({
  dropdownOpen,
  setDropdownOpen,
  user,
  handleLogout,
}) => (
  <div className="flex md:flex-row flex-col md:items-center items-start gap-3 relative">
    <NavLink
      to="/my-connections"
      className="text-gray-700 font-medium hover:text-blue-600 transition"
    >
      My Connections
    </NavLink>

    <Link
      to="/create-partner-profile"
      className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition"
    >
      <UserPlus className="w-4 h-4" />
      Create Partner
    </Link>

    <ThemeToggle />

    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-1 border border-gray-300 rounded-full p-1 focus:outline-none"
      >
        <img
          src={user?.photoURL || "https://i.ibb.co/3c0L0NK/default-avatar.png"}
          alt="avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
        <ChevronDown className="w-4 h-4 text-gray-700" />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition"
            onClick={() => setDropdownOpen(false)}
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-100 transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  </div>
);
const NavItems = () => (
  <>
    <li>
      <NavLink
        to="/"
        className="font-medium text-gray-700 hover:text-blue-600 transition"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/find-partners"
        className="font-medium text-gray-700 hover:text-blue-600 transition"
      >
        Find Partners
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-[95%] mx-auto flex justify-between items-center px-4 py-3 md:px-8">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 tracking-wide hover:opacity-90"
        >
          StudyMate
        </Link>

        <div className="md:hidden relative">
          <details className="dropdown">
            <summary className="list-none cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </summary>
            <ul className="absolute right-0 mt-3 bg-white border border-gray-200 rounded-lg shadow-lg w-48 p-3 space-y-2">
              <NavItems />
              <div className="flex flex-col gap-2 mt-2">
                {user ? (
                  <LoggedInItems
                    {...{ dropdownOpen, setDropdownOpen, user, handleLogout }}
                  />
                ) : (
                  <GeneralItems handleLogout={handleLogout} />
                )}
              </div>
            </ul>
          </details>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 items-center">
            <NavItems />
          </ul>
          {user ? (
            <LoggedInItems
              {...{ dropdownOpen, setDropdownOpen, user, handleLogout }}
            />
          ) : (
            <div className="flex items-center gap-3">
              <GeneralItems handleLogout={handleLogout} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
