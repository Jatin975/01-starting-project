import { createContext, useState } from "react";

const UserProgressContext = createContext({
    openCart: false,
    openCheckout: false,
    openOrderSubmit: false,
    showCart: () => { },
    showCheckout: () => { },
    showOrderSubmit: () => { },
    hideModal: () => { }
});

export function UserProgressContextProvider({ children }) {
    const [userProgress, setUserProgress] = useState({
        openCart: false,
        openCheckout: false,
        openOrderSubmit: false
    });

    function showCart() {
        setUserProgress({
            openCart: true,
            openCheckout: false,
            openOrderSubmit: false,
        })
    }

    function hideModal() {
        setUserProgress({
            openCart: false,
            openCheckout: false,
            openOrderSubmit: false,
        })
    }

    function showCheckout() {
        setUserProgress({
            openCart: false,
            openCheckout: true,
            openOrderSubmit: false,
        })
    }

    function showOrderSubmit() {
        setUserProgress({
            openCart: false,
            openCheckout: false,
            openOrderSubmit: true,
        })
    }

    const userProgressContext = {
        openCart: userProgress.openCart,
        openCheckout: userProgress.openCheckout,
        openOrderSubmit: userProgress.openOrderSubmit,
        showCart,
        showCheckout,
        showOrderSubmit,
        hideModal
    }

    return <UserProgressContext.Provider value={userProgressContext}>{children}</UserProgressContext.Provider>
}


export default UserProgressContext;