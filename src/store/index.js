import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import wishlistReducer from "../features/wish/wishlistSlice";

let currentPersistedUserId = null;

const storageKeys = (userId) => ({
  cart: `ecobazar_cart_${userId}`,
  wishlist: `ecobazar_wishlist_${userId}`,
});

export const setPersistedUser = (userId) => {
  currentPersistedUserId = userId;
};

export const loadStateForUser = (userId) => {
  if (!userId) return undefined;
  try {
    const keys = storageKeys(userId);
    const cartData = localStorage.getItem(keys.cart);
    const wishlistData = localStorage.getItem(keys.wishlist);

    return {
      cart: cartData ? JSON.parse(cartData) : { items: [] },
      wishlist: wishlistData ? JSON.parse(wishlistData) : { items: [] },
    };
  } catch (error) {
    console.warn("Failed to load persisted user state:", error);
    return undefined;
  }
};

const saveStateForUser = (state) => {
  if (!currentPersistedUserId) return;
  try {
    const keys = storageKeys(currentPersistedUserId);
    localStorage.setItem(keys.cart, JSON.stringify(state.cart ?? { items: [] }));
    localStorage.setItem(keys.wishlist, JSON.stringify(state.wishlist ?? { items: [] }));
  } catch (error) {
    console.warn("Failed to save persisted user state:", error);
  }
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

store.subscribe(() => {
  saveStateForUser(store.getState());
});
