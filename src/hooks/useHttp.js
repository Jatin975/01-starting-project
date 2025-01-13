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

export async function sendOrder(url, bodyData) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });
  const responseData = await response.json();
  console.log("response data", responseData);

  if (!response.ok) {
    throw new Error(
      responseData.message ?? "Error occured while calling the API"
    );
  }
  return responseData;
}
