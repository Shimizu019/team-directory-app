import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Avatar from "../components/Avatar";
import ErrorMessage from "../components/ErrorMessage";
import usersData from "../data/users";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const found = usersData.find((u) => u.id === Number(id));
    setUser(found || null);
  }, [id]);

  useEffect(() => {
    if (user) {
      document.title = `${user.name} | Team Directory`;
    } else {
      document.title = "User Details | Team Directory";
    }
  }, [user]);

  if (!user) {
    return (
      <div className="page-enter mx-auto max-w-xl px-4 py-10 sm:px-6">
        <ErrorMessage message="User not found." />
        <div className="mt-4 text-center">
          <Link to="/users" className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400">
            ← Back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-enter mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <Link to="/users" className="text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-400">
        ← Back
      </Link>
      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 px-6 py-8">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-white/20 p-1 backdrop-blur">
              <Avatar name={user.name} size="lg" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                {user.name}
              </h1>
              <span className="mt-1.5 inline-block rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold text-white backdrop-blur">
                {user.role}
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-3 px-6 py-6">
          {[
            ["✉️ Email", user.email],
            ["🏢 Company", user.company],
            ["💼 Role", user.role],
            ["🆔 Member ID", `#${user.id}`],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between gap-4 rounded-xl bg-slate-50 px-4 py-3 text-sm dark:bg-slate-900"
            >
              <span className="font-semibold text-slate-500 dark:text-slate-400">
                {label}
              </span>
              <span className="truncate font-medium">{value}</span>
            </div>
          ))}
          <Link
            to="/users"
            className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500"
          >
            ← Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
