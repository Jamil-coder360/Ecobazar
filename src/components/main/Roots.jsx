import React from 'react'
import { Outlet } from 'react-router';
import Header from "./Header";
import Footer from "./Footer";
import { QuickViewProvider } from '../../context/QuickViewContext';
import { CartPopupProvider } from '../../context/CartPopupContext';

const Roots = () => {
  return (
    <QuickViewProvider>
      <CartPopupProvider>
        <Header />
        <Outlet />
        <Footer />
      </CartPopupProvider>
    </QuickViewProvider>
  )
}

export default Roots