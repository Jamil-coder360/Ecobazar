import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from "./components/main/Roots";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ShopPage from "./pages/ShopPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import ProductDetailPage from "./pages/ProductDetailPage";

import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import AccounPage from "./pages/AccountPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import PopupCart from "./pages/PopupCart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/pop",
        element: <PopupCart />,
      },
      {
        path: "/check",
        element: <CheckOutPage />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/faqs",
        element: <FaqPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/account",
        element: <AccounPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
