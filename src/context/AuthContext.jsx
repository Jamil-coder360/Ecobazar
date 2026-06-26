import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,signOut ,onAuthStateChanged
} from "firebase/auth";

import auth from "../firebase.config";
import { toast } from "react-toastify";

export const AuthContext = createContext({
  user: {},
  setUser: () => {},
});
const AuthProvider = ({ children }) => {
 const [user, setUser] = useState(null);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return () => unsubscribe();
}, []);

  const signUp = (email, password, confirmpassword) => {
    createUserWithEmailAndPassword(auth, email, password, confirmpassword)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
const logOut = ()=>{
  if (!user) {
    toast.warning("No user found");
    return;
  }
// const auth = getAuth();
return signOut(auth).then(() => {
  toast.success("Logout Successful ✅");
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}
  return (
    <AuthContext value={{ user, setUser, signUp, signIn ,logOut }}>
      {children}
    </AuthContext>
  );
};
export default AuthProvider;
