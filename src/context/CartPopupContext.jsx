import { createContext, useContext, useState } from "react";
import PopupCart from "../pages/PopupCart";

const CartPopupContext = createContext({
  showCartPopup: () => {},
  closeCartPopup: () => {},
});

export const CartPopupProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const showCartPopup = () => {
    setCartOpen(true);
  };

  const closeCartPopup = () => {
    setCartOpen(false);
  };

  return (
    <CartPopupContext.Provider value={{ showCartPopup, closeCartPopup }}>
      {children}

      <PopupCart
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />
    </CartPopupContext.Provider>
  );
};

export const useCartPopup = () => useContext(CartPopupContext);