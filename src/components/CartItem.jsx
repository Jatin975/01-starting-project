import React from 'react'

export default function CartItem({ meal, addMealQuntity, subtractMealQuantity }) {

    return (
        <li className='flex justify-between items-center'>
            <span>{meal.name} - {meal.quantity} x ${meal.price}</span>
            <span>
                <button type="button"
                    onClick={() => subtractMealQuantity(meal.id)}
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-full text-sm px-3 py-1 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ">
                    -</button>
                {meal.quantity}
                <button type="button"
                    onClick={() => addMealQuntity(meal)}
                    className="ml-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-full text-sm px-2.5 py-1 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >+</button>
            </span>
        </li>
    )
}
