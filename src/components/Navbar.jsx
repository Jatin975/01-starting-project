import React, { useContext, useState } from 'react'
import logo from '../assets/logo.jpg'
import CartContext from '../store/CardContext';

export default function Navbar({ openModal, setOpenCart }) {
  const cartCtx = useContext(CartContext);

  function handleOpenModal() {
    if (cartCtx.items.length === 0) {
      return
    }
    setOpenCart(true);
    openModal(true);
  }

  return (
    <div id="main-header">
      <h1 id="title"> <img src={logo} alt="Food logo" />React Food</h1>
      <button onClick={handleOpenModal}>{`Cart(${cartCtx.items.length})`}</button>
    </div>
  )
}
