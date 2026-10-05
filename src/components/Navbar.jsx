import { NavLink } from "react-router-dom";

function Navbar({ favoritesCount, darkMode, onToggleDarkMode }) {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "px-3 py-2 rounded bg-blue-600 text-white font-bold"
      : "px-3 py-2 rounded text-gray-700 hover:bg-gray-200 font-medium dark:text-gray-200 dark:hover:bg-gray-700";

  return (
    <nav
      className={
        darkMode
          ? "bg-gray-900 text-white shadow p-4 flex flex-wrap gap-3 items-center justify-between"
          : "bg-white text-gray-900 shadow p-4 flex flex-wrap gap-3 items-center justify-between"
      }
    >
      <div className="flex gap-2 items-center">
        <span className="font-bold text-lg mr-2">Team Directory</span>
        <NavLink to="/" className={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/users" className={linkStyle}>
          Users
        </NavLink>
        <NavLink to="/about" className={linkStyle}>
          About
        </NavLink>
      </div>

      <div className="flex gap-3 items-center">
        <span className="font-medium">Favorites: {favoritesCount}</span>
        <button
          onClick={onToggleDarkMode}
          className="px-3 py-2 rounded border font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
