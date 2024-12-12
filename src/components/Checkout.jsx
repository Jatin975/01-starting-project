import React, { useState } from 'react'
import Input from './Input';
import { TextField } from '@mui/material';

export default function Checkout({ totalPrice, onClose }) {
    const [fullName, setFullName] = useState("");
    const [email, setEmailAddress] = useState("");
    const [street, setStreet] = useState("");
    const [postalCode, setPostalCode] = useState();
    const [city, setCity] = useState("");

    return (
        <form>
            <h2 className="font-bold text-xl" >Checkout</h2>
            <p className='my-3'>Total Amount: {totalPrice}</p>
            <TextField
                label="Full Name"
                id="fullName"
                size="small"
                className='bg-white'
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
                sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "#dbb441", // Ensure label color stays black on focus
                    },
                    "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                            borderColor: "#dbb441"
                        },
                    },
                }}
            />

            {/* <Input id={"fullName"} labelText={"Full Name"} inputType={"text"} value={fullName} handleChange={setFullName} />
            <Input id={"email"} labelText={"E-Mail Address"} inputType={"text"} value={email} handleChange={setEmailAddress} />
            <Input id={"street"} labelText={"Street"} inputType={"text"} value={street} handleChange={setStreet} />
            <div className='flex gap-4'>
                <Input id={"postalCode"} labelText={"Postal Code"} inputType={"number"} value={postalCode} handleChange={setPostalCode} className='w-48' />
                <Input id={"city"} labelText={"City"} inputType={"text"} value={city} handleChange={setCity} className='w-48' />
            </div> */}

            <div className='flex justify-end'>
                <button type="button" className="py-2.5 px-5 me-2 mb-2 hover:text-gray-500 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={onClose}
                >Close</button>
                <button type="button" className="focus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                // onClick={handleCheckout}
                >Submit Order</button>
            </div>
        </form>
    )
}
