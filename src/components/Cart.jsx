import { Box, Typography } from '@mui/material';
import React from 'react'
import '../index.css'

export default function Cart({ cartMeals, setCartMeals, onClose, onCheckout, setTotalPrice }) {

    let totalPrice = cartMeals.reduce((accumulator, meal) => {
        let result = accumulator + (meal.quantity * parseFloat(meal.price))
        return parseFloat(result.toFixed(2));
    }, 0);

    function handleQuantityChange(meal, operand) {

        setCartMeals((prevState) => {
            let updatedMeals = prevState.map((cartMeal) => {
                if (cartMeal.id === meal.id) {

                    let newQuantity = cartMeal.quantity + operand;
                    if (newQuantity <= 0) {
                        return null;
                    }
                    return { ...cartMeal, quantity: newQuantity };
                }
                return cartMeal;
            })

            updatedMeals = updatedMeals.filter(item => item != null);
            if (updatedMeals.length <= 0) {
                onClose();
            }
            return updatedMeals;
        })

    }
    function handleCheckout() {
        setTotalPrice(totalPrice);
        onCheckout(true);
    }

    return (
        <>
            <h2 className="font-bold text-xl" >Shopping</h2>
            <div id="modal-modal-description" className="mt-6 flex flex-col gap-3">
                <ul className='flex flex-col gap-1'>
                    {cartMeals.map((meal) => {

                        return (
                            <li key={meal.id} className='flex justify-between items-center'>
                                <span>{meal.name} - {meal.quantity} x ${meal.price}</span>
                                <span>
                                    <button type="button"
                                        onClick={() => handleQuantityChange(meal, -1)}
                                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-3 py-1 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ">
                                        -</button>
                                    {meal.quantity}
                                    <button type="button"
                                        onClick={() => handleQuantityChange(meal, 1)}
                                        className="ml-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-2.5 py-1 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                    >+</button>
                                </span>
                            </li>
                        )
                    })}
                </ul>
                <p className='flex justify-end pr-3'>${totalPrice}</p>
                <div className='flex justify-end'>
                    <button type="button" className="py-2.5 px-5 me-2 mb-2 hover:text-gray-500 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        onClick={onClose}
                    >Close</button>
                    <button type="button" className="focus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                        onClick={handleCheckout}
                    >Go to Checkout</button>
                </div>
            </div>
        </>
    )
}
