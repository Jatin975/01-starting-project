import { createContext, useReducer } from "react";


const CartContext = createContext({
    items: [],
    totalPrice: 0,
    addItem: (item) => { },
    removeItem: (id) => { },
    resetItems: () => { }
});

function calculateTotalPriceOfMeals(mealItems) {
    let totalMealPrice = 0;
    for (let meal of mealItems) {
        let price = parseFloat(meal.price);
        let mealPrice = price * meal.quantity;
        totalMealPrice += mealPrice;
    }
    if (Math.floor(totalMealPrice) === totalMealPrice) {
        return totalMealPrice;
    }
    return totalMealPrice.toFixed(2);
}

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = [...state.items];
        const existingCartItem = state.items.findIndex(item => item.id === action.item.id);
        if (existingCartItem > -1) {
            const existingItem = state.items[existingCartItem];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingCartItem] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }
        const totalPrice = calculateTotalPriceOfMeals(updatedItems);
        return { ...state, items: updatedItems, totalPrice };
    }

    if (action.type === 'REMOVE_ITEM') {
        let updatedItems = [...state.items];
        const existingCartItemIndex = updatedItems.findIndex(x => x.id === action.mealId);
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem.quantity === 1) {
            updatedItems = updatedItems.filter(item => item.id !== action.mealId)
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
            }
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        const totalPrice = calculateTotalPriceOfMeals(updatedItems);
        return { ...state, items: updatedItems, totalPrice };
    }

    if (action.type === 'RESET_ITEMS') {
        return { ...state, items: [], totalPrice: 0 };
    }

    return state;
}

export function CardContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
        dispatchCartAction({ type: 'ADD_ITEM', item })
    }

    function removeItem(id) {
        dispatchCartAction({ type: 'REMOVE_ITEM', mealId: id })
    }

    function resetItems() {
        dispatchCartAction({ type: 'RESET_ITEMS' });
    }

    const cardContext = {
        items: cart.items,
        totalPrice: cart.totalPrice,
        addItem,
        removeItem,
        resetItems
    };

    return <CartContext.Provider value={cardContext}>{children}</CartContext.Provider>
}

export default CartContext;