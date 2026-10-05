import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
      <div className="max-w-xl mx-auto px-4 py-6">
        <ErrorMessage message="User not found." />
        <Link to="/users" className="text-blue-500 hover:underline">
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <div className="bg-white dark:bg-gray-800 border rounded-lg p-6 shadow">
        <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
        <p className="mb-2">
          <span className="font-medium">Email: </span>
          {user.email}
        </p>
        <p className="mb-2">
          <span className="font-medium">Company: </span>
          {user.company}
        </p>
        <p className="mb-4">
          <span className="font-medium">Role: </span>
          {user.role}
        </p>
        <Link to="/users" className="text-blue-500 hover:underline font-medium">
          Back
        </Link>
      </div>
    </div>
  );
}

export default UserDetails;
