import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
addToCart(state, action) {
  const product = action.payload;
  const existing = state.items.find((item) => item.id === product.id);

  if (existing) {
    if (existing.quantity < 5) {
      existing.quantity += product.quantity ?? 1;
    }
  } else {
    state.items.push({
      ...product,
      quantity: product.quantity ?? 1,
    });
    toast.success(`${product.name} added to cart!`);
  }
},
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
       item.quantity = Math.min(5, Math.max(1, quantity));
       if (item.quantity === 5) {
         toast.info(`${item.name} is reached Maximum quantity .`);
       }
      }
    },
    clearCart(state) {
      state.items = [];
    },
    setCartItems(state, action) {
      state.items = action.payload ?? [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
