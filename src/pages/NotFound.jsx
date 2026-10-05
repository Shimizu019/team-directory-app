import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    document.title = "404 | Team Directory";
  }, []);

  return (
    <div className="page-enter mx-auto max-w-xl px-4 py-16 text-center sm:px-6">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 text-3xl font-black text-white shadow-lg">
        404
      </div>
      <h1 className="mt-5 text-5xl font-extrabold tracking-tight">404</h1>
      <p className="mt-2 text-lg text-slate-500 dark:text-slate-400">
        Page Not Found
      </p>
      <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500 dark:text-slate-400">
        The page you are looking for does not exist. Let us take you back
        to the directory.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-xl bg-slate-900 px-6 py-2.5 font-semibold text-white transition hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500"
      >
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
