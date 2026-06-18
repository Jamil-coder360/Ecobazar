import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from './components/main/Roots';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ShopPage from './pages/ShopPage';

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