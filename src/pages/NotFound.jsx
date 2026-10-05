import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    document.title = "404 | Team Directory";
  }, []);

  return (
    <div className="max-w-xl mx-auto text-center px-4 py-10">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-lg mb-4">Page Not Found</p>
      <Link to="/" className="text-blue-500 hover:underline font-medium">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
