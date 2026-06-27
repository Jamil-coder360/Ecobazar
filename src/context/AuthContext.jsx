import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import auth from "../firebase.config";
import { toast } from "react-toastify";
import { clearCart, setCartItems } from "../features/cart/cartSlice";
import { clearWishlist, setWishlistItems } from "../features/wish/wishlistSlice";
import { loadStateForUser, setPersistedUser } from "../store";

export const AuthContext = createContext({
  user: {},
  setUser: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const restoreUserState = (currentUser) => {
      if (currentUser) {
        setPersistedUser(currentUser.uid);
        const persistedState = loadStateForUser(currentUser.uid);
        dispatch(setCartItems(persistedState?.cart?.items ?? []));
        dispatch(setWishlistItems(persistedState?.wishlist?.items ?? []));
      } else {
        setPersistedUser(null);
        dispatch(clearCart());
        dispatch(clearWishlist());
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      restoreUserState(currentUser);
    });

    return () => unsubscribe();
  }, [dispatch]);

  const signUp = (email, password, confirmpassword) => {
    return createUserWithEmailAndPassword(auth, email, password, confirmpassword);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      toast.success("Logout Successful ✅");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signUp, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
