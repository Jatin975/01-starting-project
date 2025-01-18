import React, { useContext, useState } from 'react'
import { Alert, TextField } from '@mui/material';
import CartContext from '../store/CardContext';
import UserProgressContext from '../store/UserProgressContext';
import Dialog from './Dialog';
import { sendOrder } from '../hooks/useHttp';

const defaultFormValue = {
    fullName: "",
    email: "",
    street: "",
    postalCode: "",
    city: ""
}

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const [checkoutDetails, setCheckoutDetails] = useState(defaultFormValue);
    const [orderSubmitError, setOrderSubmitError] = useState("");
    const [isSending, setIsSending] = useState(false);

    const handleCheckout = async (event) => {
        event.preventDefault();

        try {
            const fd = new FormData(event.target);
            const customerData = Object.fromEntries(fd.entries());
            setIsSending(true);
            const responseData = await sendOrder("http://localhost:3000/orders", {
                order: {
                    items: cartCtx.items,
                    customer: customerData,
                }
            });
            console.log("reponse data", responseData);
            setOrderSubmitError(null);
            setCheckoutDetails(defaultFormValue);
            cartCtx.resetItems();
            userProgressCtx.showOrderSubmit();
        } catch (error) {
            setOrderSubmitError(error.message ?? "Error occured while calling the API");
        } finally {
            setIsSending(false);
        }
    }

    const handleCheckoutDetailsChange = (e, name) => {
        setCheckoutDetails((prevState) => {
            return {
                ...prevState,
                [name]: e.target.value
            }
        });
    }

    function handleCloseCheckout() {
        setCheckoutDetails(defaultFormValue);
        userProgressCtx.hideModal();
    }

    return (
        <Dialog open={userProgressCtx.openCheckout} onClose={userProgressCtx.hideModal}>
            {orderSubmitError &&
                <Alert severity="error" onClose={() => setOrderSubmitError(false)} variant="filled" className='mb-4'>
                    {orderSubmitError}
                </Alert>
            }
            <form onSubmit={handleCheckout}>
                <h2 className="font-bold text-xl" >Checkout</h2>
                <p className='my-3'>Total Amount: ${cartCtx.totalPrice}</p>
                <div className='flex flex-col gap-4 mb-10'>
                    <TextField
                        required
                        label="Full Name"
                        id="name"
                        name="name"
                        size="small"
                        className='w-80 rounded-md'
                        variant="filled"
                        value={checkoutDetails.fullName}
                        onChange={(e) => handleCheckoutDetailsChange(e, "fullName")}
                    />
                    <TextField
                        required
                        label="E-Mail Address"
                        id="email"
                        name='email'
                        type="email"
                        variant="filled"
                        size="small"
                        className='w-80 rounded-md'
                        value={checkoutDetails.email}
                        onChange={(e) => handleCheckoutDetailsChange(e, "email")}
                    />
                    <TextField
                        required
                        label="Street"
                        id="street"
                        name='street'
                        size="small"
                        className='w-80 rounded-md'
                        variant="filled"
                        value={checkoutDetails.street}
                        onChange={(e) => handleCheckoutDetailsChange(e, "street")}
                    />

                    <div className="flex gap-4">
                        <TextField
                            required
                            label="Postal Code"
                            id="postal-code"
                            name='postal-code'
                            size="small"
                            className='w-52 rounded-md'
                            variant="filled"
                            value={checkoutDetails.postalCode}
                            onChange={(e) => handleCheckoutDetailsChange(e, "postalCode")}
                        />
                        <TextField
                            required
                            label="City"
                            id="city"
                            name='city'
                            size="small"
                            className='w-52 rounded-md'
                            variant="filled"
                            value={checkoutDetails.city}
                            onChange={(e) => handleCheckoutDetailsChange(e, "city")}
                        />
                    </div>
                </div>
                {isSending ? <p className="text-right">Sending the request...</p> :
                    <div className='flex justify-end'>
                        <button type="button" className="py-2.5 px-5 me-2 mb-2 hover:text-gray-500 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            onClick={handleCloseCheckout}
                        >Close</button>
                        <button type="submit" className="focus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                        >Submit Order</button>
                    </div>
                }
            </form>
        </Dialog>
    )
}
