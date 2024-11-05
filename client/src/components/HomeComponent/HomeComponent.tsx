import { useEffect, useState } from "react";
import { IMeals } from "../../interfaces/meals";
import { getAllMeals } from "../../herlpers/meals/getAllMeals";
import { getMealById } from "../../herlpers/meals/getMealById";

export const HomeComponent = () => {
  const [meals, setMeals] = useState<IMeals[]>([]);
  const [selectedMeal, setSelectedMeal] = useState<IMeals | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const mealsDB = await getAllMeals();
        setMeals(mealsDB);
      } catch (error) {
        console.error(`Error al cargar las comidas: ${error}`);
      }
    };
    fetchMeals();
  }, []);

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Lista de Comidas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <div
            key={meal._id}
            className="bg-slate-800 rounded-lg shadow-md p-4 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-bold text-lg text-white text-center">
                {meal.name}
              </h2>
              <p className="text-white text-center">{meal.category}</p>
              {meal.imageUrl && (
                <img
                  src={meal.imageUrl}
                  alt={meal.name}
                  className="w-full h-72 rounded-md mt-2"
                />
              )}
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => handleViewDetails(meal._id)}
                className="px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600"
              >
                Ver instrucciones
              </button>
            </div>
          </div>
        ))}
      </div>

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
              <img
                src={selectedMeal.imageUrl}
                alt={selectedMeal.name}
                className="w-full h-48 object-contain mt-4"
              />
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
