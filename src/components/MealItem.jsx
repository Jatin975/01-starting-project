import React from 'react'
import { currencyFormatter } from '../utils/formatter';

const imgPath = '../../backend/public/';

export default function MealItem({ meal, handleAddCartMeals }) {
    return (
        <div key={meal.id} className='meal-item'>
            <img src={`${imgPath}${meal.image}`} alt='taco' />
            <h3>{meal.name}</h3>
            <span className='meal-item-price'>{currencyFormatter.format(meal.price)}</span>
            <p className='meal-item-description'>{meal.description}</p>
            <button type="button"
                className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-3 dark:focus:ring-yellow-900"
                onClick={() => handleAddCartMeals(meal)}
            >Add to cart
            </button>
        </div>
    )
}
