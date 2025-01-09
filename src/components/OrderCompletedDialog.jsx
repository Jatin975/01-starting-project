import React, { useContext } from 'react'
import UserProgressContext from '../store/UserProgressContext'
import Dialog from './Dialog';

export default function OrderCompletedDialog() {
    const userProgressCtx = useContext(UserProgressContext);

    return (
        <Dialog open={userProgressCtx.openOrderSubmit}>
            <h2 className="font-bold text-xl mb-2">Success!</h2>
            <p className='mb-1' >Your order was successfully submitted</p>
            <p>We will get back to you with more details via email within the next few minutes</p>
            <div className='flex w-full mt-4 justify-end'>
                <button type="button" className="focus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 w-28"
                    onClick={userProgressCtx.hideModal}
                >Okay</button>
            </div>
        </Dialog>
    )
}
