import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Team Directory";
  }, []);

  return (
    <div className="max-w-3xl mx-auto text-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-4">Team Directory</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Browse our team members, search by name or role, save your favorites,
        and view individual member details.
      </p>
      <Button
        label="View Team Members"
        variant="primary"
        onClick={() => navigate("/users")}
      />
    </div>
  );
}

export default Home;
