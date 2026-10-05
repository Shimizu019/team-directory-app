import { Link } from "react-router-dom";
import Avatar from "./Avatar";

function UserCard({ id, name, email, company, role, isFavorite, onToggleFavorite }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar name={name} />
          <div>
            <h2 className="text-lg font-bold leading-tight tracking-tight">
              {name}
            </h2>
            <span className="mt-1 inline-block rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
              {role}
            </span>
          </div>
        </div>
        <button
          onClick={() => onToggleFavorite(id)}
          aria-label={isFavorite ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          className={
            isFavorite
              ? "rounded-full bg-amber-400 px-3 py-1.5 text-sm font-semibold text-amber-950 shadow-sm transition hover:bg-amber-500 active:scale-95"
              : "rounded-full border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-amber-500 active:scale-95 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
          }
        >
          {isFavorite ? "Favorited" : "Favorite"}
        </button>
      </div>

      <div className="mt-4 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
        <p className="truncate">{email}</p>
        <p>{company}</p>
      </div>

      <div className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-700">
        <Link
          to={`/users/${id}`}
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600 group-hover:shadow-md dark:bg-indigo-600 dark:hover:bg-indigo-500"
        >
          View Details <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
