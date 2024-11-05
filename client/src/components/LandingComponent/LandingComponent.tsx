import React from "react";
import { useNavigate } from "react-router-dom";

export const LandingComponent: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white p-4">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-slate-700">
          WELCOME TO THE MEAL DB!
        </h1>
        <p className="text-lg mb-6 font-semibold">
          Discover delicious recipes and cooking inspiration. Log in to access
          all our exclusive recipes tailored just for you!
        </p>
        <button
          onClick={handleLogin}
          className="px-6 py-3 font-semibold bg-slate-800 text-white rounded hover:bg-slate-700 object-contain"
        >
          Log in to view recipes
        </button>
      </div>
    </div>
  );
};
