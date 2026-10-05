import { Link } from "react-router-dom";
import Avatar from "./Avatar";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-900/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <Avatar name="Benju Guzman" size="sm" />
          <div className="leading-tight">
            <p className="text-sm font-bold">Benju Guzman</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              BSIT 3-6 · 3rd Year
            </p>
          </div>
        </div>
        <p className="text-center text-xs text-slate-500 dark:text-slate-400">
          Team Directory App · React + Vite + Tailwind CSS · Local data only
        </p>
        <div className="flex gap-4 text-sm font-medium">
          <Link to="/" className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
            Home
          </Link>
          <Link to="/users" className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
            Users
          </Link>
          <Link to="/about" className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;