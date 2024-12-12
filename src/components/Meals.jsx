import React from 'react'
import { useFetchMeals } from '../hooks/useFetchMeals'
import cronParser from 'cron-parser';
import dayjs from 'dayjs';

const imgPath = '../../backend/public/'


export default function Meals({cartMeals, setCartMeals }) {
    const { meals, isLoading, error } = useFetchMeals();

    function handleAddCartMeals(meal) {
        if(cartMeals.some(x=>x.id === meal.id)){
            return;
        }

        setCartMeals((prevState) => {
            let updatedState = [...prevState];
            let cartMeal = { ...meal, quantity: 1 };
            updatedState.push(cartMeal);
            return updatedState;
        })
    }
    return (
        <div id='meals'>
            {!isLoading && meals.map((meal) => {
                return (
                    <div key={meal.id} className='meal-item'>
                        <img src={`${imgPath}${meal.image}`} alt='taco' />
                        <h3>{meal.name}</h3>
                        <span className='meal-item-price'>${meal.price}</span>
                        <p className='meal-item-description'>{meal.description}</p>
                        <button
                            className='meal-item-actions'
                            onClick={() => handleAddCartMeals(meal)}
                        >Add to cart</button>
                    </div>
                )
            })}
            {isLoading && <h2>Fetching meals data...</h2>}
            {error && <div className='error-container'><h2>{error}</h2></div>}
        </div>
    )
}
