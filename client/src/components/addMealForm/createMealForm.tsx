import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createMeals } from "../../herlpers/meals/createMeal";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  userId: string;
  isAdmin: boolean;
  iat: number;
  exp: number;
}

export const AddMealForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decodedToken = jwtDecode<DecodedToken>(token);
      if (!decodedToken.isAdmin) {
        navigate("/home");
      }
    } catch (error) {
      console.error("Error al decodificar el token:", error);
      navigate("/login");
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      await createMeals(name, category, description, imageUrl);
      setMessage("Comida creada exitosamente");
      navigate("/home");
    } catch (error) {
      setMessage("Error al crear la comida");
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-blue-500 to-blue-300 flex items-center justify-center w-full">
      <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          Agregar Nueva Comida
        </h1>
        {message && (
          <p
            className={`text-center ${
              message.includes("Error") ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="example: Kumpir"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="example: Side"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-24 resize-none"
              placeholder="Instructions..."
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Url image
            </label>
            <input
              type="url"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMealForm;
