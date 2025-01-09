import React, { useContext, useState } from 'react'
import logo from '../assets/logo.jpg'
import CartContext from '../store/CardContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Navbar() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext)
  const isCartEmpty = (cartCtx.items.length === 0);
  const totalItems = cartCtx.items.reduce((totolNumberOfItems, item) => {
    return totolNumberOfItems + item.quantity;
  }, 0)

  function handleOpenModal() {
    if (isCartEmpty) {
      return
    }
    userProgressCtx.showCart();
  }

  return (
    <div id="main-header">
      <h1 id="title"> <img src={logo} alt="Food logo" />React Food</h1>
      <button onClick={handleOpenModal} className={isCartEmpty ? `hover:cursor-not-allowed` : ""}>{`Cart(${totalItems})`}</button>
    </div>
  )
}
