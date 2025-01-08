
import Navbar from './components/Navbar';
import Meals from './components/Meals';
import { useState } from 'react';
import Cart from './components/Cart';
import './index.css'
import Checkout from './components/Checkout';
import OrderCompletedDialog from './components/OrderCompletedDialog';
import Dialog from './components/Dialog';
import { CardContextProvider } from './store/CardContext';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);

  const handleClose = () => {
    setOpenModal(false)
  };

  const handleSuccessDialogClose = () => {
    setIsOrderSubmitted(false);
  }

  return (
    <CardContextProvider>
      <Navbar
        openModal={setOpenModal}
        setOpenCart={setOpenCart}
      />
      <Dialog
        open={openModal}
      >
        {openCart ? <Cart
          onClose={handleClose}
          setOpenCart={setOpenCart}
        /> :
          <Checkout
            onClose={handleClose}
            onOrderSubmit={setIsOrderSubmitted}
          />
        }
      </Dialog>
      <Dialog open={isOrderSubmitted}>
        <OrderCompletedDialog handleSuccessDialogClose={handleSuccessDialogClose} />
      </Dialog>
      <Meals />
    </CardContextProvider>
  );
}

export default App