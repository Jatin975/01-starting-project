
import Navbar from './components/Navbar';
import Meals from './components/Meals';
import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import Cart from './components/Cart';
import './index.css'
import Checkout from './components/Checkout';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#e4ddd4',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'black',
  borderRadius: "6px"
};

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartMeals, setCartMeals] = useState([]);

  const handleClose = () => {
    setOpenModal(false)
  };

  return (
    <>
      <Navbar
        cartMeals={cartMeals}
        openModal={setOpenModal}
        setOpenCheckout={setOpenCheckout}
      />
      <Modal
        open={openModal}
      >
        <Box sx={style}>
          {openCheckout ?
            <Checkout
              totalPrice={totalPrice}
              onClose={handleClose}
            />
            : <Cart
              setCartMeals={setCartMeals}
              cartMeals={cartMeals}
              onClose={handleClose}
              onCheckout={setOpenCheckout}
              setTotalPrice={setTotalPrice}
            />
          }
        </Box>
      </Modal>
      <Meals cartMeals={cartMeals} setCartMeals={setCartMeals} />

    </>
  );
}

export default App;
