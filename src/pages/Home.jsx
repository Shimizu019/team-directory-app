import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../components/Avatar";
import Button from "../components/Button";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Team Directory";
  }, []);

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-500" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-fuchsia-300/30 blur-2xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
            BSIT 3-6 · Laboratory Activity
          </span>
          <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Meet the team behind the work.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-indigo-100 sm:text-lg">
            Browse team members, search by name or role, save favorites,
            and open detailed member profiles — all powered by local data.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              label="View Team Members →"
              variant="secondary"
              onClick={() => navigate("/users")}
            />
            <Link
              to="/about"
              className="rounded-xl border border-white/40 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
            >
              About this project
            </Link>
          </div>
          {/* Stats */}
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {[
              ["8", "Members"],
              ["4", "Companies"],
              ["7+", "Roles"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl bg-white/12 px-4 py-3 text-white backdrop-blur"
              >
                <p className="text-2xl font-extrabold">{value}</p>
                <p className="text-xs font-medium uppercase tracking-widest text-indigo-100">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student identity */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:flex-row sm:items-center">
          <Avatar name="Benju Guzman" size="lg" />
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Developed by
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Benju Guzman
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              BSIT 3-6 · 3rd Year
            </p>
          </div>
          <Link
            to="/users"
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500"
          >
            Explore directory
          </Link>
        </div>

        {/* Feature highlights */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ["Instant search", "Filter members by name or role as you type."],
            ["Favorites", "Star members and track them in the navbar."],
            ["Dark mode", "Switch themes anytime from the header."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
            >
              <h3 className="font-bold">{title}</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
