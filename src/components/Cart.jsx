import React, { useContext } from 'react'
import '../index.css'
import CartContext from '../store/CardContext';
import CartItem from './CartItem';
import UserProgressContext from '../store/UserProgressContext';
import Dialog from './Dialog';

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    function handleCheckout() {
        userProgressCtx.showCheckout();
    }

    function addMealQuntity(meal) {
        cartCtx.addItem(meal);
    }

    function subtractMealQuantity(mealId) {
        if (cartCtx.items.length === 1 && cartCtx.items[0].quantity === 1) {
            userProgressCtx.hideModal();
        }
        cartCtx.removeItem(mealId)
    }

    return (
        <Dialog open={userProgressCtx.openCart} onClose={userProgressCtx.hideModal}>
            <h2 className="font-bold text-xl" >Shopping</h2>
            <div id="modal-modal-description" className="mt-6 flex flex-col gap-3">
                <ul className='flex flex-col gap-1'>
                    {cartCtx.items.map((meal) => {

                        return (
                            <CartItem key={meal.id} meal={meal} addMealQuntity={addMealQuntity} subtractMealQuantity={subtractMealQuantity} />
                        )
                    })}
                </ul>
                <p className='flex justify-end pr-3'>${cartCtx.totalPrice}</p>
                <div className='flex justify-end'>
                    <button type="button" className="py-2.5 px-5 me-2 mb-2 hover:text-gray-500 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        onClick={userProgressCtx.hideModal}
                    >Close</button>
                    <button type="button" className="focus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                        onClick={handleCheckout}
                    >Go to Checkout</button>
                </div>
            </div>
        </Dialog>
    )
}
