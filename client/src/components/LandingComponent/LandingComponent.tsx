import React from "react";
import { useNavigate } from "react-router-dom";

export const LandingComponent: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center  text-white p-4">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Recibia!</h1>
        <p className="text-lg mb-6">
          Discover delicious recipes and cooking inspiration. Log in to access
          all our exclusive recipes tailored just for you!
        </p>
        <button
          onClick={handleLogin}
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Log in to view recipes
        </button>
      </div>
    </div>
  );
};
