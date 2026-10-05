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
    return <Loader />;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Users ({filteredUsers.length})</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or role..."
          className="flex-1 border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
        />
        <Button
          label="Clear"
          variant="danger"
          onClick={() => setSearch("")}
        />
      </div>

      {filteredUsers.length === 0 ? (
        <ErrorMessage message="No users found." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}

export default Users;
