import React, { useState } from 'react'
import logo from '../assets/logo.jpg'

export default function Navbar({ cartMeals, openModal, setOpenCheckout }) {
  function handleOpenModal() {
    if (cartMeals.length === 0) {
      return
    }
    setOpenCheckout(false);
    openModal(true);
  }

  return (
    <div id="main-header">
      <h1 id="title"> <img src={logo} alt="Food logo" />React Food</h1>
      <button onClick={handleOpenModal}>{`Cart(${cartMeals.length})`}</button>
    </div>
  )
}
