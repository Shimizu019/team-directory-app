import { useEffect, useState } from "react";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import UserCard from "../components/UserCard";
import usersData from "../data/users";

function Users({ favorites, onToggleFavorite }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Initial loading effect with 1-second simulated loading
  useEffect(() => {
    document.title = "Users | Team Directory";

    const timer = setTimeout(() => {
      setUsers(usersData);
      setLoading(false);
    }, 1000);

    // Clean up the timeout
    return () => clearTimeout(timer);
  }, []);

  // Case-insensitive filter by name OR role
  const filteredUsers = users.filter((user) => {
    const text = search.toLowerCase();
    return (
      user.name.toLowerCase().includes(text) ||
      user.role.toLowerCase().includes(text)
    );
  });

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <Loader />
      </div>
    );
  }

  return (
    <div className="page-enter mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Directory
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Team members{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              ({filteredUsers.length})
            </span>
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Search by name or role · click a card to view full details.
          </p>
        </div>
        <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          ★ {favorites.length} favorited
        </span>
      </div>

      <div className="mt-6 flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:flex-row">
        <div className="relative flex-1">
          <span aria-hidden="true" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
            🔍
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or role... (try “developer”)"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-900 dark:focus:bg-slate-900 dark:focus:ring-indigo-900"
          />
        </div>
        <Button
          label="Clear"
          variant="danger"
          onClick={() => setSearch("")}
        />
      </div>

      <div className="mt-6">
        {filteredUsers.length === 0 ? (
          <ErrorMessage message="No users found." />
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                company={user.company}
                role={user.role}
                isFavorite={favorites.includes(user.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
