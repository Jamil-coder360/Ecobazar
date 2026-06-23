import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from './components/main/Roots';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ShopPage from './pages/ShopPage';
import QuickView from './pages/QuickView';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: < Roots/>,
    children:[
      {
        index:true,
        element:<HomePage />
      },
      {
        path:"/shop",
        element: <ShopPage />
      },
      {
        path:"/view",
        element: <QuickView />
      },
      {
        path:"/signin",
        element: <SignInPage />
      },
      {
        path:"/signup",
        element: <SignUpPage />
      },
      {
        path:"*",
        element:<ErrorPage />
      }
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App