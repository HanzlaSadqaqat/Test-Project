import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mb-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="text-white bg-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
