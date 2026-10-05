import { Link, NavLink } from "react-router-dom";

function Navbar({ favoritesCount, darkMode, onToggleDarkMode }) {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-md"
      : "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center gap-1.5">
          <Link to="/" className="mr-2 flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-extrabold text-white shadow-md">
              TD
            </span>
            <span className="leading-tight">
              <span className="block text-base font-extrabold tracking-tight">
                Team Directory
              </span>
              <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">
                Benju Guzman · BSIT 3-6
              </span>
            </span>
          </Link>
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

        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700 dark:border-amber-900 dark:bg-amber-950/60 dark:text-amber-300">
            <span aria-hidden="true">★</span> Favorites: {favoritesCount}
          </span>
          <button
            onClick={onToggleDarkMode}
            className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100 active:scale-95 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
