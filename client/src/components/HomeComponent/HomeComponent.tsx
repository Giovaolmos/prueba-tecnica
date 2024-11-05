import { useEffect, useState } from "react";
import { IMeals } from "../../interfaces/meals";
import { getAllMeals } from "../../herlpers/meals/getAllMeals";

export const HomeComponent = () => {
  const [meals, setMeals] = useState<IMeals[]>([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const mealsDB = await getAllMeals();
        setMeals(mealsDB);
      } catch (error) {
        console.error(`Error al cargar las películas: ${error}`);
      }
    };
    fetchMeals();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Comidas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <div key={meal._id} className="bg-slate-700 rounded-lg shadow-md p-4">
            <h2 className="font-bold text-lg text-white">{meal.name}</h2>
            <p className="text-white">{meal.category}</p>
            {meal.imageUrl && (
              <img
                src={meal.imageUrl}
                alt={meal.name}
                className="w-full h-72 rounded-md mt-2 "
              />
            )}
            {/* <p className="mt-2 text-gray-700">{meal.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};
