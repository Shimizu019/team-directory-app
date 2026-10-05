import { Link } from "react-router-dom";

function UserCard({ id, name, email, company, role, isFavorite, onToggleFavorite }) {
  return (
    <div className="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600 dark:text-gray-300">{email}</p>
      <p className="text-gray-600 dark:text-gray-300">{company}</p>
      <p className="text-gray-600 dark:text-gray-300">{role}</p>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => onToggleFavorite(id)}
          className={
            isFavorite
              ? "px-3 py-1 rounded bg-yellow-400 hover:bg-yellow-500 font-medium"
              : "px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 font-medium dark:bg-gray-700 dark:hover:bg-gray-600"
          }
        >
          {isFavorite ? "★ Unfavorite" : "☆ Favorite"}
        </button>

        <Link
          to={`/users/${id}`}
          className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
