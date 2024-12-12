import { useEffect, useState } from "react";
import { fetchData } from "../http";

export function useFetchMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchAvailableMeals() {
      try {
        setIsLoading(true);
        const mealsData = await fetchData("http://localhost:3000/meals");
        setMeals(mealsData);
        setError(null);
      } catch (error) {
        setError(
          error.message ?? "Error occurred while fetching meals from backend"
        );
        setMeals([]);
      }
      setIsLoading(false);
    }
    fetchAvailableMeals();
  }, []);

  return {
    meals,
    isLoading,
    error,
  };
}
