import { useEffect, useState } from "react";
import { IMeals } from "../../interfaces/meals";
import { getAllMeals } from "../../herlpers/meals/getAllMeals";
import { getMealById } from "../../herlpers/meals/getMealById";

export const HomeComponent = () => {
  const [meals, setMeals] = useState<IMeals[]>([]);
  const [selectedMeal, setSelectedMeal] = useState<IMeals | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [totalMeals, setTotalMeals] = useState(0);
  const limit = 12;

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const { meals, totalMeals } = await getAllMeals(page, limit);
        setMeals(meals);
        setTotalMeals(totalMeals);
      } catch (error) {
        console.error(`Error al cargar las comidas: ${error}`);
      }
    };
    fetchMeals();
  }, [page]);

  const handleViewDetails = async (id: string) => {
    try {
      const meal = await getMealById(id);
      setSelectedMeal(meal);
      setIsModalOpen(true);
    } catch (error) {
      console.error(`Error al cargar los detalles de la comida: ${error}`);
    }
  };

  const closeModal = () => {
    setSelectedMeal(null);
    setIsModalOpen(false);
  };

  const handleNextPage = () => {
    if (page < Math.ceil(totalMeals / limit)) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center text-slate-700">
        MEALS LIST
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <div
            key={meal._id}
            className="bg-slate-800 rounded-lg shadow-md p-4 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-bold text-lg text-center text-white">
                {meal.name}
              </h2>
              <p className="text-center text-white">{meal.category}</p>
              {meal.imageUrl && (
                <img
                  src={meal.imageUrl}
                  alt={meal.name}
                  className="w-full h-auto  rounded-md mt-2 object-cover"
                />
              )}
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => handleViewDetails(meal._id)}
                className="px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600 object-contain"
              >
                See instructions
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de paginación */}
      <div className="flex justify-between mt-4 text-white">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className={`px-4 py-2 rounded ${
            page === 1
              ? "bg-blue-200 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Previous Page
        </button>
        <span className="text-white">
          Página {page} de {Math.ceil(totalMeals / limit)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={page >= Math.ceil(totalMeals / limit)}
          className={`px-4 py-2 rounded ${
            page >= Math.ceil(totalMeals / limit)
              ? "bg-blue-200 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Next Page
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && selectedMeal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-slate-500 rounded-lg p-6 w-full max-w-2xl text-center relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-900 hover:text-black"
            >
              X
            </button>
            <h2 className="font-bold text-lg text-white">
              {selectedMeal.name}
            </h2>
            <p className="text-white">{selectedMeal.category}</p>
            {selectedMeal.imageUrl && (
              <div className="mt-4 flex justify-center">
                <img
                  src={selectedMeal.imageUrl}
                  alt={selectedMeal.name}
                  className="max-w-full max-h-64 object-contain"
                />
              </div>
            )}
            <p className="mt-4 text-white text-left">
              {selectedMeal.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
