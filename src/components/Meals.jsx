import React, { useContext } from 'react'
import { useFetchMeals } from '../hooks/useHttp';
import MealItem from './MealItem';
import CartContext from '../store/CardContext';

export default function Meals() {
    const { meals, isLoading, error } = useFetchMeals();
    const cardCtx = useContext(CartContext);

    function handleAddCartMeals(meal) {
        cardCtx.addItem(meal);
    }

    return (
        <div id='meals'>
            {!isLoading && meals.map((meal) => {
                return (
                    <MealItem key={meal.id} meal={meal} handleAddCartMeals={handleAddCartMeals} />
                )
            })}
            {isLoading && <h2 className="text-center">Fetching meals data...</h2>}
            {error && <div className='error-container'><h2>{error}</h2></div>}
        </div>
    )
}
