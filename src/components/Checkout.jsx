import React, { useContext, useState } from 'react'
import { Box, Modal, TextField } from '@mui/material';
import errorMessages from '../constants/errorMessages';
import CartContext from '../store/CardContext';

export default function Checkout({ onClose, onOrderSubmit }) {
    const cartCtx = useContext(CartContext);

    const [checkoutDetails, setCheckoutDetails] = useState({
        fullName: "",
        email: "",
        street: "",
        postalCode: "",
        city: ""
    });

    const [fullNameError, setFullNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [streetError, setStreetError] = useState(null);
    const [postalCodeError, setPostalCodeError] = useState(null);
    const [cityError, setCityError] = useState(null);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const formValidation = () => {
        let isFormValid = true;
        if (!checkoutDetails.fullName) {
            isFormValid = false;
            setFullNameError(errorMessages.fullNameIsRequired);
        }
        if (!checkoutDetails.email) {
            isFormValid = false;
            setEmailError(errorMessages.emailIsRequired);
        }
        else if (!emailRegex.test(checkoutDetails.email)) {
            isFormValid = false;
            setEmailError(errorMessages.emailIsNotValid);
        }
        if (!checkoutDetails.street) {
            isFormValid = false;
            setStreetError(errorMessages.streetIsRequired);
        }
        if (!checkoutDetails.postalCode) {
            isFormValid = false;
            setPostalCodeError(errorMessages.postalCodeIsRequierd);
        }
        if (!checkoutDetails.city) {
            isFormValid = false;
            setCityError(errorMessages.cityIsRequied);
        }
        return isFormValid;
    }

    const handleCheckout = async () => {
        let validForm = formValidation();
        if (validForm) {
            onOrderSubmit(true);
            cartCtx.resetItems();
            onClose();
            // const orderSubmit = await fetch("http://localhost:3000/meals", );
        }
    }

    const handleCheckoutDetailsChange = (e, name) => {
        if (name === "fullName") {
            setFullNameError(null);
        } else if (name === "email") {
            setEmailError(null);
        } else if (name === "street") {
            setStreetError(null);
        } else if (name === "postalCode") {
            setPostalCodeError(null);
        } else if (name === "city") {
            setCityError(null);
        }
        setCheckoutDetails((prevState) => {
            return {
                ...prevState,
                [name]: e.target.value
            }
        });
    }

    return (
        <form>
            <h2 className="font-bold text-xl" >Checkout</h2>
            <p className='my-3'>Total Amount: {cartCtx.totalPrice}</p>
            <div className='flex flex-col gap-4 mb-10'>
                <TextField
                    required
                    label="Full Name"
                    id="fullName"
                    size="small"
                    className='w-80 rounded-md'
                    variant="filled"
                    value={checkoutDetails.fullName}
                    onChange={(e) => handleCheckoutDetailsChange(e, "fullName")}
                    error={fullNameError}
                    helperText={fullNameError}
                />
                <TextField
                    required
                    label="E-Mail Address"
                    id="emailAddress"
                    variant="filled"
                    size="small"
                    className='w-80 rounded-md'
                    value={checkoutDetails.email}
                    onChange={(e) => handleCheckoutDetailsChange(e, "email")}
                    error={emailError}
                    helperText={emailError}
                />
                <TextField
                    required
                    label="Street"
                    id="emailAddress"
                    size="small"
                    className='w-80 rounded-md'
                    variant="filled"
                    value={checkoutDetails.street}
                    onChange={(e) => handleCheckoutDetailsChange(e, "street")}
                    error={streetError}
                    helperText={streetError}
                />

                <div className="flex gap-4">
                    <TextField
                        required
                        label="Postal Code"
                        id="postalCode"
                        size="small"
                        className='w-52 rounded-md'
                        variant="filled"
                        value={checkoutDetails.postalCode}
                        onChange={(e) => handleCheckoutDetailsChange(e, "postalCode")}
                        error={postalCodeError}
                        helperText={postalCodeError}
                    />
                    <TextField
                        required
                        label="City"
                        id="city"
                        size="small"
                        className='w-52 rounded-md'
                        variant="filled"
                        value={checkoutDetails.city}
                        onChange={(e) => handleCheckoutDetailsChange(e, "city")}
                        error={cityError}
                        helperText={cityError}
                    />
                </div>
            </div>
            <div className='flex justify-end'>
                <button type="button" className="py-2.5 px-5 me-2 mb-2 hover:text-gray-500 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={onClose}
                >Close</button>
                <button type="button" className="focus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                    onClick={handleCheckout}
                >Submit Order</button>
            </div>
        </form>
    )
}
